# 🎓 RTU CGPA Calculator

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-38bdf8?style=for-the-badge&logo=vercel)](https://rtu-cpga-calculator.vercel.app/)
[![Tech Stack](https://img.shields.io/badge/Tech-HTML5_%7C_CSS3_%7C_JS-yellow?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)]()

A clean, accurate, and responsive web application designed for **Rajasthan Technical University (RTU)** students. This tool calculates Semester Grade Point Average (SGPA) and Cumulative Grade Point Average (CGPA) based on the official **Choice Based Credit System (CBCS)**.

It comes pre-loaded with the exact subject codes, names, and credit values for **Semesters 1 through 8** across all major engineering branches.

🔗 **[Launch Live Calculator](https://rtu-cpga-calculator.vercel.app/)**

---

## ✨ Key Features

-   **⚡ Instant Calculation:** Real-time SGPA updates as you select grades (no page reloads).
-   **🏛️ Multi-Branch Support:** tailored subject data for:
    -   Computer Science (CSE)
    -   Information Technology (IT)
    -   AI & Data Science (AI&DS)
    -   Mechanical Engineering (ME)
    -   Electronics & Communication (ECE)
    -   Electrical Engineering (EE)
-   **🎯 Precision Grading:** Implements the specific RTU decimal grading points (e.g., **A = 8.5**, **B = 7.5**) ensuring 100% accuracy.
-   **🌗 Pro Dark UI:** Features a modern "Slate & Cyan" dark theme (`#0f172a`) that is easy on the eyes.
-   **🖨️ Print-Ready Reports:** Includes a dedicated **Print Mode** that:
    -   Hides buttons and dark backgrounds.
    -   Formats the result slip perfectly for A4 paper.
    -   Adds a timestamp and "RTU Semester Grade Report" header.
-   **📋 Copy to Clipboard:** A single click exports your result string for easy sharing.

---


## 🔢 Official RTU Grading Scale

This calculator uses the exact 10-point grading scale defined in the RTU regulations:

| Grade | Points | Description |
| :--- | :--- | :--- |
| **A++** | 10 | Outstanding |
| **A+** | 9 | Excellent |
| **A** | 8.5 | Very Good |
| **B+** | 8 | Good |
| **B** | 7.5 | Above Average |
| **C+** | 7 | Average |
| **C** | 6.5 | Below Average |
| **D+** | 6 | Marginal |
| **D** | 5.5 | Pass |
| **E+** | 5 | Pass (Old Reg) |
| **E** | 4 | Pass (Old Reg) |
| **F** | 0 | Fail |

---

## ⚙️ How It Works

### 1. The Formulas
The app runs on pure JavaScript to perform weighted average calculations:

-   **SGPA** = $\frac{\sum(Credit \times GradePoint)}{\sum(TotalCredits)}$
-   **CGPA** = $\frac{(PrevCGPA \times PrevCredits) + (CurrSGPA \times CurrCredits)}{TotalCredits}$

### 2. Local Installation
Since this is a static web app, you don't need `npm` or a backend server.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/prashantjain2718/rtu-cgpa-calculator.git](https://github.com/prashantjain2718/rtu-cgpa-calculator.git)
    ```
2.  **Run the App**
    Simply open the `index.html` file in any web browser.

---

## 📂 Project Structure

rtu-cgpa-calculator/
├── index.html      # Main structure, SEO meta tags, and JSON-LD
├── styles.css      # Dark theme variables, responsive grid, and @media print
├── script.js       # Branch data (JSON structure), event listeners, and logic
└── README.md       # Documentation

## 🤝 Contributing

The accuracy of this calculator depends on the subject data. If you notice a missing subject, incorrect credit value, or a typo:

1.  **Fork** the repository to your own GitHub account.
2.  Open `script.js` and locate the `ALL_DATA` constant (it contains the arrays for CSE, IT, ME, etc.).
3.  Find the specific **Branch** and **Semester** block that needs fixing.
4.  Update the `code`, `name`, or `credits` value.
5.  Submit a **Pull Request** describing your change.

---

## 👨‍💻 Author

**Prashant Jain**

* Student, Arya College of Engineering & IT
* **GitHub:** [@prashantjain2718](https://github.com/prashantjain2718)

---

<div align="center">
  <p><b>Found this calculator useful?</b></p>
  <p>Help others find it by giving the repository a star!</p>
  <a href="https://github.com/prashantjain2718/rtu-cgpa-calculator">
    <img src="https://img.shields.io/github/stars/prashantjain2718/rtu-cgpa-calculator?style=social" alt="Star on GitHub">
  </a>
</div>
