/* ============================================
   MASTER DATA (ALL BRANCHES + ALL SEMESTERS)
   ============================================ */

const ALL_DATA = {
  CSE: [
    {
      id: 1,
      name: "1st Semester (First Year)",
      subjects: [
        {
          code: "1FY2-01",
          name: "Engineering Mathematics-I",
          credits: 4,
        },
        { code: "1FY2-02", name: "Engineering Physics", credits: 4 },
        { code: "1FY1-04", name: "Communication Skills", credits: 2 },
        {
          code: "1FY3-06",
          name: "Programming for Problem Solving",
          credits: 2,
        },
        { code: "1FY3-08", name: "Basic Electrical Engineering", credits: 2 },
        {
          code: "1FY2-20",
          name: "Engineering Physics Lab",
          credits: 1,
        },
        { code: "1FY2-22", name: "Language Lab", credits: 1 },
        {
          code: "1FY3-24",
          name: "Computer Programming Lab",
          credits: 1.5,
        },
        {
          code: "1FY3-26",
          name: "Basic Electrical Engineering Lab",
          credits: 1,
        },
        {
          code: "1FY3-29",
          name: "Computer Aided Machine Drawing",
          credits: 1.5,
        },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 2,
      name: "2nd Semester (First Year)",
      subjects: [
        {
          code: "2FY2-01",
          name: "Engineering Mathematics-II",
          credits: 4,
        },
        { code: "2FY2-03", name: "Engineering Chemistry", credits: 4 },
        { code: "2FY1-05", name: "Human Values", credits: 2 },
        {
          code: "2FY3-07",
          name: "Basic Mechanical Engineering",
          credits: 2,
        },
        {
          code: "2FY3-09",
          name: "Basic Civil Engineering",
          credits: 2,
        },
        { code: "2FY2-21", name: "Engineering Chemistry Lab", credits: 1 },
        { code: "2FY2-23", name: "Human Values Activities", credits: 1 },
        {
          code: "2FY3-25",
          name: "Manufacturing Practices Workshop",
          credits: 1.5,
        },
        {
          code: "2FY3-27",
          name: "Basic Civil Engineering Lab",
          credits: 1,
        },
        {
          code: "2FY3-29",
          name: "Computer Aided Engineering Graphics",
          credits: 1.5,
        },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 3,
      name: "3rd Semester (CSE)",
      subjects: [
        {
          code: "3CSR2-01",
          name: "Advanced Engineering Mathematics",
          credits: 3,
        },
        {
          code: "3CSR1-03",
          name: "Managerial Economics & Financial Accounting",
          credits: 2,
        },
        { code: "3CSR3-04", name: "Digital Electronics", credits: 3 },
        {
          code: "3CSR4-05",
          name: "Data Structures and Algorithms",
          credits: 3,
        },
        {
          code: "3CSR4-06",
          name: "Object Oriented Programming",
          credits: 3,
        },
        { code: "3CSR4-07", name: "Software Engineering", credits: 3 },
        { code: "3CSR4-21", name: "DSA Lab", credits: 1.5 },
        { code: "3CSR4-22", name: "OOP Lab", credits: 1.5 },
        { code: "3CSR4-23", name: "Software Engg Lab", credits: 1.5 },
        {
          code: "3CSR4-24",
          name: "Digital Electronics Lab",
          credits: 1.5,
        },
        { code: "3CSR7-30", name: "Industrial Training", credits: 1 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 4,
      name: "4th Semester (CSE)",
      subjects: [
        { code: "4CSR2-01", name: "Discrete Mathematics", credits: 3 },
        {
          code: "4CSR1-02",
          name: "Technical Communication",
          credits: 2,
        },
        {
          code: "4CSR3-04",
          name: "Microprocessor & Interfaces",
          credits: 3,
        },
        {
          code: "4CSR4-05",
          name: "Database Management System",
          credits: 3,
        },
        { code: "4CSR4-06", name: "Theory of Computation", credits: 3 },
        {
          code: "4CSR4-07",
          name: "Data Communication & Computer Networks",
          credits: 3,
        },
        { code: "4CSR4-21", name: "Microprocessor Lab", credits: 1 },
        { code: "4CSR4-22", name: "DBMS Lab", credits: 1.5 },
        {
          code: "4CSR4-23",
          name: "Network Programming Lab",
          credits: 1.5,
        },
        {
          code: "4CSR4-24",
          name: "Linux Shell Programming Lab",
          credits: 1,
        },
        { code: "4CSR4-25", name: "Java Lab", credits: 1 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 5,
      name: "5th Semester (CSE)",
      subjects: [
        {
          code: "5CS3-01",
          name: "Information Theory & Coding",
          credits: 2,
        },
        { code: "5CS4-02", name: "Compiler Design", credits: 3 },
        { code: "5CS4-03", name: "Operating System", credits: 3 },
        {
          code: "5CS4-04",
          name: "Computer Graphics & Multimedia",
          credits: 3,
        },
        { code: "5CS4-05", name: "Analysis of Algorithms", credits: 3 },
        {
          code: "PEC",
          name: "Professional Elective (credit-only)",
          credits: 2,
        },
        { code: "5CS4-21", name: "Computer Graphics Lab", credits: 1 },
        { code: "5CS4-22", name: "Compiler Design Lab", credits: 1 },
        { code: "5CS4-23", name: "AOA Lab", credits: 1 },
        { code: "5CS4-24", name: "Advanced Java Lab", credits: 1 },
        { code: "5CS7-30", name: "Industrial Training", credits: 2.5 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 6,
      name: "6th Semester (CSE)",
      subjects: [
        {
          code: "6CS3-01",
          name: "Digital Image Processing",
          credits: 2,
        },
        { code: "6CS4-02", name: "Machine Learning", credits: 3 },
        {
          code: "6CS4-03",
          name: "Information Security Systems",
          credits: 2,
        },
        {
          code: "6CS4-04",
          name: "Computer Architecture & Organization",
          credits: 3,
        },
        { code: "6CS4-05", name: "Artificial Intelligence", credits: 2 },
        { code: "6CS4-06", name: "Cloud Computing", credits: 3 },
        {
          code: "PEC",
          name: "Professional Elective (credit-only)",
          credits: 2,
        },
        { code: "6CS4-21", name: "DIP Lab", credits: 1.5 },
        { code: "6CS4-22", name: "ML Lab", credits: 1.5 },
        { code: "6CS4-23", name: "Python Lab", credits: 1.5 },
        { code: "6CS4-24", name: "Mobile App Dev Lab", credits: 1.5 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 7,
      name: "7th Semester (CSE)",
      subjects: [
        { code: "7CS4-01", name: "Internet of Things", credits: 3 },
        {
          code: "OE1",
          name: "Open Elective - I (credit-only)",
          credits: 3,
        },
        { code: "7CS4-21", name: "Internet of Things Lab", credits: 2 },
        { code: "7CS4-22", name: "Cyber Security Lab", credits: 2 },
        { code: "7CS7-30", name: "Industrial Training", credits: 2.5 },
        { code: "7CS7-40", name: "Seminar", credits: 2 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 8,
      name: "8th Semester (CSE)",
      subjects: [
        { code: "8CS4-01", name: "Big Data Analytics", credits: 3 },
        {
          code: "OE2",
          name: "Open Elective - II (credit-only)",
          credits: 3,
        },
        { code: "8CS4-21", name: "Big Data Analytics Lab", credits: 1 },
        {
          code: "8CS4-22",
          name: "Software Testing and Validation Lab",
          credits: 1,
        },
        { code: "8CS7-50", name: "Project", credits: 7 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
  ],
  "AI&DS": [
    {
      id: 1,
      name: "1st Semester (First Year)",
      subjects: [
        {
          code: "1FY2-01",
          name: "Engineering Mathematics-I",
          credits: 4,
        },
        { code: "1FY2-03", name: "Engineering Chemistry", credits: 4 },
        { code: "1FY1-05", name: "Human Values", credits: 2 },
        {
          code: "1FY3-07",
          name: "Basic Mechanical Engineering",
          credits: 2,
        },
        { code: "1FY3-09", name: "Basic Civil Engineering", credits: 2 },
        {
          code: "1FY2-21",
          name: "Engineering Chemistry Lab",
          credits: 1,
        },
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
        {
          code: "2FY2-01",
          name: "Engineering Mathematics-II",
          credits: 4,
        },
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
        {
          code: "2FY3-24",
          name: "Computer Programming Lab",
          credits: 1.5,
        },
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
        {
          code: "3AID4-24",
          name: "Digital Electronics Lab",
          credits: 1.5,
        },
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
        {
          code: "4AID4-23",
          name: "Network Programming Lab",
          credits: 1.5,
        },
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
        {
          code: "6AID3-01",
          name: "Digital Image Processing",
          credits: 2,
        },
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
  ],
  IT: [
    {
      id: 1,
      name: "1st Semester (First Year)",
      subjects: [
        {
          code: "1FY2-01",
          name: "Engineering Mathematics-I",
          credits: 4,
        },
        { code: "1FY2-03", name: "Engineering Chemistry", credits: 4 },
        { code: "1FY1-05", name: "Human Values", credits: 2 },
        {
          code: "1FY3-07",
          name: "Basic Mechanical Engineering",
          credits: 2,
        },
        { code: "1FY3-09", name: "Basic Civil Engineering", credits: 2 },
        {
          code: "1FY2-21",
          name: "Engineering Chemistry Lab",
          credits: 1,
        },
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
        {
          code: "2FY2-01",
          name: "Engineering Mathematics-II",
          credits: 4,
        },
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
        {
          code: "2FY3-24",
          name: "Computer Programming Lab",
          credits: 1.5,
        },
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
      name: "3rd Semester (IT)",
      subjects: [
        {
          code: "3IT2-01",
          name: "Advanced Engineering Mathematics",
          credits: 3,
        },
        { code: "3IT1-02", name: "Technical Communication", credits: 2 },
        { code: "3IT3-04", name: "Digital Electronics", credits: 3 },
        {
          code: "3IT4-05",
          name: "Data Structures and Algorithms",
          credits: 3,
        },
        {
          code: "3IT4-06",
          name: "Object Oriented Programming",
          credits: 3,
        },
        { code: "3IT4-07", name: "Software Engineering", credits: 3 },
        { code: "3IT4-21", name: "DSA Lab", credits: 1.5 },
        { code: "3IT4-22", name: "OOP Lab", credits: 1.5 },
        { code: "3IT4-23", name: "Software Engg Lab", credits: 1.5 },
        {
          code: "3IT4-24",
          name: "Digital Electronics Lab",
          credits: 1.5,
        },
        { code: "3IT7-30", name: "Industrial Training", credits: 1 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 4,
      name: "4th Semester (IT)",
      subjects: [
        { code: "4IT2-01", name: "Discrete Mathematics", credits: 3 },
        {
          code: "4IT1-03",
          name: "Managerial Economics & Financial Accounting",
          credits: 2,
        },
        {
          code: "4IT3-04",
          name: "Principle of Communication",
          credits: 3,
        },
        {
          code: "4IT4-05",
          name: "Database Management System",
          credits: 3,
        },
        { code: "4IT4-06", name: "Theory of Computation", credits: 3 },
        {
          code: "4IT4-07",
          name: "Data Communication & Computer Networks",
          credits: 3,
        },
        { code: "4IT4-21", name: "Linux Shell Programming Lab", credits: 1 },
        { code: "4IT4-22", name: "DBMS Lab", credits: 1.5 },
        {
          code: "4IT4-23",
          name: "Network Programming Lab",
          credits: 1.5,
        },
        {
          code: "4IT4-24",
          name: "Java Lab",
          credits: 1,
        },
        { code: "4IT4-25", name: "Web Technology Lab", credits: 1 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 5,
      name: "5th Semester (IT)",
      subjects: [
        {
          code: "5IT3-01",
          name: "Microprocessor And Interfaces",
          credits: 2,
        },
        { code: "5IT4-02", name: "Compiler Design", credits: 3 },
        { code: "5IT4-03", name: "Operating System", credits: 3 },
        {
          code: "5IT4-04",
          name: "Computer Graphics & Multimedia",
          credits: 3,
        },
        { code: "5IT4-05", name: "Analysis of Algorithms", credits: 3 },
        {
          code: "PEC",
          name: "Professional Elective (credit-only)",
          credits: 2,
        },
        { code: "5IT4-21", name: "Computer Graphics Lab", credits: 1 },
        { code: "5IT4-22", name: "Compiler Design Lab", credits: 1 },
        { code: "5IT4-23", name: "AOA Lab", credits: 1 },
        { code: "5IT4-24", name: "Advanced Java Lab", credits: 1 },
        { code: "5IT7-30", name: "Industrial Training", credits: 2.5 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 6,
      name: "6th Semester (IT)",
      subjects: [
        {
          code: "6IT3-01",
          name: "Digital Image Processing",
          credits: 2,
        },
        { code: "6IT4-02", name: "Machine Learning", credits: 3 },
        {
          code: "6IT4-03",
          name: "Information Security Systems",
          credits: 2,
        },
        {
          code: "6IT4-04",
          name: "Computer Architecture & Organization",
          credits: 3,
        },
        { code: "6IT4-05", name: "Artificial Intelligence", credits: 2 },
        { code: "6IT4-06", name: "Distributed System", credits: 3 },
        {
          code: "PEC",
          name: "Professional Elective (credit-only)",
          credits: 2,
        },
        { code: "6IT4-21", name: "DIP Lab", credits: 1 },
        { code: "6IT4-22", name: "ML Lab", credits: 1.5 },
        { code: "6IT4-23", name: "Python Lab", credits: 1.5 },
        { code: "6IT4-24", name: "Mobile App Dev Lab", credits: 1 },
        { code: "6IT4-25", name: "5G Communication Lab", credits: 1 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 7,
      name: "7th Semester (IT)",
      subjects: [
        { code: "7IT4-01", name: "Big Data Analytics", credits: 3 },
        {
          code: "OE1",
          name: "Open Elective - I (credit-only)",
          credits: 3,
        },
        { code: "7IT4-21", name: "BDA Lab", credits: 2 },
        { code: "7IT4-22", name: "Cyber Security Lab", credits: 2 },
        { code: "7IT7-30", name: "Industrial Training", credits: 2.5 },
        { code: "7IT7-40", name: "Seminar", credits: 2 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 8,
      name: "8th Semester (IT)",
      subjects: [
        { code: "8IT4-01", name: "Internet of Things", credits: 3 },
        {
          code: "OE2",
          name: "Open Elective - II (credit-only)",
          credits: 3,
        },
        { code: "8IT4-21", name: "Internet of Things Lab", credits: 1 },
        {
          code: "8IT4-22",
          name: "Software Testing and Validation Lab",
          credits: 1,
        },
        { code: "8IT7-50", name: "Project", credits: 7 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
  ],
  ME: [
    {
      id: 1,
      name: "1st Semester (First Year)",
      subjects: [
        {
          code: "1FY2-01",
          name: "Engineering Mathematics-I",
          credits: 4,
        },
        { code: "1FY2-03", name: "Engineering Chemistry", credits: 4 },
        { code: "1FY1-05", name: "Human Values", credits: 2 },
        {
          code: "1FY3-07",
          name: "Basic Mechanical Engineering",
          credits: 2,
        },
        { code: "1FY3-09", name: "Basic Civil Engineering", credits: 2 },
        {
          code: "1FY2-21",
          name: "Engineering Chemistry Lab",
          credits: 1,
        },
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
        {
          code: "2FY2-01",
          name: "Engineering Mathematics-II",
          credits: 4,
        },
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
        {
          code: "2FY3-24",
          name: "Computer Programming Lab",
          credits: 1.5,
        },
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
        {
          code: "3AID4-24",
          name: "Digital Electronics Lab",
          credits: 1.5,
        },
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
        {
          code: "4AID4-23",
          name: "Network Programming Lab",
          credits: 1.5,
        },
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
        {
          code: "6AID3-01",
          name: "Digital Image Processing",
          credits: 2,
        },
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
  ],
  EE: [
    {
      id: 1,
      name: "1st Semester (First Year)",
      subjects: [
        {
          code: "1FY2-01",
          name: "Engineering Mathematics-I",
          credits: 4,
        },
        { code: "1FY2-03", name: "Engineering Chemistry", credits: 4 },
        { code: "1FY1-05", name: "Human Values", credits: 2 },
        {
          code: "1FY3-07",
          name: "Basic Mechanical Engineering",
          credits: 2,
        },
        { code: "1FY3-09", name: "Basic Civil Engineering", credits: 2 },
        {
          code: "1FY2-21",
          name: "Engineering Chemistry Lab",
          credits: 1,
        },
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
        {
          code: "2FY2-01",
          name: "Engineering Mathematics-II",
          credits: 4,
        },
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
        {
          code: "2FY3-24",
          name: "Computer Programming Lab",
          credits: 1.5,
        },
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
        {
          code: "3AID4-24",
          name: "Digital Electronics Lab",
          credits: 1.5,
        },
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
        {
          code: "4AID4-23",
          name: "Network Programming Lab",
          credits: 1.5,
        },
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
        {
          code: "6AID3-01",
          name: "Digital Image Processing",
          credits: 2,
        },
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
  ],
  ECE: [
    {
      id: 1,
      name: "1st Semester (First Year)",
      subjects: [
        {
          code: "1FY2-01",
          name: "Engineering Mathematics-I",
          credits: 4,
        },
        { code: "1FY2-03", name: "Engineering Chemistry", credits: 4 },
        { code: "1FY1-05", name: "Human Values", credits: 2 },
        {
          code: "1FY3-07",
          name: "Basic Mechanical Engineering",
          credits: 2,
        },
        { code: "1FY3-09", name: "Basic Civil Engineering", credits: 2 },
        {
          code: "1FY2-21",
          name: "Engineering Chemistry Lab",
          credits: 1,
        },
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
        {
          code: "2FY2-01",
          name: "Engineering Mathematics-II",
          credits: 4,
        },
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
        {
          code: "2FY3-24",
          name: "Computer Programming Lab",
          credits: 1.5,
        },
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
        {
          code: "3AID4-24",
          name: "Digital Electronics Lab",
          credits: 1.5,
        },
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
        {
          code: "4AID4-23",
          name: "Network Programming Lab",
          credits: 1.5,
        },
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
        {
          code: "6AID3-01",
          name: "Digital Image Processing",
          credits: 2,
        },
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
  ],
};

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


/* ============================================
    DOM ELEMENTS (MATCHES NEW HTML)
   ============================================ */

const branchSelect = document.getElementById("branchSelect");
const semesterSelect = document.getElementById("semesterSelect");

const subjectsArea = document.getElementById("subjectsArea");
const semesterTitle = document.getElementById("semesterTitle");

const sgpaDisplay = document.getElementById("sgpaDisplay");
const prevCgpaInput = document.getElementById("prevCgpa");
const curSgpaInput = document.getElementById("curSgpa");

const cgpaOut = document.getElementById("cgpaOut");
const creditsUsedPrev = document.getElementById("creditsUsedPrev");
const creditsUsedCur = document.getElementById("creditsUsedCur");

const resetBtn = document.getElementById("resetGrades");
const calcCgpaBtn = document.getElementById("calcCgpaBtn");

const exportBtn = document.getElementById("exportBtn");
const printBtn = document.getElementById("printBtn");


/* ============================================
    REMOVE STATIC FALLBACK WHEN JS RUNS
   ============================================ */

window.addEventListener("DOMContentLoaded", () => {
  const fallback = document.getElementById("fallbackTable");
  if (fallback) fallback.remove();
});

/* ============================================
    HELPER FUNCTIONS
   ============================================ */

function ordinal(n) {
  if (n % 10 === 1 && n % 100 !== 11) return n + "st";
  if (n % 10 === 2 && n % 100 !== 12) return n + "nd";
  if (n % 10 === 3 && n % 100 !== 13) return n + "rd";
  return n + "th";
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"]/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  }[m]));
}


/* ============================================
    BRANCH + SEMESTER POPULATION
   ============================================ */

function populateBranches() {
  branchSelect.innerHTML = "";
  const branches = Object.keys(ALL_DATA);

  branches.forEach(branchName => {
    const opt = document.createElement("option");
    opt.value = branchName;
    opt.textContent = branchName;
    branchSelect.appendChild(opt);
  });
}

function populateSemesters(branchName) {
  semesterSelect.innerHTML = "";

  const semesters = ALL_DATA[branchName];
  if (!semesters) return;

  semesters.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s.id;
    opt.textContent = `${ordinal(s.id)} Semester`;
    semesterSelect.appendChild(opt);
  });
}


/* ============================================
    CREDIT CALCULATION HELPERS
   ============================================ */

function sumCreditsOfSemester(branchName, semId) {
  const branchData = ALL_DATA[branchName];
  if (!branchData) return 0;

  const sem = branchData.find(s => s.id === semId);
  if (!sem) return 0;

  return sem.subjects.reduce((acc, sub) => acc + Number(sub.credits), 0);
}

function sumCreditsUpTo(branchName, semIdExcluding) {
  const branchData = ALL_DATA[branchName];
  if (!branchData) return 0;

  let total = 0;
  for (let s of branchData) {
    if (s.id < semIdExcluding) {
      total += s.subjects.reduce((a, sub) => a + Number(sub.credits), 0);
    }
  }
  return total;
}


/* ============================================
    MAIN RENDER FUNCTION
   ============================================ */

function renderSemester(branchName, semId) {
  const branchData = ALL_DATA[branchName];
  if (!branchData) return;

  const sem = branchData.find(s => s.id === Number(semId));
  if (!sem) return;

  semesterTitle.textContent = `${ordinal(sem.id)} Semester (${branchName})`;

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Course Code</th>
        <th>Subject</th>
        <th>Credits</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  sem.subjects.forEach(sub => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="code">${escapeHtml(sub.code)}</td>
      <td>${escapeHtml(sub.name)}</td>
      <td>${sub.credits}</td>
      <td>
        <select class="grade" data-credits="${sub.credits}">
        </select>
      </td>
    `;

    tbody.appendChild(tr);

    const select = tr.querySelector("select.grade");

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "-- select --";
    select.appendChild(placeholder);

    GRADES.forEach(g => {
      const opt = document.createElement("option");
      opt.value = g.value;
      opt.textContent = g.label;
      select.appendChild(opt);
    });

    // Default = A++ (10)
    select.value = "10";
    select.addEventListener("change", computeSGPA);
  });

  subjectsArea.innerHTML = "";
  subjectsArea.appendChild(table);

  const semCredits = sumCreditsOfSemester(branchName, sem.id);
  const prevCredits = sumCreditsUpTo(branchName, sem.id);

  creditsUsedPrev.textContent = prevCredits;
  creditsUsedCur.textContent = semCredits;

  cgpaOut.textContent = "—";
  prevCgpaInput.value = "";

  computeSGPA();
}
