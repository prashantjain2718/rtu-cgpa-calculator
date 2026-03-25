/* ================= DATA ================= */
const ALL_DATA = {
  CSE: [
    {
      id: 1,
      name: "1st Semester",
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
        {
          code: "1FY3-08",
          name: "Basic Electrical Engineering",
          credits: 2,
        },
        { code: "1FY2-20", name: "Engineering Physics Lab", credits: 1 },
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
      name: "2nd Semester",
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
        { code: "2FY3-09", name: "Basic Civil Engineering", credits: 2 },
        {
          code: "2FY2-21",
          name: "Engineering Chemistry Lab",
          credits: 1,
        },
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
      name: "3rd Semester",
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
      name: "4th Semester",
      subjects: [
        { code: "4CSR2-01", name: "Discrete Mathematics", credits: 3 },
        { code: "4CSR1-02", name: "Technical Communication", credits: 2 },
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
      name: "5th Semester",
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
        { code: "PEC", name: "Professional Elective", credits: 2 },
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
      name: "6th Semester",
      subjects: [
        { code: "6CS3-01", name: "Digital Image Processing", credits: 2 },
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
        { code: "PEC", name: "Professional Elective", credits: 2 },
        { code: "6CS4-21", name: "DIP Lab", credits: 1.5 },
        { code: "6CS4-22", name: "ML Lab", credits: 1.5 },
        { code: "6CS4-23", name: "Python Lab", credits: 1.5 },
        { code: "6CS4-24", name: "Mobile App Dev Lab", credits: 1.5 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 7,
      name: "7th Semester",
      subjects: [
        { code: "7CS4-01", name: "Internet of Things", credits: 3 },
        { code: "OE1", name: "Open Elective - I", credits: 3 },
        { code: "7CS4-21", name: "Internet of Things Lab", credits: 2 },
        { code: "7CS4-22", name: "Cyber Security Lab", credits: 2 },
        { code: "7CS7-30", name: "Industrial Training", credits: 2.5 },
        { code: "7CS7-40", name: "Seminar", credits: 2 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 8,
      name: "8th Semester",
      subjects: [
        { code: "8CS4-01", name: "Big Data Analytics", credits: 3 },
        { code: "OE2", name: "Open Elective - II", credits: 3 },
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
      name: "1st Semester",
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
      name: "2nd Semester",
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
      name: "3rd Semester",
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
      name: "4th Semester",
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
      name: "5th Semester",
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
        { code: "PEC", name: "Professional Elective", credits: 2 },
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
      name: "6th Semester",
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
        { code: "PEC", name: "Professional Elective", credits: 2 },
        { code: "6AID4-21", name: "DIP Lab", credits: 1.5 },
        { code: "6AID4-22", name: "ML Lab", credits: 1.5 },
        { code: "6AID4-23", name: "Python Lab", credits: 1.5 },
        { code: "6AID4-24", name: "Mobile App Dev Lab", credits: 1.5 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 7,
      name: "7th Semester",
      subjects: [
        { code: "7AID4-01", name: "Big Data Analytics", credits: 3 },
        { code: "OE1", name: "Open Elective – I", credits: 3 },
        { code: "7AID4-21", name: "BDA Lab", credits: 2 },
        { code: "7AID4-22", name: "R Programming Lab", credits: 2 },
        { code: "7AID7-30", name: "Industrial Training", credits: 2.5 },
        { code: "7AID7-40", name: "Seminar", credits: 2 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 8,
      name: "8th Semester",
      subjects: [
        { code: "8AID4-01", name: "Deep Learning", credits: 3 },
        { code: "OE2", name: "Open Elective – II", credits: 3 },
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
      name: "1st Semester",
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
      name: "2nd Semester",
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
      name: "3rd Semester",
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
      name: "4th Semester",
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
        {
          code: "4IT4-21",
          name: "Linux Shell Programming Lab",
          credits: 1,
        },
        { code: "4IT4-22", name: "DBMS Lab", credits: 1.5 },
        {
          code: "4IT4-23",
          name: "Network Programming Lab",
          credits: 1.5,
        },
        { code: "4IT4-24", name: "Java Lab", credits: 1 },
        { code: "4IT4-25", name: "Web Technology Lab", credits: 1 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 5,
      name: "5th Semester",
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
        { code: "PEC", name: "Professional Elective", credits: 2 },
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
      name: "6th Semester",
      subjects: [
        { code: "6IT3-01", name: "Digital Image Processing", credits: 2 },
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
        { code: "PEC", name: "Professional Elective", credits: 2 },
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
      name: "7th Semester",
      subjects: [
        { code: "7IT4-01", name: "Big Data Analytics", credits: 3 },
        { code: "OE1", name: "Open Elective - I", credits: 3 },
        { code: "7IT4-21", name: "BDA Lab", credits: 2 },
        { code: "7IT4-22", name: "Cyber Security Lab", credits: 2 },
        { code: "7IT7-30", name: "Industrial Training", credits: 2.5 },
        { code: "7IT7-40", name: "Seminar", credits: 2 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 8,
      name: "8th Semester",
      subjects: [
        { code: "8IT4-01", name: "Internet of Things", credits: 3 },
        { code: "OE2", name: "Open Elective - II", credits: 3 },
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
      name: "1st Semester",
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
      name: "2nd Semester",
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
      name: "3rd Semester (ME)",
      subjects: [
        {
          code: "3ME2-01",
          name: "Advanced Engineering Mathematics-I",
          credits: 3,
        },
        {
          code: "3ME1-03",
          name: "Managerial Economics & Financial Accounting",
          credits: 2,
        },
        { code: "3ME3-04", name: "Engineering Mechanics", credits: 2 },
        {
          code: "3ME4-05",
          name: "Engineering Thermodynamics",
          credits: 3,
        },
        {
          code: "3ME4-06",
          name: "Materials Science and Engineering",
          credits: 3,
        },
        { code: "3ME4-07", name: "Mechanics of Solids", credits: 4 },
        {
          code: "3ME4-21",
          name: "Machine draing practice",
          credits: 1.5,
        },
        { code: "3ME4-22", name: "Material Testing Lab", credits: 1.5 },
        {
          code: "3ME4-23",
          name: "Basic Mechanical Engineering Lab",
          credits: 1.5,
        },
        {
          code: "3ME4-24",
          name: "Programming using MATLAB",
          credits: 1.5,
        },
        { code: "3ME7-30", name: "Industrial Training", credits: 1 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 4,
      name: "4th Semester (ME)",
      subjects: [
        { code: "4ME2-01", name: "Data analytics", credits: 2 },
        {
          code: "4ME1-02",
          name: "Technical Communication",
          credits: 2,
        },
        {
          code: "4ME3-04",
          name: "Digital Electronics",
          credits: 2,
        },
        {
          code: "4ME4-05",
          name: "Fluid Mechanics and Fluid Machines",
          credits: 4,
        },
        { code: "4ME4-06", name: "Manufacturing Process", credits: 3 },
        {
          code: "4ME4-07",
          name: "Theory of Machines",
          credits: 4,
        },
        {
          code: "4ME4-21",
          name: "Digital Electronics Lab",
          credits: 1.5,
        },
        { code: "4ME4-22", name: "Fluid Mechanics Lab", credits: 1.5 },
        {
          code: "4ME4-23",
          name: "Production Practice Lab",
          credits: 1.5,
        },
        {
          code: "4ME4-24",
          name: "Theory of machines Lab",
          credits: 1.5,
        },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 5,
      name: "5th Semester (ME)",
      subjects: [
        {
          code: "5ME3-01",
          name: "Mechatronic Systems",
          credits: 2,
        },
        { code: "5ME4-02", name: "Heat Transfer", credits: 3 },
        { code: "5ME4-03", name: "Manufacturing Technology", credits: 3 },
        {
          code: "5ME4-04",
          name: "Design of Machine Elements I",
          credits: 3,
        },
        { code: "5ME4-05", name: "Principles of Management", credits: 2 },
        { code: "PEC", name: "Professional Elective", credits: 3 },
        { code: "5ME4-21", name: "Mechatronic Lab", credits: 1 },
        { code: "5ME4-22", name: "Heat Transfer Lab", credits: 1 },
        {
          code: "5ME4-23",
          name: "Production Engineering Lab",
          credits: 1,
        },
        {
          code: "5ME4-24",
          name: "Machine Design Practice - I",
          credits: 1,
        },
        { code: "5ME7-30", name: "Industrial Training", credits: 2.5 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 6,
      name: "6th Semester (ME)",
      subjects: [
        {
          code: "6ME3-01",
          name: "Measurement and Metrology",
          credits: 2,
        },
        { code: "6ME4-02", name: "CIMS", credits: 3 },
        {
          code: "6ME4-03",
          name: "Mechanical Vibrations",
          credits: 3,
        },
        {
          code: "6ME4-04",
          name: "Design of Machine Elements II",
          credits: 3,
        },
        { code: "6ME4-05", name: "Quality Management", credits: 3 },
        { code: "PEC", name: "Professional Elective", credits: 3 },
        { code: "6ME4-21", name: "CIMS Lab", credits: 1.5 },
        { code: "6ME4-22", name: "Vibration Lab", credits: 1.5 },
        {
          code: "6ME4-23",
          name: "Machine Design Practice II",
          credits: 1.5,
        },
        {
          code: "6ME4-24",
          name: "Thermal Engineering Lab I",
          credits: 1.5,
        },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 7,
      name: "7th Semester (ME)",
      subjects: [
        { code: "PEC", name: "Professional Elective", credits: 3 },
        { code: "OE1", name: "Open Elective - I", credits: 3 },
        { code: "7ME4-21", name: "FEA Lab", credits: 1.5 },
        {
          code: "7ME4-22",
          name: "Thermal Engineering Lab II",
          credits: 1,
        },
        { code: "7ME4-23", name: "Quality Control Lab", credits: 1.5 },
        { code: "7ME7-30", name: "Industrial Training", credits: 2.5 },
        { code: "7ME7-40", name: "Seminar", credits: 2 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 8,
      name: "8th Semester (ME)",
      subjects: [
        { code: "PEC", name: "Professional Elective", credits: 3 },
        { code: "OE2", name: "Open Elective - II", credits: 3 },
        {
          code: "8ME4-21",
          name: "Industrial Engineering Lab",
          credits: 1,
        },
        { code: "8ME4-22", name: "Metrology Lab", credits: 1 },
        { code: "8ME7-50", name: "Project", credits: 7 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
  ],
  ECE: [
    {
      id: 1,
      name: "1st Semester",
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
        {
          code: "1FY3-08",
          name: "Basic Electrical Engineering",
          credits: 2,
        },
        { code: "1FY2-20", name: "Engineering Physics Lab", credits: 1 },
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
      name: "2nd Semester",
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
        { code: "2FY3-09", name: "Basic Civil Engineering", credits: 2 },
        {
          code: "2FY2-21",
          name: "Engineering Chemistry Lab",
          credits: 1,
        },
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
      name: "3rd Semester (ECE)",
      subjects: [
        {
          code: "3EC2-01",
          name: "Advanced Engineering Mathematics-I",
          credits: 3,
        },
        { code: "3EC1-02", name: "Technical Communication", credits: 2 },
        { code: "3EC3-04", name: "Digital System Design", credits: 3 },
        {
          code: "3EC4-05",
          name: "Signal & Systems",
          credits: 3,
        },
        {
          code: "3EC4-06",
          name: "Network Theory",
          credits: 4,
        },
        { code: "3EC4-07", name: "Electronics Devices", credits: 4 },
        { code: "3EC4-21", name: "Electronics Devices Lab ", credits: 1 },
        {
          code: "3EC4-22",
          name: "Digital System Design Lab",
          credits: 1,
        },
        { code: "3EC4-23", name: "Signal Processing Lab ", credits: 1 },
        {
          code: "3EC4-24",
          name: "Computer Programming Lab-I",
          credits: 1,
        },
        { code: "3EC7-30", name: "Industrial Training", credits: 1 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 4,
      name: "4th Semester (ECE)",
      subjects: [
        {
          code: "4EC2-01",
          name: "Advanced Engineering Mathematics-II ",
          credits: 3,
        },
        {
          code: "4EC1-03",
          name: "Managerial Economics & Financial Accounting",
          credits: 2,
        },
        {
          code: "4EC3-04",
          name: "Analog Circuits",
          credits: 3,
        },
        {
          code: "4EC4-05",
          name: "Microcontrollers",
          credits: 3,
        },
        {
          code: "4EC4-06",
          name: "Electronics Measurement & Instrumentation",
          credits: 3,
        },
        {
          code: "4EC4-07",
          name: "Analog and Digital Communication",
          credits: 3,
        },
        {
          code: "4EC4-21",
          name: "Analog and Digital Communication Lab",
          credits: 1.5,
        },
        { code: "4EC4-22", name: "Analog Circuits Lab", credits: 1.5 },
        {
          code: "4EC4-23",
          name: "Microcontrollers Lab",
          credits: 1.5,
        },
        {
          code: "4EC4-24",
          name: "Electronics Measurement & Instrumentation Lab",
          credits: 1.5,
        },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 5,
      name: "5th Semester (ECE)",
      subjects: [
        {
          code: "5EC3-01",
          name: "Computer Architecture",
          credits: 2,
        },
        { code: "5EC4-02", name: "Electromagnetics Waves", credits: 3 },
        { code: "5EC4-03", name: "Control system", credits: 3 },
        {
          code: "5EC4-04",
          name: "Digital Signal Processing",
          credits: 3,
        },
        {
          code: "5EC4-05",
          name: "Microwave Theory & Techniques",
          credits: 3,
        },
        { code: "PEC", name: "Professional Elective", credits: 2 },
        { code: "5EC4-21", name: "RF Simulation Lab", credits: 1.5 },
        {
          code: "5EC4-22",
          name: "Digital Signal Processing Lab",
          credits: 1.5,
        },
        { code: "5EC4-23", name: "Microwave Lab", credits: 1 },
        { code: "5EC7-30", name: "Industrial Training", credits: 2.5 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 6,
      name: "6th Semester (ECE)",
      subjects: [
        {
          code: "6EC3-01",
          name: "Power Electronics",
          credits: 2,
        },
        { code: "6EC4-02", name: "Computer Network", credits: 3 },
        {
          code: "6EC4-03",
          name: "Fiber Optics Communications",
          credits: 3,
        },
        {
          code: "6EC4-04",
          name: "Antennas and Propagation",
          credits: 3,
        },
        {
          code: "6EC4-05",
          name: "5G Communication Technology",
          credits: 3,
        },
        { code: "PEC", name: "Professional Elective", credits: 3 },
        { code: "6EC4-21", name: "Computer Network Lab", credits: 2 },
        {
          code: "6EC4-22",
          name: "Antenna and wave propagation Lab",
          credits: 1,
        },
        { code: "6EC4-23", name: "Electronics Design Lab", credits: 2 },
        { code: "6EC4-24", name: "Power Electronics Lab", credits: 1 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 7,
      name: "7th Semester (ECE)",
      subjects: [
        { code: "PEC", name: "Program Elective", credits: 3 },
        { code: "OE1", name: "Open Elective - I", credits: 3 },
        { code: "7EC4-21", name: "VLSI Design Lab", credits: 2 },
        { code: "7EC4-22", name: "5G Communication Lab", credits: 1 },
        {
          code: "7EC4-23",
          name: "Optical Communication Lab",
          credits: 1,
        },
        { code: "7EC7-30", name: "Industrial Training", credits: 2.5 },
        { code: "7EC7-40", name: "Seminar", credits: 2 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 8,
      name: "8th Semester (ECE)",
      subjects: [
        { code: "PEC", name: "Program Elective", credits: 3 },
        { code: "OE2", name: "Open Elective - II", credits: 3 },
        {
          code: "8EC4-21",
          name: "Internet of Things (IOT) Lab",
          credits: 1,
        },
        { code: "8EC4-22", name: "Skill Development Lab", credits: 1 },
        { code: "8EC7-50", name: "Project", credits: 7 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
  ],
  EE: [
    {
      id: 1,
      name: "1st Semester",
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
        {
          code: "1FY3-08",
          name: "Basic Electrical Engineering",
          credits: 2,
        },
        { code: "1FY2-20", name: "Engineering Physics Lab", credits: 1 },
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
      name: "2nd Semester",
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
        { code: "2FY3-09", name: "Basic Civil Engineering", credits: 2 },
        {
          code: "2FY2-21",
          name: "Engineering Chemistry Lab",
          credits: 1,
        },
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
      name: "3rd Semester (EE)",
      subjects: [
        {
          code: "3EE2-01",
          name: "Advanced Engineering Mathematics",
          credits: 3,
        },
        {
          code: "3EE1-03",
          name: "Managerial Economics and Financial Accounting ",
          credits: 2,
        },
        { code: "3EE3-04", name: "Power generation Process", credits: 2 },
        {
          code: "3EE4-05",
          name: "Electrical Circuit Analysis",
          credits: 3,
        },
        {
          code: "3EE4-06",
          name: "Analog Electronics",
          credits: 3,
        },
        { code: "3EE4-07", name: "Electrical Machine - I", credits: 3 },
        { code: "3EE4-08", name: "Electromagnetic Field", credits: 2 },
        { code: "3EE4-21", name: "Analog Electronics Lab", credits: 1 },
        { code: "3EE4-22", name: "Electrical Machine-I Lab", credits: 2 },
        {
          code: "3EE4-23",
          name: "Electrical circuit design Lab",
          credits: 2,
        },
        { code: "3EE7-30", name: "Industrial Training", credits: 1 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 4,
      name: "4th Semester (EE)",
      subjects: [
        { code: "4EE2-01", name: "Biology", credits: 2 },
        {
          code: "4EE1-02",
          name: "Technical Communication",
          credits: 2,
        },
        {
          code: "4EE3-04",
          name: "Electronic Measurement & Instrumentation",
          credits: 2,
        },
        {
          code: "4EE4-05",
          name: "Electrical Machine - II",
          credits: 3,
        },
        { code: "4EE4-06", name: "Power Electronics", credits: 3 },
        {
          code: "4EE4-07",
          name: "Signals & Systems",
          credits: 3,
        },
        {
          code: "4EE4-08",
          name: "Digital Electronics",
          credits: 2,
        },
        {
          code: "4EE4-21",
          name: "Electrical Machine - II Lab ",
          credits: 2,
        },
        { code: "4EE4-22", name: "Power Electronics Lab", credits: 2 },
        {
          code: "4EE4-23",
          name: "Digital Electronics Lab",
          credits: 1,
        },
        {
          code: "4EE4-24",
          name: "Measurement Lab",
          credits: 1,
        },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 5,
      name: "5th Semester (EE)",
      subjects: [
        {
          code: "5EE3-01",
          name: "Electrical Materials",
          credits: 2,
        },
        { code: "5EE4-02", name: "Power System - I", credits: 3 },
        { code: "5EE4-03", name: "Control System", credits: 3 },
        {
          code: "5EE4-04",
          name: "Microprocessor",
          credits: 3,
        },
        {
          code: "5EE4-05",
          name: "Electrical Machine Design",
          credits: 3,
        },
        { code: "PEC", name: "Professional Elective", credits: 2 },
        { code: "5EE4-21", name: "Power System - I Lab", credits: 1 },
        { code: "5EE4-22", name: "Control System Lab", credits: 1 },
        { code: "5EE4-23", name: "Microprocessor Lab", credits: 1 },
        { code: "5EE4-24", name: "System Programming Lab", credits: 1 },
        { code: "5EE7-30", name: "Industrial Training", credits: 2.5 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 6,
      name: "6th Semester (EE)",
      subjects: [
        {
          code: "6EE3-01",
          name: "Computer Architecture",
          credits: 2,
        },
        { code: "6EE4-02", name: "Power System - II", credits: 3 },
        {
          code: "6EE4-03",
          name: "Power System Protection",
          credits: 3,
        },
        {
          code: "6EE4-04",
          name: "Electrical Energy Conversion and Auditing",
          credits: 3,
        },
        { code: "6EE4-05", name: "Electric Drives", credits: 3 },
        { code: "PEC", name: "Professional Elective", credits: 3 },
        { code: "6EE4-21", name: "Power System - II Lab", credits: 2 },
        { code: "6EE4-22", name: "Electric Drives Lab", credits: 2 },
        {
          code: "6EE4-23",
          name: " Power System Protection Lab",
          credits: 1,
        },
        {
          code: "6EE4-24",
          name: "Modelling and simulation lab",
          credits: 1,
        },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 7,
      name: "7th Semester (EE)",
      subjects: [
        { code: "PEC", name: "Program Elective", credits: 3 },
        { code: "OE1", name: "Open Elective - I", credits: 3 },
        { code: "7EE4-21", name: "Embedded Systems Lab", credits: 2 },
        {
          code: "7EE4-22",
          name: "Advance control system lab",
          credits: 2,
        },
        { code: "7EE7-30", name: "Industrial Training", credits: 2.5 },
        { code: "7EE7-40", name: "Seminar", credits: 2 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
    {
      id: 8,
      name: "8th Semester (EE)",
      subjects: [
        { code: "PEC", name: "Program Elective", credits: 3 },
        { code: "OE2", name: "Open Elective – II", credits: 3 },
        { code: "8EE4-21", name: "Energy Systems Lab", credits: 2 },
        { code: "8EE7-50", name: "Project", credits: 7 },
        { code: "SODECA", name: "SODECA", credits: 0.5 },
      ],
    },
  ],
};

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

const branchSelect = document.getElementById("branchSelect");
const semesterSelect = document.getElementById("semesterSelect");
const subjectsArea = document.getElementById("subjectsArea");
const semesterTitle = document.getElementById("semesterTitle");
const totalCreditsBadge = document.getElementById("totalCreditsBadge");
const sgpaDisplay = document.getElementById("sgpaDisplay");
const prevCgpaInput = document.getElementById("prevCgpa");
const curSgpaInput = document.getElementById("curSgpa");
const cgpaOut = document.getElementById("cgpaOut");
const creditsUsedPrev = document.getElementById("creditsUsedPrev");
const creditsUsedCur = document.getElementById("creditsUsedCur");

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function populateBranches() {
  branchSelect.innerHTML = "";
  Object.keys(ALL_DATA).forEach((b) => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    branchSelect.appendChild(opt);
  });
}

function populateSemesters(branchName) {
  semesterSelect.innerHTML = "";
  const semesters = ALL_DATA[branchName] || [];
  semesters.forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s.id;
    opt.textContent = `${ordinal(s.id)} Semester`;
    semesterSelect.appendChild(opt);
  });
}

function getSemData(branchName, semId) {
  const data = ALL_DATA[branchName] || [];
  return data.find((s) => s.id === Number(semId));
}

function sumCreditsUpTo(branchName, semIdExcluding) {
  const data = ALL_DATA[branchName] || [];
  let total = 0;
  for (let s of data) {
    if (s.id < semIdExcluding)
      total += s.subjects.reduce((a, sub) => a + Number(sub.credits), 0);
  }
  return total;
}

function renderSemester(branchName, semId) {
  const sem = getSemData(branchName, semId);
  if (!sem) return;

  semesterTitle.textContent = `${ordinal(sem.id)} Semester`;
  document.getElementById(
    "printMetaDate"
  ).textContent = `Generated on: ${new Date().toLocaleDateString()} | Branch: ${branchName}`;

  const semCredits = sem.subjects.reduce((a, s) => a + Number(s.credits), 0);
  totalCreditsBadge.textContent = `${semCredits} Credits`;

  const table = document.createElement("table");
  table.innerHTML = `
      <thead>
        <tr>
          <th style="width:15%">Code</th>
          <th style="width:45%">Subject</th>
          <th style="width:15%;text-align:center">Credit</th>
          <th style="width:25%">Grade</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

  const tbody = table.querySelector("tbody");
  sem.subjects.forEach((sub) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="code-col" data-label="Code">${sub.code}</td>
        <td data-label="Subject">${sub.name}</td>
        <td class="credit-col" data-label="Credit">${sub.credits}</td>
        <td data-label="Grade">
          <select class="grade-select" data-credits="${sub.credits}"></select>
        </td>
      `;
    const sel = tr.querySelector("select");
    GRADES.forEach((g) => {
      const opt = document.createElement("option");
      opt.value = g.value;
      opt.textContent = g.label;
      sel.appendChild(opt);
    });
    sel.value = "10";
    sel.addEventListener("change", computeSGPA);
    tbody.appendChild(tr);
  });

  subjectsArea.innerHTML = "";
  subjectsArea.appendChild(table);

  creditsUsedPrev.textContent = sumCreditsUpTo(branchName, sem.id);
  creditsUsedCur.textContent = semCredits;
  computeSGPA();
}

function computeSGPA() {
  const selects = subjectsArea.querySelectorAll(".grade-select");
  let num = 0,
    den = 0;
  selects.forEach((sel) => {
    const g = Number(sel.value);
    const c = Number(sel.getAttribute("data-credits"));
    if (!isNaN(g)) {
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

  sgpaDisplay.style.backgroundImage =
    sgpa >= 8.5
      ? "linear-gradient(135deg, #4ade80, #22c55e)"
      : sgpa >= 7.5
      ? "linear-gradient(135deg, #fff, #94a3b8)"
      : "linear-gradient(135deg, #fbbf24, #d97706)";
}

function computeCGPA() {
  const prev = parseFloat(prevCgpaInput.value);
  const curr = parseFloat(curSgpaInput.value);
  if (isNaN(prev) || isNaN(curr)) {
    alert("Enter valid Previous CGPA");
    return;
  }

  const prevCred = parseFloat(creditsUsedPrev.textContent);
  const currCred = parseFloat(creditsUsedCur.textContent);

  if (prevCred === 0) {
    cgpaOut.textContent = curr.toFixed(2);
    return;
  }

  const final = (prev * prevCred + curr * currCred) / (prevCred + currCred);
  cgpaOut.textContent = final.toFixed(2);
}

branchSelect.addEventListener("change", () => {
  populateSemesters(branchSelect.value);
  renderSemester(branchSelect.value, semesterSelect.value || 1);
});

semesterSelect.addEventListener("change", () =>
  renderSemester(branchSelect.value, semesterSelect.value)
);
document.getElementById("calcCgpaBtn").addEventListener("click", computeCGPA);
document.getElementById("resetGrades").addEventListener("click", () => {
  subjectsArea.querySelectorAll("select").forEach((s) => (s.value = "10"));
  computeSGPA();
});
document
  .getElementById("printBtn")
  .addEventListener("click", () => window.print());

// Enhanced Copy
document.getElementById("exportBtn").addEventListener("click", async () => {
  const branch = branchSelect.value;
  const sem = semesterSelect.options[semesterSelect.selectedIndex].text;
  const sgpa = sgpaDisplay.textContent;
  const cgpa = cgpaOut.textContent;
  const text = `RTU Result - ${branch} | ${sem}\nSGPA: ${sgpa}\nCGPA: ${cgpa}`;

  try {
    await navigator.clipboard.writeText(text);
    const btn = document.getElementById("exportBtn");
    const originalText = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = originalText), 2000);
  } catch {
    alert("Copy failed");
  }
});

// Init
populateBranches();
branchSelect.value = "CSE";
populateSemesters("CSE");
renderSemester("CSE", 1);