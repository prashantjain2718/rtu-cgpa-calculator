export default function manifest() {
  return {
    name: "RTU CGPA Calculator",
    short_name: "RTU Calc",
    description:
      "Calculate SGPA, CGPA and Percentage accurately using RTU official grading system.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "192x192 512x512",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
  };
}
