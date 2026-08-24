export const portfolioData = {
  personal: {
    name: "Amritanshu Shukla",
    tagline: "Data Analyst | BI Developer | Business Analyst | Frontend Developer",
    statusPill: "Available for Entry-Level Roles & Internships",
    location: "Lucknow, India",
    email: "amritanshushukla1968@gmail.com",
    phone: "+91 8081171673",
    github: "https://github.com/amritanshu1968-wq",
    linkedin: "https://www.linkedin.com/in/amritanshu-shukla-2253203a3",
    resumeUrl: "/amritanshu_shukla_resume.pdf",
    formalPhoto: "/amritanshu_formal.jpg",
    casualPhoto: "/amritanshu_casual.jpg",
    bioShort: "Final-year B.Tech CSE (IoT) student at BBDU Lucknow. I analyze data with Python, SQL & Power BI and build responsive frontend interfaces with React and Tailwind CSS.",
    bioFull: "I work mainly with Python, SQL and Power BI for data analysis, business reporting, and dashboard development, alongside a solid frontend development background in React.js and Tailwind CSS. As a final-year Computer Science student, I enjoy transforming raw operational data into structured business insights and crafting clean, usable web interfaces."
  },

  skills: [
    {
      category: "Data Analytics & BI",
      description: "Data extraction, transformation, visualization, and business reporting.",
      items: [
        { name: "Power BI & DAX", level: "Intermediate", detail: "Interactive dashboards, data modeling, custom measures" },
        { name: "SQL (MySQL/PostgreSQL)", level: "Intermediate", detail: "Queries, joins, grouping, aggregations, window functions" },
        { name: "Python (Pandas, NumPy)", level: "Intermediate", detail: "Data cleaning, exploratory data analysis, automation" },
        { name: "Data Visualization", level: "Intermediate", detail: "Matplotlib, Seaborn, charting best practices" },
        { name: "MS Excel", level: "Intermediate", detail: "Pivot tables, VLOOKUP/XLOOKUP, summary reporting" }
      ]
    },
    {
      category: "Frontend Web Development",
      description: "Building responsive, modern, user-centric web applications.",
      items: [
        { name: "React.js", level: "Intermediate", detail: "Functional components, hooks, state management, props" },
        { name: "JavaScript (ES6+)", level: "Intermediate", detail: "DOM manipulation, async/await, REST API integration" },
        { name: "Tailwind CSS", level: "Intermediate", detail: "Utility-first layouts, responsive design, custom themes" },
        { name: "HTML5 & CSS3", level: "Proficient", detail: "Semantic markup, Flexbox, CSS Grid, clean styling" }
      ]
    },
    {
      category: "Tools & Core Science",
      description: "Development workflow and computer science fundamentals.",
      items: [
        { name: "Git & GitHub", level: "Intermediate", detail: "Version control, branching, repository management" },
        { name: "VS Code", level: "Proficient", detail: "Primary IDE, debugging, extensions workflow" },
        { name: "REST APIs", level: "Intermediate", detail: "API consumption, JSON parsing, HTTP methods" },
        { name: "IoT Concepts", level: "Academic", detail: "Sensor data telemetry, embedded system basics (B.Tech CSE IoT)" }
      ]
    }
  ],

  projects: [
    {
      id: "uber-ncr-dashboard",
      title: "Uber NCR Ride Data Analysis & Dashboard",
      subtitle: "Power BI Data Analytics Project",
      category: "Data Analytics / BI",
      featured: true,
      tag: "Power BI + SQL",
      problem: "High ride cancellation rates and demand mismatches across NCR zones made booking patterns and driver availability unpredictable during peak commute hours.",
      built: "Developed an interactive Power BI dashboard that cleanses and analyzes Uber ride records to monitor booking volumes, cancellation causes, ride completion percentages, and peak-hour revenue trends.",
      tech: ["Power BI", "SQL", "Python (Pandas)", "MS Excel", "DAX"],
      learnings: "Created dynamic DAX measures for dynamic time-of-day filtering and identified that morning peak hours (8 AM - 10 AM) experienced a 38% cancellation surge, primarily driven by short-distance driver rejections.",
      metrics: [
        { label: "Data Rows Analyzed", value: "50,000+" },
        { label: "Peak Cancellation Surge", value: "38%" },
        { label: "DAX Measures Built", value: "8 Key Metrics" }
      ],
      github: "https://github.com/amritanshu1968-wq",
      liveUrl: "https://uberncrdashboard-vbczacjhv9ojaq54nhafzq.streamlit.app/Overview",
      demoType: "powerbi_preview"
    },
    {
      id: "smart-city-digital-twin",
      title: "Smart City Digital Twin & Telemetry Dashboard",
      subtitle: "IoT & Resource Analytics Platform",
      category: "Data & IoT",
      featured: true,
      tag: "Python + IoT",
      problem: "Municipal authorities lacked a single dashboard view to track urban resource usage, environmental air quality index (AQI), and energy consumption across city sectors in real time.",
      built: "Constructed an IoT-connected monitoring dashboard combining Python data processing with visual telemetry cards to display live sensor feeds, streetlight power status, and environmental alerts.",
      tech: ["Python", "Streamlit", "Power BI", "REST APIs", "IBM Watson IoT"],
      learnings: "Learned how to process streaming time-series data, handle missing sensor payloads, and visualize real-time spatial alert nodes for municipal monitoring.",
      metrics: [
        { label: "Sensors Monitored", value: "12 Telemetry Nodes" },
        { label: "Data Stream Frequency", value: "Real-Time / 5s" },
        { label: "Key Focus Areas", value: "AQI & Energy Usage" }
      ],
      github: "https://github.com/amritanshu1968-wq",
      liveUrl: "https://amritanshu1968-wq-smart-city-digital-twin-app-dii0vm.streamlit.app/",
      demoType: "smartcity_preview"
    },
    {
      id: "llamabuddy-ai-app",
      title: "LlamaBuddy Web Interface",
      subtitle: "Frontend AI Application Interface",
      category: "Frontend Development",
      featured: true,
      tag: "React.js + Tailwind",
      problem: "Interacting with local or cloud AI models directly via API scripts was non-intuitive for non-technical users who needed a visual interface with preset prompts and response controls.",
      built: "Built a responsive React.js frontend interface featuring real-time message rendering, customizable prompt presets, model temperature sliders, and session history management.",
      tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "REST API"],
      learnings: "Mastered React state management for streaming API responses, accessible UI layout principles, and optimizing responsive sidebar behavior across screen sizes.",
      metrics: [
        { label: "Component Architecture", value: "100% Modular React" },
        { label: "UI Response Speed", value: "Instant State Update" },
        { label: "Theme Support", value: "Dark / Light Responsive" }
      ],
      github: "https://github.com/amritanshu1968-wq",
      demoType: "llama_preview"
    }
  ],

  experience: [
    {
      role: "Frontend Development Intern",
      company: "Codveda Technologies",
      location: "Remote / India",
      period: "Jan 2026 – Feb 2026",
      type: "Internship",
      highlights: [
        "Developed responsive UI components for client web applications using HTML, CSS, JavaScript, and Tailwind CSS.",
        "Collaborated with frontend teams to implement new dashboard features, optimize page layout speed, and improve user navigation.",
        "Utilized Git & GitHub for code version control, participating in code reviews and real-world project workflows."
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering (IoT)",
      institution: "Babu Banarasi Das University",
      location: "Lucknow, India",
      period: "2023 – Present (Final Year)",
      details: "Focusing on Computer Science fundamentals, IoT systems, Database Management Systems (DBMS), Python Programming, and Data Structures."
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Modern Academy Inter College",
      location: "Lucknow, India",
      period: "Completed 2023",
      details: "Science stream coursework with strong emphasis on Mathematics and Physics."
    },
    {
      degree: "High School (10th Grade)",
      institution: "City Montessori School (CMS)",
      location: "Lucknow, India",
      period: "Completed 2021",
      details: "Foundational academic training with distinction."
    }
  ],

  certifications: [
    {
      title: "Data Visualization with Python",
      issuer: "IBM",
      description: "Hands-on certification covering Matplotlib, Seaborn, and Folium for data storytelling and reporting."
    },
    {
      title: "Robots are Coming! Build IoT Apps with Watson, Swift & Node-RED",
      issuer: "IBM",
      description: "Practical certification on building IoT sensor applications and connecting backend services with Node-RED."
    },
    {
      title: "NCC 'B' & 'C' Certificates",
      issuer: "National Cadet Corps (India)",
      description: "Recognized for military training, camp leadership, social service, and personal discipline."
    }
  ]
};
