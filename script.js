/* === DATA (unchanged) === */
const SEMESTER_DATA = [
  {
    id: 1,
    name: "1st Semester (First Year)",
    subjects: [
      { code: "1FY2-01", name: "Engineering Mathematics-I", credits: 4 },
      { code: "1FY2-03", name: "Engineering Chemistry", credits: 4 },
      { code: "1FY1-05", name: "Human Values", credits: 2 },
      {
        code: "1FY3-07",
        name: "Basic Mechanical Engineering",
        credits: 2,
      },
      { code: "1FY3-09", name: "Basic Civil Engineering", credits: 2 },
      { code: "1FY2-21", name: "Engineering Chemistry Lab", credits: 1 },
      { code: "1FY2-23", name: "Human Values Activities", credits: 1 },
      {
        code: "1FY3-25",
        name: "Manufacturing Practices Workshop",
        credits: 1.5,
      },
      {
        code: "1FY3-27",
        name: "Basic Civil Engineering Lab",
        credits: 1,
      },
      {
        code: "1FY3-28",
        name: "Computer Aided Engineering Graphics",
        credits: 1.5,
      },
      { code: "SODECA", name: "SODECA", credits: 0.5 },
    ],
  },
  {
    id: 2,
    name: "2nd Semester (First Year)",
    subjects: [
      { code: "2FY2-01", name: "Engineering Mathematics-II", credits: 4 },
      { code: "2FY2-02", name: "Engineering Physics", credits: 4 },
      { code: "2FY1-04", name: "Communication Skills", credits: 2 },
      {
        code: "2FY3-06",
        name: "Programming for Problem Solving",
        credits: 2,
      },
      {
        code: "2FY3-08",
        name: "Basic Electrical Engineering",
        credits: 2,
      },
      { code: "2FY2-20", name: "Engineering Physics Lab", credits: 1 },
      { code: "2FY2-22", name: "Language Lab", credits: 1 },
      { code: "2FY3-24", name: "Computer Programming Lab", credits: 1.5 },
      {
        code: "2FY3-26",
        name: "Basic Electrical Engineering Lab",
        credits: 1,
      },
      {
        code: "2FY3-29",
        name: "Computer Aided Machine Drawing",
        credits: 1.5,
      },
      { code: "SODECA", name: "SODECA", credits: 0.5 },
    ],
  },
  {
    id: 3,
    name: "3rd Semester (AI&DS)",
    subjects: [
      {
        code: "3AID2-01",
        name: "Advanced Engineering Mathematics",
        credits: 3,
      },
      { code: "3AID1-02", name: "Technical Communication", credits: 2 },
      { code: "3AID3-04", name: "Digital Electronics", credits: 3 },
      {
        code: "3AID4-05",
        name: "Data Structures and Algorithms",
        credits: 3,
      },
      {
        code: "3AID4-06",
        name: "Object Oriented Programming",
        credits: 3,
      },
      { code: "3AID4-07", name: "Software Engineering", credits: 3 },
      { code: "3AID4-21", name: "DSA Lab", credits: 1.5 },
      { code: "3AID4-22", name: "OOP Lab", credits: 1.5 },
      { code: "3AID4-23", name: "Software Engg Lab", credits: 1.5 },
      { code: "3AID4-24", name: "Digital Electronics Lab", credits: 1.5 },
      { code: "3AID7-30", name: "Industrial Training", credits: 1 },
      { code: "SODECA", name: "SODECA", credits: 0.5 },
    ],
  },
  {
    id: 4,
    name: "4th Semester (AI&DS)",
    subjects: [
      { code: "4AID2-01", name: "Discrete Mathematics", credits: 3 },
      {
        code: "4AID1-03",
        name: "Managerial Economics & Financial Accounting",
        credits: 2,
      },
      {
        code: "4AID3-04",
        name: "Microprocessor & Interfaces",
        credits: 3,
      },
      {
        code: "4AID4-05",
        name: "Database Management System",
        credits: 3,
      },
      { code: "4AID4-06", name: "Theory of Computation", credits: 3 },
      {
        code: "4AID4-07",
        name: "Data Communication & Computer Networks",
        credits: 3,
      },
      { code: "4AID4-21", name: "Microprocessor Lab", credits: 1 },
      { code: "4AID4-22", name: "DBMS Lab", credits: 1.5 },
      { code: "4AID4-23", name: "Network Programming Lab", credits: 1.5 },
      {
        code: "4AID4-24",
        name: "Linux Shell Programming Lab",
        credits: 1,
      },
      { code: "4AID4-25", name: "Java Lab", credits: 1 },
      { code: "SODECA", name: "SODECA", credits: 0.5 },
    ],
  },
  {
    id: 5,
    name: "5th Semester (AI&DS)",
    subjects: [
      {
        code: "5AID3-01",
        name: "Data Mining - Concepts & Techniques",
        credits: 2,
      },
      { code: "5AID4-02", name: "Compiler Design", credits: 3 },
      { code: "5AID4-03", name: "Operating System", credits: 3 },
      {
        code: "5AID4-04",
        name: "Computer Graphics & Multimedia",
        credits: 3,
      },
      { code: "5AID4-05", name: "Analysis of Algorithms", credits: 3 },
      {
        code: "PEC",
        name: "Professional Elective (credit-only)",
        credits: 2,
      },
      { code: "5AID4-21", name: "Computer Graphics Lab", credits: 1 },
      { code: "5AID4-22", name: "Compiler Design Lab", credits: 1 },
      { code: "5AID4-23", name: "AOA Lab", credits: 1 },
      { code: "5AID4-24", name: "Advanced Java Lab", credits: 1 },
      { code: "5AID7-30", name: "Industrial Training", credits: 2.5 },
      { code: "SODECA", name: "SODECA", credits: 0.5 },
    ],
  },
  {
    id: 6,
    name: "6th Semester (AI&DS)",
    subjects: [
      { code: "6AID3-01", name: "Digital Image Processing", credits: 2 },
      { code: "6AID4-02", name: "Machine Learning", credits: 3 },
      {
        code: "6AID4-03",
        name: "Information Security Systems",
        credits: 2,
      },
      {
        code: "6AID4-04",
        name: "Computer Architecture & Organization",
        credits: 3,
      },
      { code: "6AID4-05", name: "Principles of AI", credits: 2 },
      { code: "6AID4-06", name: "Cloud Computing", credits: 3 },
      {
        code: "PEC",
        name: "Professional Elective (credit-only)",
        credits: 2,
      },
      { code: "6AID4-21", name: "DIP Lab", credits: 1.5 },
      { code: "6AID4-22", name: "ML Lab", credits: 1.5 },
      { code: "6AID4-23", name: "Python Lab", credits: 1.5 },
      { code: "6AID4-24", name: "Mobile App Dev Lab", credits: 1.5 },
      { code: "SODECA", name: "SODECA", credits: 0.5 },
    ],
  },
  {
    id: 7,
    name: "7th Semester (AI&DS)",
    subjects: [
      { code: "7AID4-01", name: "Big Data Analytics", credits: 3 },
      {
        code: "OE1",
        name: "Open Elective – I (credit-only)",
        credits: 3,
      },
      { code: "7AID4-21", name: "BDA Lab", credits: 2 },
      { code: "7AID4-22", name: "R Programming Lab", credits: 2 },
      { code: "7AID7-30", name: "Industrial Training", credits: 2.5 },
      { code: "7AID7-40", name: "Seminar", credits: 2 },
      { code: "SODECA", name: "SODECA", credits: 0.5 },
    ],
  },
  {
    id: 8,
    name: "8th Semester (AI&DS)",
    subjects: [
      { code: "8AID4-01", name: "Deep Learning", credits: 3 },
      {
        code: "OE2",
        name: "Open Elective – II (credit-only)",
        credits: 3,
      },
      { code: "8AID4-21", name: "DL Lab", credits: 1 },
      { code: "8AID4-22", name: "Robot Programming Lab", credits: 1 },
      { code: "8AID7-50", name: "Project", credits: 7 },
      { code: "SODECA", name: "SODECA", credits: 0.5 },
    ],
  },
];

/* Grade options (unchanged) */
const GRADES = [
  { label: "A++ (10)", value: 10 },
  { label: "A+ (9)", value: 9 },
  { label: "A (8.5)", value: 8.5 },
  { label: "B+ (8)", value: 8 },
  { label: "B (7.5)", value: 7.5 },
  { label: "C+ (7)", value: 7 },
  { label: "C (6.5)", value: 6.5 },
  { label: "D+ (6)", value: 6 },
  { label: "D (5.5)", value: 5.5 },
  { label: "E+ (5)", value: 5 },
  { label: "E (4)", value: 4 },
  { label: "F (0)", value: 0 },
];

/* DOM refs */
const semesterSelect = document.getElementById("semesterSelect");
const subjectsArea = document.getElementById("subjectsArea");
const semesterTitle = document.getElementById("semesterTitle");
const semCreditsEl = document.getElementById("semCredits");
const prevTotalCreditsEl = document.getElementById("prevTotalCredits");
const sgpaDisplay = document.getElementById("sgpaDisplay");
const prevCgpaInput = document.getElementById("prevCgpa");
const curSgpaInput = document.getElementById("curSgpa");
const calcCgpaBtn = document.getElementById("calcCgpaBtn");
const cgpaOut = document.getElementById("cgpaOut");
const creditsUsedPrev = document.getElementById("creditsUsedPrev");
const creditsUsedCur = document.getElementById("creditsUsedCur");
const resetBtn = document.getElementById("resetGrades");
const exportBtn = document.getElementById("exportBtn");
const printBtn = document.getElementById("printBtn");
const printSemesterName = document.getElementById("printSemesterName");
const printMetrics = document.getElementById("printMetrics");
const printDate = document.getElementById("printDate");

/* Populate semester selector with clean display names */
function ordinal(n) {
  if (n % 10 === 1 && n % 100 !== 11) return n + "st";
  if (n % 10 === 2 && n % 100 !== 12) return n + "nd";
  if (n % 10 === 3 && n % 100 !== 13) return n + "rd";
  return n + "th";
}
SEMESTER_DATA.forEach((s) => {
  const opt = document.createElement("option");
  opt.value = s.id;
  opt.textContent = `${ordinal(s.id)} Semester`;
  semesterSelect.appendChild(opt);
});

/* Helpers for credits sums */
function sumCreditsOfSemester(semId) {
  const sem = SEMESTER_DATA.find((s) => s.id === semId);
  if (!sem) return 0;
  return sem.subjects.reduce((acc, sub) => acc + Number(sub.credits), 0);
}
function sumCreditsUpTo(semIdExcluding) {
  let total = 0;
  for (let i = 0; i < SEMESTER_DATA.length; i++) {
    const sid = SEMESTER_DATA[i].id;
    if (sid < semIdExcluding) {
      total += SEMESTER_DATA[i].subjects.reduce(
        (a, s) => a + Number(s.credits),
        0
      );
    }
  }
  return total;
}

/* Render semester subjects (table only) */
function renderSemester(semId) {
  const sem = SEMESTER_DATA.find((s) => s.id === Number(semId));
  if (!sem) return;
  semesterTitle.textContent = `${ordinal(sem.id)} Semester`;
  // build table
  const tbl = document.createElement("table");
  tbl.innerHTML = `
    <thead>
      <tr>
        <th>Course Code</th>
        <th>Subject</th>
        <th class="credits-col">Credits</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
  const tbody = tbl.querySelector("tbody");

  sem.subjects.forEach((sub) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="code">${escapeHtml(sub.code)}</td>
      <td class="name">${escapeHtml(sub.name)}</td>
      <td class="credits">${sub.credits}</td>
      <td class="select"><select class="grade" data-credits="${
        sub.credits
      }" data-code="${escapeHtml(sub.code)}" aria-label="Grade for ${escapeHtml(
      sub.name
    )}"></select></td>
    `;
    tbody.appendChild(tr);
    const select = tr.querySelector("select.grade");

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "-- select --";
    select.appendChild(placeholder);

    GRADES.forEach((g) => {
      const o = document.createElement("option");
      o.value = String(g.value);
      o.textContent = g.label;
      select.appendChild(o);
    });

    // default A++
    select.value = "10";
    select.addEventListener("change", computeSGPA);
  });

  subjectsArea.innerHTML = "";
  subjectsArea.appendChild(tbl);

  const semCredits = sumCreditsOfSemester(sem.id);
  semCreditsEl.textContent = semCredits;
  const prevCredits = sumCreditsUpTo(sem.id);
  prevTotalCreditsEl.textContent = prevCredits;

  creditsUsedPrev.textContent = prevCredits;
  creditsUsedCur.textContent = semCredits;

  computeSGPA();
}

/* compute SGPA */
function computeSGPA() {
  const selects = subjectsArea.querySelectorAll("select.grade");
  let num = 0,
    den = 0;
  selects.forEach((s) => {
    const val = s.value;
    const c = Number(s.getAttribute("data-credits"));
    if (val !== "") {
      const g = Number(val);
      num += g * c;
      den += c;
    }
  });
  if (den === 0) {
    sgpaDisplay.textContent = "—";
    curSgpaInput.value = "";
    return;
  }
  const sgpa = Math.round((num / den) * 100) / 100;
  sgpaDisplay.textContent = sgpa.toFixed(2);
  curSgpaInput.value = sgpa.toFixed(2);
}

/* CGPA compute: user enters previous CGPA only; credits auto-summed */
calcCgpaBtn.addEventListener("click", () => {
  const prevCgpa = parseFloat(prevCgpaInput.value);
  if (isNaN(prevCgpa)) {
    alert("Enter a valid previous CGPA (e.g. 7.35).");
    prevCgpaInput.focus();
    return;
  }
  const curSgpa = parseFloat(curSgpaInput.value);
  if (isNaN(curSgpa)) {
    alert("Compute SGPA first.");
    return;
  }
  const semId = Number(semesterSelect.value);
  const prevCredits = sumCreditsUpTo(semId);
  const curCredits = sumCreditsOfSemester(semId);

  const numerator = prevCgpa * prevCredits + curSgpa * curCredits;
  const denom = prevCredits + curCredits;
  const newCgpa =
    denom === 0
      ? Math.round(curSgpa * 100) / 100
      : Math.round((numerator / denom) * 100) / 100;

  cgpaOut.textContent = newCgpa.toFixed(2);
  creditsUsedPrev.textContent = prevCredits;
  creditsUsedCur.textContent = curCredits;
});

/* Reset to default A++ */
resetBtn.addEventListener("click", () => {
  subjectsArea
    .querySelectorAll("select.grade")
    .forEach((s) => (s.value = "10"));
  computeSGPA();
});

/* Copy result to clipboard */
exportBtn.addEventListener("click", async () => {
  const semId = Number(semesterSelect.value);
  const semName = `${ordinal(semId)} Semester`;
  const sgpa = curSgpaInput.value || sgpaDisplay.textContent;
  const cgpa = cgpaOut.textContent || "—";
  const txt = `${semName}\nSGPA: ${sgpa}\nCGPA: ${cgpa}`;
  try {
    await navigator.clipboard.writeText(txt);
    alert("Result copied to clipboard.");
  } catch {
    alert("Copy failed.");
  }
});

/* Print: populate print summary and call print; ensure DOM painted before print */
function preparePrint() {
  const semId = Number(semesterSelect.value);
  printSemesterName.textContent = `${ordinal(semId)} Semester`;
  printDate.textContent = new Date().toLocaleString();
  // card style metrics for print
  const sgpa = curSgpaInput.value || sgpaDisplay.textContent;
  const cgpa = cgpaOut.textContent || "—";

  // Find the branding element *inside* printMetrics
  const brandingEl = printMetrics.querySelector(".footer-brand");

  printMetrics.innerHTML = `
    <div style="display:flex;gap:12px;align-items:center;">
      <div style="flex:1">
        <div style="font-size:13px;color:#333">SGPA</div>
        <div style="font-size:20px;font-weight:800;color:var(--accent)">${escapeHtml(
          String(sgpa)
        )}</div>
      </div>
      <div style="flex:1">
        <div style="font-size:13px;color:#333">CGPA</div>
        <div style="font-size:20px;font-weight:800;color:var(--accent)">${escapeHtml(
          String(cgpa)
        )}</div>
      </div>
    </div>
  `;
  // Re-append the branding element at the end, inside the card
  if (brandingEl) {
    printMetrics.appendChild(brandingEl);
  }
}

/* Use requestAnimationFrame twice before calling print to ensure DOM updates are painted */
printBtn.addEventListener("click", () => {
  preparePrint();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.print();
    });
  });
});

/* beforeprint (for Ctrl+P / native print) */
window.addEventListener("beforeprint", preparePrint);

/* initial render */
semesterSelect.addEventListener("change", () =>
  renderSemester(Number(semesterSelect.value))
);
semesterSelect.value = 1;
renderSemester(1);

/* utilities */
function escapeHtml(str) {
  return String(str).replace(/[&<>"]/g, function (m) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m];
  });
}

/* allow Enter to compute CGPA when in inputs */
[prevCgpaInput, curSgpaInput].forEach((inp) => {
  inp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      calcCgpaBtn.click();
    }
  });
});
