export type Portfolio = {
  title: string;
  skills: string[];
  explaintions: string[];
  userLink: string;
  githubLink: string;
  imageSrc: string;
  imageAlt: string;
};

export type Project = {
  image: string;
  alt: string;
  title: string;
};

export type Skill = {
  name: string;
  image: string;
  alt: string;
  color: string;
  details: string[];
};

const allTexts = {
  Persian: {
    //resumeLink
    resumeFileName: "Matin_Valizadeh_Frontend_Resume.pdf",

    //LanguageSelect
    languageText: "زبان وبسایت",
    persian: "فارسی",
    english: "انگلیسی",

    //AboutMe
    aboutMeText:
      "من فرانت‌اند دولوپر هستم و عاشق ساخت رابط‌های کاربری جذاب و کاربردی. پروژه‌های تمرینی زیادی انجام دادم و می‌تونم هم به صورت مستقل و هم در تیم روی پروژه‌ها کار کنم. همیشه دنبال یادگیری و پیشرفت هستم و هدفم اینه که اول در فرانت‌اند حرفه‌ای بشم و بعد مهارت‌های بک‌اند رو هم یاد بگیرم تا پروژه‌ها رو از صفر تا صد خودم مدیریت کنم.",
    aboutMeSecondText:
      "هدف فعلی من علاوه بر کسب درآمد، کسب تجربه و تخصص بیشتر است.",
    aboutMeH2Text: "درباره من",
    resumeDownloadText: "دانلود رزومه",

    //FirstView
    fullName: "متین ولی زاده",
    jobTitle: "برنامه‌نویسی فرانت‌اند (React)",
    profileImageAlt: "تصویر پروفایل متین ولی زاده",
    portfoliosButtonText: "نمونه‌کارها",

    //Footer
    footerTitle: "آیا قصد استخدام من را دارید؟",
    footerDescription:
      "اگر به هر شکلی احساس کردید من میتوانم برای کسب و کار یا تیم شما مفید باشم، در برقراری ارتباط راحت و بدون تعارف عمل کنید :)",
    email: "Matinvlz77@gmail.com",
    phoneNumber: "09019913544",
    phoneNumberLabel: "شماره تماس:",
    emailLabel: "ایمیل: ",

    //portfolios
    portfolios: [
      {
        title: "وب سایت فروشگاهی لوازم ورزشی",
        skills: [
          "React",
          "HTML",
          "CSS",
          "TypeScript",
          "MUI",
          "React-router-dom",
        ],
        explaintions: [
          "طراحی واکنش‌گرا با MUI و React",
          "مدیریت سبد خرید و علاقه‌مندی‌ها با useState و useEffect",
          "سیستم لاگین با ذخیره‌سازی در LocalStorage",
          "فیلتر محصولات بر اساس نوع و قیمت",
          "کپی لینک و ناوبری بین صفحات با React Router",
          "کدنویسی تایپ‌سیف با TypeScript",
        ],
        userLink: "#",
        githubLink: "https://github.com/Fitland-team/fitland-shop.git",
        imageSrc: "fitland.png",
        imageAlt: "sports equipment e-commerce website",
      },

      {
        title: "اپلیکیشن اب و هوا",
        skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind", "Axius"],
        explaintions: [
          "دریافت داده‌های آب‌وهوا با Axios از API",
          "مدیریت وضعیت شهر و دما با useState و useEffect",
          "رندر داده‌ها با map و نمایش جزئیات هر شهر",
          "طراحی ریسپانسیو با Tailwind برای موبایل و دسکتاپ",
        ],
        userLink: "https://matinvalizadeh.github.io/weather-app/",
        githubLink: "https://github.com/matinvalizadeh/weather-app.git",
        imageSrc: "weather-app.png",
        imageAlt: "security theme login page",
      },

      {
        title: "لندینگ پیج zerotocode",
        skills: [
          "React",
          "Javascript",
          "HTML",
          "CSS",
          "Tailwind",
          "Framer-motion",
        ],
        explaintions: [
          "طراحی لندینگ پیج شرکتی با React و Tailwind",
          "استفاده از Framer Motion برای انیمیشن‌های روان",
          "چیدمان با Grid و FlexBox در CSS",
        ],
        userLink: "https://matinvalizadeh.github.io/zerotocode/",
        githubLink: "https://github.com/matinvalizadeh/zerotocode.git",
        imageSrc: "zerotocode.png",
        imageAlt: "portfolio-website for Farsahd Arbab",
      },
      {
        title: "وب‌سایت پورتفولیوی معرفی و نمونه کار ها",
        skills: [
          "React",
          "TypeScript",
          "Tailwind",
          "Framer Motion",
          "Ant Design",
        ],
        explaintions: [
          "ساخت وب‌سایت پورتفولیو واکنش‌گرا با React و Tailwind",
          "افزودن انیمیشن‌های روان با Framer Motion",
          "پشتیبانی از زبان‌های فارسی و انگلیسی با Zustand",
        ],
        userLink: "https://matinvalizadeh.github.io/Portfolio/",
        githubLink: "https://github.com/matinvalizadeh/Portfolio.git",
        imageSrc: "portfolio.png",
        imageAlt: "personal-portfolio website of Matin Valizadeh",
      },
    ] as Portfolio[],
    portfoliosTitle: "نمونه‌کارها",
    seeInGithubText: "مشاهده در گیت‌هاب",

    //skills
    skillTitle: "مهارت‌ها",
    skillsSubTitle: "تکنولوژی‌هایی که تجربه عملی فعالیت با آن‌ها را دارم",

    skills: [
      {
        name: "HTML",
        image: "HTML5.png",
        alt: "HTML",
        color: "#E44D26",
        details: [
          "Headings, paragraphs, spans",
          "Structure tags: head, body, section, header, footer",
          "Meta and title tags",
          "Tables and forms",
          "Media: img, video, iframe",
          "Links and lists",
          "Attributes: class, id, onclick, ...",
        ],
      },

      {
        name: "CSS",
        image: "css3.png",
        alt: "CSS",
        color: "#264DE4",
        details: [
          "Layouts: Flexbox, Grid",
          "Positioning: relative, absolute, fixed, sticky",
          "Responsive design with media queries",
          "Fonts and text styling",
          "Pseudo-classes & elements (:hover, ::before, ...)",
          "Spacing and borders",
          "Transitions and hover animations",
        ],
      },

      {
        name: "JavaScript",
        image: "JavaScript.png",
        alt: "JavaScript",
        color: "#D4B830",
        details: [
          "Data types and operators",
          "Conditions and loops",
          "Functions and arrow functions",
          "Array methods: map, filter, forEach",
          "DOM and events handling",
          "APIs: fetch, axios",
          "localStorage and pagination",
        ],
      },

      {
        name: "React",
        image: "React.png",
        alt: "React",
        color: "#61DBFB",
        details: [
          "Components and props",
          "Hooks: useState, useEffect, useRef",
          "JSX and map rendering",
          "React Router",
          "Reusable UI structure",
        ],
      },

      {
        name: "TypeScript",
        image: "TypeScript.png",
        alt: "TypeScript",
        color: "#2D79C7",
        details: [
          "Static typing and interfaces",
          "Type-safe functions",
          "Error prevention and debugging",
          "TypeScript with React",
        ],
      },

      {
        name: "TailwindCSS",
        image: "TailwindCSS.png",
        alt: "tailwindcss",
        color: "#16BECB",
        details: [
          "Setup and configuration",
          "Utility-first design system",
          "Flexbox and Grid layouts",
          "Typography and spacing",
          "Responsive classes and animations",
        ],
      },

      {
        name: "Git & Github",
        image: "git.png",
        alt: "Git",
        color: "#F05033",
        details: [
          "Version control basics",
          "Git commands: status, add, commit, push",
          "Working with branches",
          "Cloning and hosting projects",
          "GitHub Pages deployment",
        ],
      },

      {
        name: "اصول اولیه سئو",
        image: "Google.png",
        alt: "سئو و گوگل",
        color: "#31AA52",
        details: [
          "Semantic HTML and meta tags",
          "Alt text and optimized images",
          "Fast and mobile-friendly design",
          "Internal linking and clear structure",
          "Title tags and file naming",
          "Google tools: Search Console, Analytics, Hotjar",
        ],
      },
    ] as Skill[],

    notFoundSubTitle: "صفحه‌ای که دنبال آن میگردید پیدا نشد",
    notFoundButtonText: "بازگشت به خانه",
    notFoundButtonDestination: "/Persian/",
  },

  English: {
    //Resume Link
    resumeFileName: "Matin_Valizadeh_Frontend_Resume.pdf",
    //LanguageSelect
    languageText: "language",
    persian: "Persian",
    english: "English",

    //AboutMe
    aboutMeText:
      "Although I have completed several front-end practice projects, I have not yet had official experience working as a front-end developer in a company, and I am currently seeking an internship opportunity. My background in Backend and UI/UX design, as two supporting skills, helps me work more independently on projects. In 90% of cases, I rely on English resources for troubleshooting, research, and watching courses.",
    aboutMeSecondText:
      "My current goal, in addition to earning income, is to gain more experience and expertise.",
    aboutMeH2Text: "About Me",
    resumeDownloadText: "Download Resume",

    //FirstView
    fullName: "Matin Valizadeh",
    // jobTitle: "کارآموز برنامه‌نویسی فرانت‌اند(React)",
    jobTitle: "Front-End Developer (React)",
    profileImageAlt: "Matin Valizadeh profile picture",
    portfoliosButtonText: "Projects",

    //Footer
    footerTitle: "Do you intend to hire me?",
    footerDescription:
      "If in any way you feel that I can be useful for your business or team, feel free to reach out :)",
    email: "Matinvlz77@gmail.com",
    phoneNumber: "+989019913544",
    phoneNumberLabel: "Phone Number: ",
    emailLabel: "Email: ",

    //portfolios
    portfolios: [
      {
        title: "Sports Equipment E-Commerce Website",
        skills: [
          "React",
          "HTML",
          "CSS",
          "TypeScript",
          "MUI",
          "React Router DOM",
        ],
        explaintions: [
          "Responsive UI built with React and MUI",
          "Shopping cart and wishlist functionality",
          "Login system using LocalStorage",
          "Product filtering by category and price",
          "Product link copy and share feature",
          "Page navigation handled with React Router",
        ],
        userLink: "#",
        githubLink: "https://github.com/Fitland-team/fitland-shop.git",
        imageSrc: "fitland.png",
        imageAlt: "sports equipment e-commerce website",
      },

      {
        title: "Weather App",
        skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind", "Axios"],
        explaintions: [
          "Fetched weather data using Axios from a public API",
          "Managed city and temperature states with useState and useEffect",
          "Rendered weather details dynamically using map",
          "Responsive design built with Tailwind for mobile and desktop",
        ],
        userLink: "https://matinvalizadeh.github.io/weather-app/",
        githubLink: "https://github.com/matinvalizadeh/weather-app.git",
        imageSrc: "weather-app.png",
        imageAlt: "weather forecast application interface",
      },
      {
        title: "Zerotocode Landing Page",
        skills: [
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind",
          "Framer Motion",
        ],
        explaintions: [
          "Designed a company-style landing page using React and Tailwind",
          "Implemented smooth animations with Framer Motion",
          "Built responsive layouts using CSS Grid and Flexbox",
        ],
        userLink: "https://matinvalizadeh.github.io/zerotocode/",
        githubLink: "https://github.com/matinvalizadeh/zerotocode.git",
        imageSrc: "zerotocode.png",
        imageAlt: "Zerotocode landing page for developers",
      },
      {
        title: "Personal Portfolio Website",
        skills: [
          "React",
          "TypeScript",
          "Tailwind",
          "Framer Motion",
          "Ant Design",
        ],
        explaintions: [
          "Built a responsive portfolio website using React & Tailwind",
          "Added smooth animations with Framer Motion",
          "Integrated English & Persian support with Zustand",
        ],
        userLink: "https://matinvalizadeh.github.io/Portfolio/",
        githubLink: "https://github.com/matinvalizadeh/Portfolio.git",
        imageSrc: "portfolio.png",
        imageAlt: "personal portfolio website of Matin Valizadeh",
      },
    ] as Portfolio[],
    portfoliosTitle: "Projects",
    seeInGithubText: "See on GitHub",

    //skills
    skillsTitle: "Skills",
    skillsSubTitle: "Technologies I have hands-on experience with",
    skills: [
      {
        name: "HTML",
        image: "HTML5.png",
        alt: "HTML",
        color: "#E44D26",
        details: [
          "Headings, paragraphs, spans",
          "Semantic tags: section, header, footer",
          "Meta tags and titles",
          "Tables and forms",
          "Links, lists, and media (img, video)",
          "IDs, classes, and iframes",
          "Basic DOM events: onclick, onsubmit, onchange",
        ],
      },

      {
        name: "CSS",
        image: "css3.png",
        alt: "CSS",
        color: "#264DE4",
        details: [
          "Layouts with Flexbox and Grid",
          "Positioning and display properties",
          "Responsive design with media queries",
          "Typography and spacing",
          "CSS selectors and pseudo-classes",
          "Transitions and hover animations",
        ],
      },

      {
        name: "JavaScript",
        image: "JavaScript.png",
        alt: "JavaScript",
        color: "#D4B830",
        details: [
          "Variables, data types, and operators",
          "Functions and arrow functions",
          "Conditionals and loops",
          "Array methods: map, filter, forEach",
          "DOM manipulation and event handling",
          "APIs with fetch and Axios",
          "LocalStorage and pagination",
        ],
      },

      {
        name: "React",
        image: "React.png",
        alt: "React",
        color: "#61DBFB",
        details: [
          "Functional components and props",
          "Hooks: useState, useEffect, useRef",
          "JSX and component rendering with map",
          "Routing with React Router",
          "Project structure and reusability",
        ],
      },

      {
        name: "TypeScript",
        image: "TypeScript.png",
        alt: "TypeScript",
        color: "#2D79C7",
        details: [
          "Type safety for variables and functions",
          "Basic and special types",
          "Interfaces and custom types",
          "Error handling with TypeScript",
          "Integration with React components",
        ],
      },

      {
        name: "TailwindCSS",
        image: "TailwindCSS.png",
        alt: "tailwindcss",
        color: "#16BECB",
        details: [
          "Setup and project integration",
          "Layout with flex and grid utilities",
          "Spacing, positioning, and typography",
          "Responsive design with breakpoints",
          "Custom components with utility classes",
        ],
      },

      {
        name: "Git & Github",
        image: "git.png",
        alt: "Git",
        color: "#F05033",
        details: [
          "Version control with Git",
          "Branching and merging",
          "Committing and pushing to GitHub",
          "Cloning and deploying projects",
          "GitHub Pages setup",
        ],
      },

      {
        name: "SEO Basics",
        image: "Google.png",
        alt: "SEO and Google",
        color: "#31AA52",
        details: [
          "SEO-friendly URLs and meta tags",
          "Semantic HTML and alt text for images",
          "Fast loading and mobile-first design",
          "Internal linking and clear site structure",
          "robots.txt, sitemap, and analytics tools",
        ],
      },
    ] as Skill[],

    //Not Found Page
    notFoundSubTitle: "Sorry, the page you visited does not exist.",
    notFoundButtonText: "Back Home",
    notFoundButtonDestination: "/English/",
  },
};

export default allTexts;
