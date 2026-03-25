# 🎓 RTU CGPA & SGPA Calculator

A modern, highly accurate, and incredibly fast calculator built exclusively for **Rajasthan Technical University (RTU)** students. Based strictly on the official RTU Choice Based Credit System (CBCS) grading scheme.

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](#)
[![Next.js](https://img.shields.io/badge/Framework-Next.js%2016-black?logo=next.js&logoColor=white)](#)
[![PWA](https://img.shields.io/badge/PWA-Installable-blue)](#)

---

## ✨ Features

- **Blazing Fast Calculations:** Instantly calculates both SGPA (for single semesters) and CGPA (cumulative) across all major engineering branches (CSE, IT, AI&DS, ECE, EE, ME).
- **Gamified UI & Micro-interactions:** Built with a stunning dark Glassmorphism theme, tactile hover rows, and interactive result panels that glow vibrantly based on class performance (Emerald Green for > 8.5, Sky Blue for > 7.5, and Amber Orange below).
- **Progressive Web App (PWA) Ready:** Install it directly onto your Windows PC, Mac, Android, or iOS device straight from your browser. Works seamlessly with offline caching!
- **SEO Optimized Built-in:** Built natively on Next.js Server Components, optimizing all meta tags for instant discovery.
- **Copy & Export Functionality:** Quickly copy formatted text results to easily share with friends or family via WhatsApp.
- **Responsive & Printed Layouts:** Works beautifully on a phone screen or printed out sharply on a physical A4 sheet of paper.

## 🛠 Tech Stack

The architecture was recently completely redesigned and migrated from legacy Vanilla HTML to modern frontend infrastructure:

- **Framework:** Next.js 16 (App Router)
- **Styling:** CSS3 variables, Glassmorphism gradients, and deeply integrated animations.
- **Font:** Google Fonts (Outfit)
- **Deployment:** Vercel natively mapped to custom domains.

## 🚀 Getting Started

If you want to run this application locally on your machine, follow these steps:

### Prerequisites

Make sure you have Node.js (v18.17 or higher) installed on your system.

### Installation

1. Clone the repository and navigate into the `rtu-calculator` directory:

   ```bash
   git clone <repository-url>
   cd rtu-calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Next.js development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result!

## 📐 Formulas Used (Official RTU CBCS)

- **SGPA** = `Σ (Credit × Grade Point) / Σ Total Credits`
- **CGPA** = `(Previous CGPA × Previous Credits + Current SGPA × Current Credits) / Total Credits`

## 👨‍💻 Developed By

Developed with 💖 by **Prashant Jain**.

_Note: This is an independent application designed specifically based on the official grading criteria of RTU, and is not officially affiliated with Rajasthan Technical University._
_Powered by NoteSea (notesea.xyz)._
