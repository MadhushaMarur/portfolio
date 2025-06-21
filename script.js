window.projects = [
  {
    Title: "test",
    Description:
      "<ul class='project-ul'>\
        <li>test</li>\
      </ul>",
    Year: "2021"
  },
];
class MyHeader extends HTMLElement {
  static observedAttributes = ["pageTitle", "pageSubTitle", "theme"];

  constructor() {
    super();
    this.theme = "light";
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
    const setInitialTheme = initialTheme === null ? "light" : initialTheme;

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
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <link rel="stylesheet" href="./style.css">
        <title>Muteeb Akram: ${this.pageTitle}</title>
      </head>

      <header>
        <div class="header-container">
          <h1 class="name">Muteeb Akram</h1>
          <div title="Toggle Theme" class="theme-icon">
            ${this.renderThemeIcon()}
          </div>
        </div>
        <hr>
        <center>
        <div class="row-header">
          <section id="#" class="row-header-item" style="padding-left: 0;" title="Home"><a href="./index.html">Home</a></section>
          <section id="#" class="row-header-item" title="Experience"><a href="./experience.html">Experience</a></section>
          <section id="#" class="row-header-item" title="Education"><a href="./education.html">Education</a></section>
          <section id="#" class="row-header-item" title="Projects"><a href="./projects.html">Projects</a></section>
          <section id="#" class="row-header-item" title="Publications"><a href="./publications.html">Publications</a></section>
          <section id="#" class="row-header-item" style="padding-right: 0;" title="Contact"><a href="./contact.html">Contact</a></section>
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
      <div class="page-content">
        <div class="profile-container">
          <img class="profile-image" src="./assets/profile-image.jpg" alt="Profile Picture of Madhusha">
          <div>
            <strong>Madhusha Marur</strong>
            <section class="small-pad" style="margin-top: 16px;">Software Engineer</section>
            <section class="small-pad">Kent State University</section>
            <section class="small-pad" style="margin-top: 20px;"><a href="mailto://mmarur22@gmail.com">mmarur22@gmail.com</a></section>
            <section class="small-pad">Atlanta, Georgia, USA</section>
          </div>
        </div>
        <div class="about-text">
          <h4>About Me</h4>
          <p>
            test </p>
        </div>
      </div>`;
  }
}

class MyEducation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="education">
        <div class="education-section" style="margin-top: -8px;">
          <div class="education-text">
            <section class="school-title" id="masters">Kent State University</section>
            <section class="degree-title">Master of Science, Computer Science</section>
            <section class="education-subtitle">
              Jan 2020 - May 2021
              <br>
              Kent, ohio, USA
              <br>
            </section>
          </div>
        </div>
      </div>`;
  }
}

class MyExperience extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div style="font-size: 14px;">
        <a href="#current">Current</a>&nbsp; |&nbsp;
        <a href="#internships">Internships</a>&nbsp; |&nbsp;
        <a href="#previous">Previous</a>&nbsp; |&nbsp;
        <a href="#research">Research</a>&nbsp; |&nbsp;
        <a href="#teaching">Teaching</a>
      </div>
      <br>
      <div id="current">
        <section class="experience-title">Current</section>
        <section class="company-title">University of Utah</section>
        <section class="role-title">Fall 2024: Graduate Research Assistant</section>
        <section class="advisor-name">Prof. P. (Saday) Sadayappan</section>
        <ul>
          <li>
            NASA Satellite Autonomous Storm Tracking and Control for Space Based Lightning Sensors.
          </li>
        </ul>
      </div>`;
  }
}

class MyFilter extends HTMLElement {
  constructor() {
    super();
    this.skills = [];
    this.years = [];
    this.titles = [];
    this.selectedSkills = [];
    this.selectedYears = [];
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
    this.years = this.projects.map((p) => p.Year);
    this.years = [...new Set(this.years)]; // Remove duplicates
    // this.years = this.years.filter((value, index)=> this.years.indexOf(value) === index); // Remove duplicates
    this.years.sort().reverse(); // Current year at the beginning.

    this.titles = this.projects.map((p) => p.Title);
    this.titles = [...new Set(this.titles)]; // Remove duplicates

    // this.professors = this.projects.map((p) => p.Professor);
    // this.professors = [...new Set(this.professors)]; // Remove duplicates

    this.skills = this.projects.map((p) => p.Skills).flat(1); // Convert 2D array to 1D array.
    this.skills = [...new Set(this.skills)]; // Remove duplicates
    this.skills.sort();
  }

  onFilterSelect() {
    let selectedYears = Array.from(
      document.getElementById("selectedYears").options
    )
      .filter((option) => option.selected)
      .map((option) => option.value);

    // console.log("this.selectedYears", selectedYears);
    this.selectedYears = selectedYears;

    let selectedSkills = Array.from(
      document.getElementById("selectedSkills").options
    )
      .filter((option) => option.selected)
      .map((option) => option.value);

    // console.log("this.selectedSkills", selectedSkills);
    this.selectedSkills = selectedSkills;

    let selectedTitles = Array.from(
      document.getElementById("selectedTitles").options
    )
      .filter((option) => option.selected)
      .map((option) => option.value);

    // console.log("this.selectedTitles", selectedTitles);
    this.selectedTitles = selectedTitles;

    // Prepare the projects to show with filters selected.
    // Start from all projects and filter one bye one.
    this.selectedProjects = this.projects;
    if (this.selectedYears.length) {
      this.selectedProjects = this.selectedProjects.filter((p) =>
        this.selectedYears.includes(p.Year)
      );
    }

    // console.log("this.selectedProjects", this.selectedProjects);
    if (this.selectedSkills.length) {
      this.selectedProjects = this.selectedProjects.filter((project) =>
        project.Skills.some((skill, _) => this.selectedSkills.includes(skill))
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
    const filterIcon = ``;
    // const filterIcon = `<svg class="filter-icon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 30 30" id="filter"><path fill="#111224" d="M17 11H4A1 1 0 0 1 4 9H17A1 1 0 0 1 17 11zM26 11H22a1 1 0 0 1 0-2h4A1 1 0 0 1 26 11z"></path><path fill="#111224" d="M19.5 13.5A3.5 3.5 0 1 1 23 10 3.5 3.5 0 0 1 19.5 13.5zm0-5A1.5 1.5 0 1 0 21 10 1.5 1.5 0 0 0 19.5 8.5zM26 21H13a1 1 0 0 1 0-2H26A1 1 0 0 1 26 21zM8 21H4a1 1 0 0 1 0-2H8A1 1 0 0 1 8 21z"></path><path fill="#111224" d="M10.5,23.5A3.5,3.5,0,1,1,14,20,3.5,3.5,0,0,1,10.5,23.5Zm0-5A1.5,1.5,0,1,0,12,20,1.5,1.5,0,0,0,10.5,18.5Z"></path></svg>`;

    let yearFilter = `<select id="selectedYears" placeholder="Select Year" txtSearch="Search Year" style="width: 20%" multiple multiselect-search="true" @click=${this.onFilterSelect}>`;
    yearFilter += this.years.map(
      (year) => `<option value="${year}">${year}</option>`
    );
    yearFilter += "</select>";

    let skillFilter = `<select id="selectedSkills" placeholder="Select Skills" txtSearch="Search Skills" style="width: 30%" multiple multiselect-search="true" @click=${this.onFilterSelect}>`;
    skillFilter += this.skills.map(
      (skill) => `<option value="${skill}">${skill}</option>`
    );
    skillFilter += "</select>";

    let titleFilter = `<select id="selectedTitles" placeholder="Select Projects" txtSearch="Search Projects" style="width: 35%" multiple multiselect-search="true" @click=${this.onFilterSelect}>`;
    titleFilter += this.titles.map(
      (skill) => `<option value="${skill}">${skill}</option>`
    );
    titleFilter += "</select>";

    filters += `<div class="filters-div">${filterIcon} ${titleFilter}&nbsp; ${skillFilter}&nbsp; ${yearFilter}</div>`;
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

class MyPublication extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="#publications">
        <ol>
          <li>
            <section class="paper-title">
              <a target="_blank" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9777199&isnumber=9776641">
                A Detail Survey on QUIC and its Impact on Network Data Transmission
              </a>
            </section>
            2022 6th International Conference on Trends in Electronics and Informatics (ICOEI), Tirunelveli,
            India, 2022, pp. 378-385, doi: 10.1109/ICOEI53556.2022.9777199.
            <section class="paper-authors">
              <i>Pratiksha Narasimha Nayak G; Nimisha Dey; Neha N; Malavika Hariprasad; Sandhya S; Minal Moharir;
                <strong>Muteeb Akram</strong>
              </i>
            </section>
          </li>
          <li>
            <section class="paper-title">
              <a target="_blank" href="https://www.irjet.net/archives/V7/i5/IRJET-V7I51018.pdf">
                Server Firmware Management using DMTF Redfish REST APIs
              </a>
            </section>
            May 2020, International Research Journal of Engineering and Technology (IRJET)
            <section class="paper-authors">
              <i><strong>Muteeb Akram Nawaz</strong>, Veena Gadad (Dept. of Computer Science and Engineering,
                R V College of Engineering, Karnataka, India)
              </i>
            </section>
            <section class="paper-subsection">
              [ <a href="https://www.dmtf.org/about/academicalliance#redfish">DMTF Redfish Recognition</a> ]
            </section>
          </li>
        </ol>
      </div>`;
  }
}

class MyContact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="contact" id="contact">
        <p style="padding: 6px 0 0 0;">Hello there!</p>
        <p>Feel free to reach out to me on any of the platforms.</p>
        <ul>
          <li><a target="_blank" href="mailto://mmarur22@gmail.com">mmarur22@gmail.com</a></li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/madhusha-marur/">linkedin.com/in/madhusha-marur</a>
          </li>
          <li><a target="_blank" href="https://github.com/MadhushaMarur">github.com/MadhushaMarur</a></li>
        </ul>
        <p>Thanks for stopping by.</p>
        <p>:wq</p>
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
    this.lastUpdated = "Oct 16, 2024";
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
customElements.define("my-publication", MyPublication);
customElements.define("my-filter", MyFilter);
customElements.define("my-project", MyProject);
customElements.define("my-contact", MyContact);
customElements.define("my-footer", MyFooter);
