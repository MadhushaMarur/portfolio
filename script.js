window.header = {
  Title: "Madhusha Marur",
  DefaultTheme: "dark",
  Favicon: "./assets/favicon.ico",
  Pages: [
    {
      Name: "Home",
      ID: "home",
      Link: "./index.html",
    },
    {
      Name: "Experience",
      ID: "experience",
      Link: "./experience.html",
    },
    {
      Name: "Education",
      ID: "education",
      Link: "./education.html",
    },
    {
      Name: "Projects",
      ID: "projects",
      Link: "./projects.html",
    },
    {
      Name: "Contact",
      ID: "contact",
      Link: "./contact.html",
    },
  ],
};

window.home = [
  {
    Name: "Madhusha Marur",
    Title: "Technology Lead",
    Organization: "Infosys",
    Email: "mmarur22@gmail.com",
    Location: "Atlanta, Georgia, USA",
    AboutTitle: "About Me",
    Image: {
      Src: "./assets/Madhusha-ProfilePicture.jpg",
      Alt: "Madhusha Marur",
    },
   Paragraphs: `
  I'm currently a Technology Lead at <a href="https://www.infosys.com/">Infosys</a>, 
  where I design and deliver scalable API and integration solutions for enterprise systems. 
  I enjoy working at the intersection of backend development and cloud technologies—across 
  Java, Spring Boot, MuleSoft, microservices, and distributed architectures.
<br>
<br>
  I earned my Master’s in Computer Science from <a target="_blank" href="https://www.kent.edu/">Kent State University</a>, 
  where I honed my skills in system design and software engineering. During my studies, 
  I focused on developing robust backend systems and exploring modern API frameworks.
<br>
<br>
  I began my professional journey as a Software Engineer at <a href="https://www.cgi.com">CGI</a> 
  and have since grown into a leadership role at Infosys. I have worked on enterprise-grade 
  projects involving API development, system integration, and cloud-native deployments. 
  My expertise includes designing clean, secure architectures and optimizing performance for mission-critical systems.
<br>
<br>
  I hold a Bachelor’s degree in Computer Science and Engineering from 
  <a target="_blank" href="https://pdit.ac.in/">Proudhadevaraya Institute of Technology</a>, 
  where I built a range of impactful projects—from mobile applications to responsive, 
  full-stack web platforms.
  Prior to that, I studied at <a target="_blank" href="https://hospet.kvs.ac.in/en/">Kendriya Vidyalaya</a> in Hospet.
<br>
<br>
  I’m thankful to my mentors, peers, family, and friends whose encouragement and guidance have shaped my professional and personal growth.
<br>
`

  },
];

window.experience = [
  {
    Company: "Infosys",
    Type: "Full Time",
    CompanyLogo: "./assets/infy_logo.jpg",
    Location: "Atlanta, Georgia, USA",
    Roles: [
      {
        Title: "Technology Lead",
        TimePeriod: "October 2022 - Present",
        Description: `<ul class="role-ul">
<li>Orchestrated the development of distributed, fault-tolerant systems using React for dynamic frontends and Node.js for robust backend services, ensuring enterprise-grade scalability and resilience.</li>
<li>Designed and deployed real-time, event-driven microservices with Spring Boot, Kafka, GraphQL, and Node.js, achieving a 40% boost in API responsiveness and system throughput.</li>
<li>Pioneered multi-cloud integration strategies across AWS, Azure, and GCP, optimizing performance and operational costs for enterprise applications.</li>
<li>Directed containerization efforts with Docker and Kubernetes, streamlining deployments and reducing operational overhead by 30%.</li>
<li>Built fully automated CI/CD pipelines leveraging Jenkins, GitHub Actions, and Terraform to accelerate release cycles and improve deployment reliability.</li>
<li>Established secure API frameworks with OAuth 2.0, JWT, and API Gateway, safeguarding critical enterprise services and data flows.</li>
<li>Championed the transition of monolithic legacy systems to microservices architectures, enhancing agility and simplifying system maintenance.</li>
<li>Mentored cross-functional teams in React, Node.js, and cloud-native best practices, fostering technical excellence and innovation.</li>
<li>Collaborated with business stakeholders to align engineering roadmaps with organizational goals, ensuring timely delivery of key features and improved stakeholder satisfaction.</li>        </ul>`,
      },
      {
        Title: "Technology Analyst",
        TimePeriod: "July 2021 - October 2022",
        Description: `<ul class="role-ul">
<li>Designed and implemented RESTful APIs and SOAP services with Java and Node.js to facilitate seamless data exchange across cloud and on-premise environments.</li>
<li>Developed responsive, interactive user interfaces using React, enhancing user experience for enterprise dashboards and internal tools.</li>
<li>Built middleware solutions on MuleSoft Anypoint Platform, streamlining API management and third-party integrations for critical systems.</li>
<li>Engineered event-driven architectures using Kafka to enable real-time processing and improved scalability of high-volume applications.</li>
<li>Enhanced backend systems with Core Java, Spring Boot, and Node.js, optimizing performance for high-traffic workloads and reducing latency by 20%.</li>
<li>Automated build, testing, and deployment workflows with Jenkins and Git, reducing release times and increasing deployment reliability.</li>
<li>Assisted DevOps teams with Docker containerization and Kubernetes orchestration to scale applications efficiently in production environments.</li>
<li>Supported cloud migration initiatives to AWS and Azure, improving application resilience and enabling greater scalability.</li>
<li>Conducted code reviews and provided technical guidance to junior developers, promoting adherence to coding standards and fostering team growth.</li>
</ul>`,
      },
    ],
    Pictures: [
      {
        Src: "./assets/infy.jpg",
        Subtitle: "AHA Program, Infosys<br> New York, USA<br>24 March, 2023.",
      },
    ],
  },
  {
    Company: "Infosys",
    Type: "Full Time",
    CompanyLogo: "./assets/infy_logo.jpg",
    Location: "Hyderabad, Telangana, India",
    Roles: [
      {
        Title: "Associate Consultant",
        TimePeriod: "Aug 2019 - Jan 2020",
        Description: `<ul class="role-ul">
<li>Engineered and deployed Java-based middleware services using MuleSoft Anypoint Platform, enabling seamless data exchange across enterprise systems.</li>
<li>Integrated Core Java components within MuleSoft flows to deliver real-time data processing and transformation capabilities.</li>
<li>Designed and built custom Java connectors in MuleSoft to interface with third-party systems, cutting integration efforts by 30%.</li>
<li>Enhanced Java microservices architecture to support high availability and ultra-low latency API communications.</li>
<li>Implemented multithreading and concurrency in Java to improve throughput and system resilience under peak traffic.</li>
<li>Developed advanced error handling and logging frameworks in Java and MuleSoft APIs, reducing mean time to resolution (MTTR) by 25%.</li>
<li>Partnered with stakeholders to design and deliver enterprise API solutions for complex integration scenarios.</li>
<li>Created comprehensive unit and integration test suites for Java services and MuleSoft flows, increasing release confidence and code quality.</li>
<li>Optimized Java-based APIs for high-volume data processing, achieving a 20% boost in throughput and system performance.</li>

        </ul>`,
      },
    ],
  },
  {
    Company: "CGI",
    Type: "Full Time",
    CompanyLogo: "./assets/cgi_logo.jfif",
    Location: "Bangalore, Karnataka, India",
    Roles: [
      {
        Title: "Software Engineer",
        TimePeriod: "Dec 2018 - August 2019",
        Description: `<ul class="role-ul">
<li>Designed and implemented batch processing solutions for large-scale data transfers, improving efficiency by 30%.</li>
<li>Created custom MuleSoft connectors to streamline interactions with third-party services and accelerate development workflows.</li>
<li>Enhanced API error handling and logging mechanisms, enabling faster troubleshooting and reducing downtime incidents by 20%.</li>
<li>Assisted in migrating monolithic applications to modular, service-oriented architectures, improving system maintainability.</li>
<li>Implemented API rate limiting and throttling strategies to prevent system overload and ensure stable performance.</li>
<li>Conducted load and stress testing with JMeter to identify performance bottlenecks and optimize system throughput.</li>
<li>Collaborated with DevOps teams to optimize containerized applications using Docker, improving deployment efficiency and scalability.</li>
<li>Participated in code reviews and pair programming to enforce best practices in Java and MuleSoft development.</li>
        </ul>`,
      },
      {
        Title: "Associate Software Engineer",
        TimePeriod: "Dec 2016 - Dec 2018",
        Description: `<ul class="role-ul">
<li>Developed and maintained Java-based enterprise applications, ensuring high availability and optimized performance.</li>
<li>Designed and implemented RESTful and SOAP APIs using MuleSoft, enabling seamless system integrations and data exchange.</li>
<li>Built scalable middleware solutions to streamline data flow between enterprise applications and third-party systems.</li>
<li>Optimized MuleSoft flows, connectors, and transformers, reducing integration processing time by 30%.</li>
<li>Enhanced backend services with Core Java, Multithreading, and Spring Boot for improved concurrency and responsiveness.</li>
<li>Fine-tuned SQL queries in PostgreSQL and MySQL, accelerating database interactions and query performance.</li>
<li>Implemented robust error handling and logging in MuleSoft using DataWeave and API policies for better system observability.</li>
<li>Deployed and monitored APIs with MuleSoft API Manager and Anypoint Platform, collaborating effectively with cross-functional teams.</li>
</ul>`,
      },
    ],
    Pictures: [
      {
        Src: "./assets/cgi-mar.jpg",
        Subtitle: "CGI, Bengaluru office.<br>Dec 5, 2016.",
      },
      
    ],
  },

];

window.education = [
  {
    University: "Kent State University",
    Degree: "Master of Science",
    Major: "Computer Science",
    Duration: "Jan 2020 - May 2021",
    CGPA: "",
    Location: "Kent, Ohio, USA",
    Logo: "./assets/kent-state-university-emblem.jpg",
    Pictures: [
      {
        Src: "./assets/landingpage.jpg",
      },
    ],
  },
  {
    University: "Proudhadeveraya Institute of Technology",
    Degree: "Bachelor of Engineering",
    Major: "Computer Science",
    Duration: "Aug 2012 - May 2016",
    CGPA: "",
    Location: "Hosapete, Karnataka, India",
    Logo: "./assets/pdit-logo.jpg",
    Pictures: [
      {
        Src: "./assets/pdit.jpg",
      },
    ],
  },
  {
    University: "Kendriya Vidyayala",
    Degree: "Kindergarten to High School",
    Duration: "Aug 2000 - May 2010",
    CGPA: "",
    Location: "Hospet, Karnataka, India",
    Logo: "./assets/kvs-logo.jpg",
    Pictures: [
      {
        Src: "./assets/kvs-hospet.jpg",
      },
    ],
  },
];

window.projects = [
  {
    Title: "Portfolio Website",
    Description:
      "Developed a responsive web application to showcase my professional journey. Features sections for experience, education, projects, and skills.",
    Year: "2025",
    Date: "February 4th, 2025",
    Skills: ["HTML", "CSS", "Javascript", "Web Components", "Web Development"],
    TeamSize: 1,
    Links: {
      Website: "https://madhushamarur.github.io/",
      "Github Code": "https://github.com/madhushamarur/madhushamarur.github.io",
    },
  },
];

window.contact = [
  {
    greeting: "👋 Hello there!",
    message: "Feel free to reach out—I’d be happy to connect, collaborate, or chat about exciting opportunities.",
    links: [
      {
        url: "mailto://mmarur22@gmail.com",
        text: "mmarur22@gmail.com",
      },
      {
        url: "https://www.linkedin.com/in/madhusha-marur/",
        text: "linkedin.com/in/madhusha-marur",
      },
      {
        url: "https://github.com/MadhushaMarur",
        text: "github.com/MadhushaMarur",
      },
    ],
    closing: "Thanks for scrolling all the way here 😊.",
  },
];

class MyHeader extends HTMLElement {
  static observedAttributes = ["pageTitle", "pageSubTitle", "theme"];

  constructor() {
    super();
    this.theme = window.header.DefaultTheme;
    this.pageTitle = this.getAttribute("pageTitle");
    this.pageSubTitle = this.getAttribute("pageSubTitle");
  }

  get theme() {
    return this.getAttribute("theme");
  }

  set theme(newValue) {
    this.setAttribute("theme", newValue);
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue !== newValue && attr === "pageTitle") {
      this.pageTitle = newValue;
    } else if (oldValue !== newValue && attr === "pageSubTitle")
      this.pageSubTitle = newValue;
    else if (oldValue !== newValue && attr === "theme") this.theme = newValue;
  }

  connectedCallback() {
    this.setInitialTheme();
    this.render();
    this.querySelector("#theme-toggle").addEventListener(
      "click",
      this.onThemeChange
    );
  }

  setInitialTheme() {
    const initialTheme = localStorage.getItem("theme");
    const setInitialTheme =
      initialTheme === null ? window.header.DefaultTheme : initialTheme;

    this.theme = setInitialTheme;

    if (setInitialTheme === "light")
      document.body.classList.remove("dark-theme");
    else document.body.classList.add("dark-theme");
  }

  onThemeChange() {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    this.theme = newTheme;

    if (newTheme === "light") document.body.classList.remove("dark-theme");
    else document.body.classList.add("dark-theme");
    localStorage.setItem("theme", newTheme);
  }

  renderThemeIcon() {
    const lightIcon = `<svg id="theme-toggle" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.14a.722.722 0 0 0-.722.722v2.166a.722.722 0 0 0 1.444 0v-2.166a.722.722 0 0 0-.722-.721ZM12 2.25a.722.722 0 0 0-.722.722v2.166a.722.722 0 0 0 1.444 0V2.972A.722.722 0 0 0 12 2.25ZM5.86 12a.722.722 0 0 0-.723-.722H2.972a.722.722 0 0 0 0 1.444h2.165A.722.722 0 0 0 5.86 12ZM21.028 11.278h-2.165a.722.722 0 0 0 0 1.444h2.165a.722.722 0 0 0 0-1.444ZM7.148 16.13a.72.72 0 0 0-.51.21l-1.533 1.534a.72.72 0 1 0 1.022 1.022l1.532-1.533a.724.724 0 0 0-.51-1.233ZM16.852 7.87a.72.72 0 0 0 .51-.21l1.533-1.533a.72.72 0 0 0 .211-.511.72.72 0 0 0-.722-.722.72.72 0 0 0-.51.21L16.34 6.639a.72.72 0 0 0-.211.51.72.72 0 0 0 .722.722ZM6.127 5.105a.72.72 0 0 0-.511-.211.72.72 0 0 0-.722.722.72.72 0 0 0 .21.51L6.638 7.66a.72.72 0 0 0 .511.211.72.72 0 0 0 .722-.722.72.72 0 0 0-.21-.51L6.126 5.105ZM17.363 16.34a.72.72 0 1 0-1.022 1.022l1.532 1.533a.72.72 0 0 0 1.022 0 .72.72 0 0 0 0-1.021l-1.532-1.533ZM12 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5Z" fill="currentColor"></path></svg>`;
    const darkIcon = `<svg id="theme-toggle" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.742 13.045a8.086 8.086 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.026 8.026 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.936 9.936 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1 1 0 0 0-1.224-1.224Zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.952 7.952 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.973 9.973 0 0 0 7.848 2.891 8.037 8.037 0 0 1-1.484 2.059Z" fill="currentColor"></path></svg>`;

    return this.theme === "dark" ? lightIcon : darkIcon;
  }

  render() {
    const subTitle = this.pageSubTitle
      ? `<section class="header-subtitle">${this.pageSubTitle}</section>`
      : "";

    this.innerHTML = `
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="./style.css">
        <link rel="icon" type="image/x-icon" href="${window.header.Favicon}">
        <title>Madhusha Marur: ${this.pageTitle}</title>
      </head>
      <header>
        <div class="header-container">
          <h1 class="name">${window.header.Title}</h1>
          <div title="Toggle theme" class="theme-icon">
            ${this.renderThemeIcon()}
          </div>
        </div>
        <hr>
        <center>
        <div class="row-header">
          ${window.header.Pages.map(
            (page) => `
            <section id="#" title="${page.ID}" class="row-header-item">
              <a href="${page.Link}">${page.Name}</a>
            </section>
          `
          ).join("")}
        </div>
        </center>
        <div class="exp-header">
          <label class="page-title">${this.pageTitle}</label>
          ${subTitle}
        </div>
      </header>`;
  }
}

class MyHome extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      ${window.home
        .map(
          (section) => `
        <div class="profile-container">
          <img class="profile-image" src="${section.Image.Src}" alt="${
            section.Image.Alt
          }">
          <div>
            <strong>${section.Name}</strong>
            <section class="pad" style="margin-top: 16px;">${
              section.Title
            }</section>
            <section class="pad">${section.Organization}</section>
            <section class="small-pad" style="margin-top: 20px;"><a href="mailto://${
              section.Email
            }">${section.Email}</a></section>
            <section class="small-pad">${section.Location}</section>
          </div>
        </div>
        <div class="about-text">
          <h4>${section.AboutTitle}</h4>
          ${section.Paragraphs ? section.Paragraphs : ``}
        </div>
      `
        )
        .join("")}
      </div>`;
  }
}

class MyEducation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="education" class="education">
        ${window.education
          .map(
            (edu) => `
          <div class="education-section">
            <div class="education-container">
              ${
                edu.Logo
                  ? `
                <div class="education-logo-container">
                  <img class="education-logo" src="${edu.Logo}" alt="${edu.University} Logo">
                </div>
              `
                  : ""
              }
              <div class="education-content">
                <div class="education-text">
                  <section class="school-title" id="${edu.Degree?.toLowerCase()?.replace(
                    " ",
                    "-"
                  )}">${edu.University}</section>
                  <section class="degree-title">${edu.Degree}${
              edu.Major ? `, ${edu.Major}` : ""
            }</section>
                  ${
                    edu.CGPA
                      ? `<section class="education-subtitle">CGPA: ${edu.CGPA}</section>`
                      : ""
                  }
                  <section class="education-subtitle">${edu.Duration}</section>
                  <section class="education-subtitle">${edu.Location}</section>
                </div>
                ${
                  edu.Pictures
                    ? `
                <div class="company-images">
                  ${edu.Pictures.map(
                    (pic) => `
                    <figure>
                      <img class="company-image" src="${pic.Src}" alt="${
                      pic.Subtitle
                    }">
                      ${
                        pic.Subtitle
                          ? `<figcaption>${pic.Subtitle}</figcaption>`
                          : ""
                      }
                    </figure>
                  `
                  ).join("")}
                </div>`
                    : ""
                }
              </div>
            </div>
            ${
              edu.Description
                ? `<section class="education-description">${edu.Description}</section>`
                : ""
            }
          </div>
          <hr class="hr">
        `
          )
          .join("")}
      </div>`;
  }
}

class MyExperience extends HTMLElement {
  constructor() {
    super();
    this.selectedType = "All";
    this.experience = [];
    this.experienceTypes = [];
  }

  connectedCallback() {
    this.prepareExperienceTypes();
    this.addEventListener("click", this.onTabClick);
    this.render(window.experience);
  }

  prepareExperienceTypes() {
    this.experienceTypes = [
      ...new Set(window.experience.map((exp) => exp.Type)),
    ];
    this.experienceTypes.unshift("All");
    this.experienceTypes.sort();
  }

  onTabClick(event) {
    const selectedType = event.target.innerText;
    if (!this.experienceTypes.includes(selectedType)) return;

    const filteredExperience =
      selectedType === "All"
        ? window.experience
        : window.experience.filter(
            (exp) => exp.Type?.toLowerCase() === selectedType.toLowerCase()
          );

    this.selectedType = selectedType;
    this.render(filteredExperience);
  }

  render(experience) {
    this.innerHTML = `
      <div class="page-content">
        ${experience
          .map(
            (exp) => `
          <div class="company">
            <div class="company-header">
              ${
                exp.CompanyLogo
                  ? `
                <div class="company-logo-container">
                  <img class="company-logo" src="${exp.CompanyLogo}" alt="${exp.Company} Logo">
                </div>
              `
                  : ""
              }
              <div>
                <section class="company-title">${exp.Company}</section>
                <section class="company-location">${exp.Location}</section>
              </div>
            </div>
            ${exp.Roles.map(
              (role) => `
              <div class="role">
                <div class="role-header">
                  <div class="role-header-item">
                    <section class="role-title">${role.Title}</section>
                    ${
                      exp.Subtitle
                        ? `<section class="advisor-name">${exp.Subtitle}</section>`
                        : ""
                    }
                  </div>
                  <div class="role-header-item">
                    <section class="role-duration">${role.TimePeriod}</section>
                  </div>
                </div>
                ${
                  role.Description
                    ? `<section class="role-description">${role.Description}</section>`
                    : ""
                }
              </div>
            `
            ).join("")}
            ${
              exp.Pictures
                ? `
              <div class="company-images">
                ${exp.Pictures.map(
                  (pic) => `
                  <figure>
                    <img class="company-image" src="${pic.Src}" alt="${
                    pic.Subtitle
                  }">
                    ${
                      pic.Subtitle
                        ? `<figcaption>${pic.Subtitle}</figcaption>`
                        : ""
                    }
                  </figure>
                `
                ).join("")}
              </div>
            `
                : ""
            }
          </div>
          <hr class="hr">
        `
          )
          .join("")}
      </div>
    `;
  }
}

class MyFilter extends HTMLElement {
  constructor() {
    super();
    this.skills = [];
    this.titles = [];
    this.selectedSkills = [];
    this.selectedTitles = [];
    this.projects = window.projects;
  }

  connectedCallback() {
    this.prepareFilters();
    // FIXME When filter is added clicking on x of filter must also trigger this event.
    this.addEventListener("click", this.onFilterSelect);
    this.render();
  }

  prepareFilters() {
    this.titles = this.projects.map((p) => p.Title);
    this.titles = [...new Set(this.titles)]; // Remove duplicates

    this.skills = this.projects.map((p) => p.Skills).flat(1); // Flatten 2D array
    this.skills = [...new Set(this.skills)]; // Remove duplicates
    this.skills.sort();
  }

  onFilterSelect() {
    let selectedSkills = Array.from(
      document.getElementById("selectedSkills").options
    )
      .filter((option) => option.selected)
      .map((option) => option.value);

    this.selectedSkills = selectedSkills;

    let selectedTitles = Array.from(
      document.getElementById("selectedTitles").options
    )
      .filter((option) => option.selected)
      .map((option) => option.value);

    this.selectedTitles = selectedTitles;

    // Start with all projects and apply filters
    this.selectedProjects = this.projects;

    if (this.selectedSkills.length) {
      this.selectedProjects = this.selectedProjects.filter((project) =>
        project.Skills.some((skill) => this.selectedSkills.includes(skill))
      );
    }

    if (this.selectedTitles.length) {
      this.selectedProjects = this.selectedProjects.filter((p) =>
        this.selectedTitles.includes(p.Title)
      );
    }

    this.renderMyProject();
  }

  renderMyProject() {
    const component = document.querySelector("my-project");
    component.projects = JSON.stringify(this.selectedProjects);
  }

  renderFilters() {
    let filters = ``;

    let skillFilter = `<select id="selectedSkills" placeholder="Select Skills" txtSearch="Search Skills" style="width: 40%" multiple multiselect-search="true" @click=${this.onFilterSelect}>`;
    skillFilter += this.skills.map(
      (skill) => `<option value="${skill}">${skill}</option>`
    );
    skillFilter += "</select>";

    let titleFilter = `<select id="selectedTitles" placeholder="Select Projects" txtSearch="Search Projects" style="width: 55%" multiple multiselect-search="true" @click=${this.onFilterSelect}>`;
    titleFilter += this.titles.map(
      (title) => `<option value="${title}">${title}</option>`
    );
    titleFilter += "</select>";

    filters += `<div class="filters-div">${titleFilter}&nbsp; ${skillFilter}</div>`;
    return filters;
  }

  render() {
    this.innerHTML = `${this.renderFilters()}`;
  }
}

class MyProject extends HTMLElement {
  static observedAttributes = ["projects"];

  constructor() {
    super();
    this.skillCount = 0;
    this.totalSkillCount = this.getSkillCount(window.projects);
    this.projectCount = window.projects.length;
    // Property projects here is a string. my-filter component sends a string of objects.
    this.projects = JSON.stringify(window.projects);
  }

  connectedCallback() {
    if (!this.projects) return;

    let projectMap = this.prepareProjectMap();
    this.render(projectMap);
  }

  getSkillCount(projects) {
    let skillCount;
    skillCount = projects.map((p) => p.Skills).flat(1); // Convert 2D array to 1D array.
    skillCount = [...new Set(skillCount)]; // Remove duplicates
    return skillCount.length;
  }

  get projects() {
    return this.getAttribute("projects");
  }

  set projects(newValue) {
    this.setAttribute("projects", newValue);
  }

  attributeChangedCallback(_, oldValue, newValue) {
    // Don't change the project value when newValue is empty.
    if (newValue && oldValue !== newValue) {
      this.projects = newValue;
      this.connectedCallback(); // Re-render manually when the project value changes.
    }
  }

  prepareProjectMap() {
    // Convert the string from my-filter to object.
    let projects = JSON.parse(this.projects);
    this.projectCount = projects.length;
    this.skillCount = this.getSkillCount(projects);

    let projectMap = projects.reduce(function (map, project) {
      if (!(project.Year in map)) map[project.Year] = [];
      map[project.Year].push(project);
      return map;
    }, {});

    const map = new Map(Object.entries(projectMap));
    let sortedArray = Array.from(map.entries());

    sortedArray.sort((a, b) => b[0] - a[0]);
    let sortedMap = new Map(sortedArray);

    return sortedMap;
  }

  getProjectTitle(p) {
    if (p.TitleLink && p.TitleLink !== "")
      return `<label class="project-title"><a target="_blank" href="${p.TitleLink}">${p.Title}</a></label>`;

    return `<label class="project-title">${p.Title}</label>`;
  }

  getLinks(p) {
    if (p.Links && Object.keys(p.Links).length) {
      let links = ` `;

      Object.entries(p.Links).forEach(([key, value], index) => {
        // prettier-ignore
        links += value ? `<a target="_blank" href="${value}">${key}</a>` : `${key}`;
        if (index != Object.keys(p.Links).length - 1)
          links += `&nbsp; • &nbsp;`;
      });

      return links;
    }

    return ``;
  }

  getTeamSize(p) {
    if (p.TeamSize && p.TeamSize > 1)
      return `&nbsp;•&nbsp;Team of ${p.TeamSize}`;

    return ``;
  }

  getProfessorName(p) {
    if (p.Professor && p.Professor !== "")
      return `${p.Professor} &nbsp;•&nbsp; `;

    return ``;
  }

  getSkills(p) {
    if (p.Skills && p.Skills.length) {
      return `&nbsp;•&nbsp; Skills:
        ${p.Skills.map((tag) => `&nbsp;&nbsp;#${tag}`).join("")}`;
    }

    return ``;
  }

  renderProject(p) {
    return `
      ${this.getProjectTitle(p)}
      <section class="project-subsection">
        ${p.Date} ${this.getSkills(p)}
        ${this.getTeamSize(p)} 
      </section>
      <section class="project-subsection">
        ${this.getLinks(p)}
      </section>
      <section class="project-description">${p.Description}</section>
      <hr class="hr">`;
  }

  renderProjectByYear(projects) {
    return projects.map((p) => `${this.renderProject(p)}`).join(" ");
  }

  render(projectMap) {
    let resultantHTML = `<section class="filter-result">Showing ${this.projectCount} from ${window.projects.length} projects with ${this.skillCount} from ${this.totalSkillCount} skills.</section>`;

    projectMap.forEach((projects, year) => {
      resultantHTML += `
        <section class="year-title">${year}</section>
        ${this.renderProjectByYear(projects)}`;
    });

    this.innerHTML = resultantHTML;
  }
}


class MyContact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="contact" class="contact">
        ${window.contact
          .map(
            (section) => `
          <p style="padding: 6px 0 0 0;">${section.greeting}</p>
          <p>${section.message}</p>
          <ul class="contact-ul">
            ${section.links
              .map(
                (link) => `
              <li>
                <a target="_blank" href="${link.url}">${link.text}</a>
              </li>
            `
              )
              .join("")}
          </ul>
          ${section.closing}
        `
          )
          .join("")}
      </div>`;
  }
}

class MyFooter extends HTMLElement {
  static observedAttributes = [
    "showHR",
    "showTop",
    "showCopyright",
    "showLastUpdated",
  ];

  constructor() {
    super();
    this.lastUpdated = "July 4th, 2025";
    this.showHR = this.hasAttribute("showHR");
    this.showTop = this.hasAttribute("showTop");
    this.showCopyright = this.hasAttribute("showCopyright");
    this.showLastUpdated = this.hasAttribute("showLastUpdated");
  }

  connectedCallback() {
    const showTop = `<div class="footer-text"><a href="#">Go Top ↑</a></div>`;
    const lastUpdated = `<div class="footer-text">Last Updated ${this.lastUpdated}</div>`;
    const copyright = `<div class="footer-text">™ and © Madhusha Marur. All Rights Reserved.</div>`;

    this.innerHTML = `
      ${this.showHR ? `<hr>` : ``}
        <div class="footer-container">
          ${this.showCopyright ? copyright : ``}
          ${this.showTop ? showTop : ``}
          ${this.showLastUpdated ? lastUpdated : ``}
        </div>`;
  }
}

customElements.define("my-header", MyHeader);
customElements.define("my-home", MyHome);
customElements.define("my-experience", MyExperience);
customElements.define("my-education", MyEducation);
customElements.define("my-filter", MyFilter);
customElements.define("my-project", MyProject);
customElements.define("my-contact", MyContact);
customElements.define("my-footer", MyFooter);
