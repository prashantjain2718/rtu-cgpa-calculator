"use client";

import { useState, useMemo, useEffect } from "react";
import { ALL_DATA, GRADES } from "../../lib/data";

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default function Home() {
  const [branch, setBranch] = useState("CSE");
  const [semId, setSemId] = useState(1);
  const [grades, setGrades] = useState({});
  const [prevCgpa, setPrevCgpa] = useState("");
  const [computedCgpa, setComputedCgpa] = useState("—");
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const branches = Object.keys(ALL_DATA);
  const semestersForBranch = ALL_DATA[branch] || [];

  const currentSem = useMemo(() => {
    return (
      semestersForBranch.find((s) => s.id === semId) || semestersForBranch[0]
    );
  }, [semestersForBranch, semId]);

  useEffect(() => {
    if (currentSem) {
      const initialGrades = {};
      currentSem.subjects.forEach((sub) => {
        initialGrades[sub.code] = 10;
      });
      setGrades(initialGrades);
      setComputedCgpa("—");
    }
  }, [currentSem]);

  const handleGradeChange = (code, val) => {
    setGrades((prev) => ({ ...prev, [code]: Number(val) }));
  };

  const semCredits = useMemo(() => {
    if (!currentSem) return 0;
    return currentSem.subjects.reduce((a, s) => a + Number(s.credits), 0);
  }, [currentSem]);

  const { sgpa } = useMemo(() => {
    if (!currentSem) return { sgpa: null };
    let num = 0,
      den = 0;
    currentSem.subjects.forEach((sub) => {
      const g = grades[sub.code];
      const c = Number(sub.credits);
      if (g !== undefined && !isNaN(g)) {
        num += g * c;
        den += c;
      }
    });
    if (den === 0) return { sgpa: null };
    return { sgpa: Math.round((num / den) * 100) / 100 };
  }, [currentSem, grades]);

  const creditsUsedPrev = useMemo(() => {
    let total = 0;
    const data = ALL_DATA[branch] || [];
    for (let s of data) {
      if (s.id < (currentSem ? currentSem.id : 1)) {
        total += s.subjects.reduce((a, sub) => a + Number(sub.credits), 0);
      }
    }
    return total;
  }, [branch, currentSem]);

  const handleCalcCgpa = () => {
    const prev = parseFloat(prevCgpa);
    if (isNaN(prev)) {
      alert("Enter valid Previous CGPA");
      return;
    }
    if (creditsUsedPrev === 0) {
      setComputedCgpa(sgpa ? sgpa.toFixed(2) : "—");
      return;
    }
    if (sgpa === null) return;
    const final =
      (prev * creditsUsedPrev + sgpa * semCredits) /
      (creditsUsedPrev + semCredits);
    setComputedCgpa(final.toFixed(2));
  };

  const handleReset = () => {
    if (currentSem) {
      const initialGrades = {};
      currentSem.subjects.forEach((sub) => {
        initialGrades[sub.code] = 10;
      });
      setGrades(initialGrades);
      setComputedCgpa("—");
    }
  };

  const handleCopy = async () => {
    const semName = currentSem ? `${ordinal(currentSem.id)} Semester` : "";
    const sgpaText = sgpa !== null ? sgpa.toFixed(2) : "—";
    const text = `RTU Result - ${branch} | ${semName}\nSGPA: ${sgpaText}\nCGPA: ${computedCgpa}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Copy failed");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const sgpaBg =
    sgpa >= 8.5
      ? "linear-gradient(135deg, #4ade80, #22c55e)"
      : sgpa >= 7.5
        ? "linear-gradient(135deg, #fff, #94a3b8)"
        : "linear-gradient(135deg, #fbbf24, #d97706)";

  const gamifiedColor =
    sgpa >= 8.5
      ? "#10b981" // Emerald
      : sgpa >= 7.5
        ? "#0ea5e9" // Sky
        : sgpa !== null
          ? "#f59e0b" // Amber
          : "var(--primary)"; // Default

  return (
    <>
      <div className="bg-glow"></div>

      <main className="container">
        <div className="print-only-header">
          <div className="print-title">
            <h1>RTU Semester Grade Report</h1>
            <div className="print-timestamp" id="printMetaDate">
              Generated on: {mounted ? new Date().toLocaleDateString() : ""} |
              Branch: {branch}
            </div>
          </div>

          <div className="student-details-grid">
            <div className="detail-box">
              <span className="label">Name:</span>
              <span className="line">____________________________</span>
            </div>
            <div className="detail-box">
              <span className="label">Roll No:</span>
              <span className="line">____________________________</span>
            </div>
          </div>
        </div>

        <div className="card glass-effect">
          <header>
            <div className="logo-container">
              <div className="logo">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
            </div>
            <div className="header-text">
              <h1>RTU CGPA Calculator</h1>
              <div className="lead">
                Based on the Official grading system for CSE, IT, AI&DS, ME,
                ECE, EE
              </div>
            </div>
          </header>

          <div className="controls">
            <div className="control-group">
              <label htmlFor="branchSelect">
                <i className="fa-solid fa-code-branch"></i> Branch
              </label>
              <div className="select-wrapper">
                <select
                  suppressHydrationWarning
                  id="branchSelect"
                  value={branch}
                  onChange={(e) => {
                    setBranch(e.target.value);
                    const defaultSemId = ALL_DATA[e.target.value]?.[0]?.id || 1;
                    setSemId(defaultSemId);
                  }}
                >
                  {branches.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="control-group">
              <label htmlFor="semesterSelect">
                <i className="fa-solid fa-book-open"></i> Semester
              </label>
              <div className="select-wrapper">
                <select
                  suppressHydrationWarning
                  id="semesterSelect"
                  value={semId}
                  onChange={(e) => setSemId(Number(e.target.value))}
                >
                  {semestersForBranch.map((s) => (
                    <option key={s.id} value={s.id}>
                      {ordinal(s.id)} Semester
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ flexGrow: 1 }}></div>
            <button
              suppressHydrationWarning
              id="resetGrades"
              className="btn-secondary"
              onClick={handleReset}
            >
              <i className="fa-solid fa-rotate-right"></i> Reset
            </button>
          </div>

          <div className="calculator-grid">
            <div className="subjects-container">
              <div className="semester-header">
                <span className="sem-title" id="semesterTitle">
                  {currentSem
                    ? `${ordinal(currentSem.id)} Semester`
                    : "Loading..."}
                </span>
                <span className="credits-badge" id="totalCreditsBadge">
                  {semCredits} Credits
                </span>
              </div>
              <div id="subjectsArea">
                <table>
                  <thead>
                    <tr>
                      <th style={{ width: "15%" }}>Code</th>
                      <th style={{ width: "45%" }}>Subject</th>
                      <th style={{ width: "15%", textAlign: "center" }}>
                        Credit
                      </th>
                      <th style={{ width: "25%" }}>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentSem?.subjects.map((sub) => (
                      <tr key={sub.code}>
                        <td className="code-col" data-label="Code">
                          {sub.code}
                        </td>
                        <td data-label="Subject">{sub.name}</td>
                        <td className="credit-col" data-label="Credit">
                          {sub.credits}
                        </td>
                        <td data-label="Grade">
                          <select
                            aria-label={`Grade for ${sub.code}`}
                            suppressHydrationWarning
                            className="grade-select"
                            data-credits={sub.credits}
                            value={grades[sub.code] ?? 10}
                            onChange={(e) =>
                              handleGradeChange(sub.code, e.target.value)
                            }
                          >
                            {GRADES.map((g) => (
                              <option key={g.value} value={g.value}>
                                {g.label}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="results-panel">
              <div
                className="result-box"
                style={{ "--gamified-color": gamifiedColor }}
              >
                <div className="sgpa-wrapper">
                  <div className="result-label">Your SGPA</div>
                  <div
                    className="sgpa-display"
                    id="sgpaDisplay"
                    style={{ backgroundImage: sgpaBg }}
                  >
                    {sgpa !== null ? sgpa.toFixed(2) : "—"}
                  </div>
                </div>

                <div className="cgpa-tools">
                  <div className="input-label-group">
                    Calculate CGPA (Optional)
                  </div>
                  <div className="input-row">
                    <input
                      suppressHydrationWarning
                      id="prevCgpa"
                      type="text"
                      placeholder="Prev CGPA"
                      inputMode="decimal"
                      value={prevCgpa}
                      onChange={(e) => setPrevCgpa(e.target.value)}
                    />
                    <input
                      suppressHydrationWarning
                      id="curSgpa"
                      type="text"
                      placeholder="SGPA"
                      readOnly
                      value={sgpa !== null ? sgpa.toFixed(2) : ""}
                    />
                  </div>
                  <button
                    suppressHydrationWarning
                    id="calcCgpaBtn"
                    className="btn-primary"
                    onClick={handleCalcCgpa}
                  >
                    Calculate CGPA
                  </button>
                </div>

                <div className="stats-grid">
                  <div className="stat-row highlight">
                    <span>New CGPA</span>{" "}
                    <span id="cgpaOut">{computedCgpa}</span>
                  </div>
                  <div className="stat-row">
                    <span>Prev. Credits</span>{" "}
                    <span id="creditsUsedPrev">{creditsUsedPrev}</span>
                  </div>
                  <div className="stat-row">
                    <span>Curr. Credits</span>{" "}
                    <span id="creditsUsedCur">{semCredits}</span>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <button
                  suppressHydrationWarning
                  id="exportBtn"
                  className="btn-outline"
                  onClick={handleCopy}
                >
                  {copied ? "Copied!" : "Copy Result"}
                </button>
                <button
                  suppressHydrationWarning
                  id="printBtn"
                  className="btn-outline"
                  onClick={handlePrint}
                >
                  <i className="fa-solid fa-print"></i> Print Report
                </button>
              </div>
            </aside>
          </div>
        </div>

        <section className="seo-content glass-effect">
          <div className="seo-header">
            <h2>
              <i className="fa-solid fa-circle-info"></i> RTU Grading System &
              Guide
            </h2>
          </div>
          <div className="seo-body">
            <p>
              This calculator is designed based on the{" "}
              <strong>
                Rajasthan Technical University (RTU) Choice Based Credit System
                (CBCS)
              </strong>
              . It helps students accurately calculate their Semester Grade
              Point Average (SGPA) and Cumulative Grade Point Average (CGPA).
            </p>

            <h3>1. RTU Grade to Point Mapping</h3>
            <p>
              RTU follows a 10-point grading scale. Below is the official table
              used for calculations:
            </p>
            <div className="table-responsive">
              <table className="seo-table">
                <thead>
                  <tr>
                    <th>Grade</th>
                    <th>Points</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A++</td>
                    <td>10</td>
                    <td>Outstanding</td>
                  </tr>
                  <tr>
                    <td>A+</td>
                    <td>9</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td>A</td>
                    <td>8.5</td>
                    <td>Very Good</td>
                  </tr>
                  <tr>
                    <td>B+</td>
                    <td>8</td>
                    <td>Good</td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>7.5</td>
                    <td>Above Average</td>
                  </tr>
                  <tr>
                    <td>C+</td>
                    <td>7</td>
                    <td>Average</td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td>6.5</td>
                    <td>Below Average</td>
                  </tr>
                  <tr>
                    <td>D+</td>
                    <td>6</td>
                    <td>Marginal</td>
                  </tr>
                  <tr>
                    <td>D</td>
                    <td>5.5</td>
                    <td>Pass</td>
                  </tr>
                  <tr>
                    <td>E+</td>
                    <td>5</td>
                    <td>Pass (Old Regulation)</td>
                  </tr>
                  <tr>
                    <td>E</td>
                    <td>4</td>
                    <td>Pass (Old Regulation)</td>
                  </tr>
                  <tr>
                    <td>F</td>
                    <td>0</td>
                    <td>Fail</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2. Formulas Used</h3>
            <div className="formula-box">
              <ul>
                <li>
                  <strong>SGPA:</strong>{" "}
                  <code>Sum(Credit × Grade Point) / Sum(Total Credits)</code>
                </li>
                <li>
                  <strong>CGPA:</strong>{" "}
                  <code>
                    (Prev CGPA × Prev Credits + Current SGPA × Current Credits)
                    / Total Credits
                  </code>
                </li>
              </ul>
            </div>

            <h3>3. Example Calculation</h3>
            <p>
              If a student scores <strong>A (8.5)</strong> in a 4-credit subject
              and <strong>B (7.5)</strong> in a 2-credit lab:
              <br />
              Total Points = (8.5 × 4) + (7.5 × 2) = 34 + 15 = 49
              <br />
              Total Credits = 4 + 2 = 6<br />
              <strong>SGPA = 49 / 6 = 8.16</strong>
            </p>

            <h3>4. How to Verify Results?</h3>
            <p>
              Always compare the calculated SGPA with your official marksheet.
              You can download your official marksheet from{" "}
              <a
                href="https://rtu.sumsraj.com/exam/report/downloadgradesheet.aspx"
                target="_blank"
                style={{ color: "var(--primary)" }}
                rel="noreferrer"
                aria-label="Download official RTU marksheet"
              >
                rtu.sumsraj.com marksheet portal
              </a>{" "}
              or the main{" "}
              <a
                href="https://rtu.ac.in"
                target="_blank"
                style={{ color: "var(--primary)" }}
                rel="noreferrer"
                aria-label="Visit official RTU website"
              >
                rtu.ac.in
              </a>{" "}
              website by entering your roll number.
            </p>

            <h3>5. Common Errors</h3>
            <ul>
              <li>
                <strong>Averaging SGPAs:</strong> Don&apos;t just add SGPAs and
                divide by 2. You must use the weighted credit formula.
              </li>
              <li>
                <strong>Ignoring Backlogs:</strong> Failed subjects (F grade)
                count as 0 points but still add to the credit total, lowering
                SGPA significantly.
              </li>
            </ul>
          </div>
        </section>

        <div className="footer-branding">
          <div>
            Developed with{" "}
            <i className="fa-solid fa-heart" style={{ color: "#ef4444" }}></i>{" "}
            by <strong>Prashant Jain</strong>
          </div>
          <div
            style={{
              marginTop: "12px",
              fontSize: "1.15em",
              opacity: 0.9,
              fontWeight: "600",
            }}
          >
            Powered by{" "}
            <a
              href="https://notesea.xyz"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
              aria-label="Visit Notesea website"
            >
              notesea (notesea.xyz)
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
