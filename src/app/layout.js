import "./globals.css";
import ServiceWorkerRegistry from "../components/ServiceWorkerRegistry";

export const metadata = {
  title: "RTU CGPA Calculator | Accurate SGPA & CGPA Calculator",
  description:
    "RTU CGPA Calculator: Instantly calculate SGPA, CGPA & Percentage for Rajasthan Technical University. Supports CSE, IT, AI&DS, ECE, EE, ME branches.",
  keywords:
    "RTU CGPA Calculator, RTU SGPA Calculator, RTU percentage calculator, RTU grading system, B.Tech SGPA calculator",
  alternates: {
    canonical: "https://calculator.notesea.xyz/",
  },
  openGraph: {
    title: "RTU CGPA Calculator",
    description:
      "Calculate SGPA, CGPA and grades instantly using RTU's official grading system.",
    type: "website",
    url: "https://calculator.notesea.xyz/",
  },
};

export const viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "RTU CGPA Calculator",
              applicationCategory: "EducationalApplication",
              description:
                "Free tool to calculate SGPA and CGPA for RTU students.",
              creator: {
                "@type": "Person",
                name: "Prashant Jain",
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <ServiceWorkerRegistry />
      </body>
    </html>
  );
}
