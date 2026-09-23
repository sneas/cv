module.exports = {
  name: 'Dima Sneas',
  title: 'Full-Stack Developer',
  baseUrl: 'https://sneas.github.io/cv/',
  facts: {
    Residence: '<a href="https://goo.gl/maps/3JZUv4LVbG1bmtwN9"><i class="fa fa-home fact-icon"></i>Weesp, NL</a>',
    Website: '<a href="https://sneas.io"><i class="fa fa-globe fact-icon"></i>sneas.io</a>',
    LinkedIn: '<a href="https://www.linkedin.com/in/sneas"><i class="fab fa-linkedin fact-icon"></i>sneas</a>',
    GitHub: '<a href="https://github.com/sneas"><i class="fab fa-github fact-icon"></i>sneas</a>',
    Email: '<a href="mailto:d@sneas.io"><i class="fa fa-envelope fact-icon"></i>d@sneas.io</a>',
    Mobile: '<a href="tel:+31645223717"><i class="fa fa-phone fact-icon"></i>+31645223717</a>',
  },
  skills: [
    ['TypeScript', 100],
    ['AWS', 75],
    ['HTML5', 100],
    ['CSS', 100],
    ['React', 100],
    ['Angular', 100],
    ['RxJS', 100],
    ['OAuth', 100],
    ['REST', 100],
    ['GraphQL', 75],
    ['Scrum', 100],
    ['CI/CD', 100],
    ['TDD', 100],
    ['Terraform', 100],
    ['NodeJS', 100],
    ['SQL', 100]
  ],
  positions: [
    {
      company: 'Vocably',
      location: 'Weesp, NL',
      title: 'Senior Full-Stack Developer, Founder',
      period: 'Nov 2021 - Present',
      duration: '5 years',
      skills: ['AWS', 'GCP', 'Terraform', 'NodeJS', 'React Native', 'Angular', 'OAuth', 'Browser Extensions', 'TypeScript'],
      contents: `
As the only founder and software engineer of a [language-learning platform](https://vocably.pro), I am fully responsible for the entire product lifecycle. From ideation to revenue generation including customer support, marketing, and GDPR compliance. The platform is growing slowly, but steadily without much babysitting on my side. The platform includes:

- AWS/GCP cost-optimized infrastructure that is running AI prompts and caching the results 
- iOS and Android apps created with React Native
- Web app created with Angular
- Browser extension created with Web Components
- Thousands of SEO-friendly landing pages created with Vanilla TypeScript

Users [love](https://docs.google.com/spreadsheets/d/15CfNa_Lp1HO5oZDPk4dofJP9cIJexlrnOXvvZ5dcaNo/edit?gid=0#gid=0) this product, and 25% of its growth is attributed to word of mouth.
`
    },
    {
      company: 'Air France/KLM',
      location: 'Amstelveen, NL',
      title: 'Senior Full-Stack Developer, Contract',
      period: 'Nov 2022 - Nov 2024',
      duration: '2 years',
      skills: ['NodeJS', 'TypeScript', 'CI/CD', 'GitHub Actions', 'Kubernetes', 'Angular', 'Azure', 'A/B Testing', 'Nx', 'GraphQL', 'Playwright'],
      contents: `
 A software/DevOps engineer for Air France and KLM. If you've purchased tickets with KLM or Air France since 2022, you've encountered my code. The system I maintained (as part of a team, of course) generates approximately €1 billion each month.
 
My responsibilities at Air France/KLM included maintaining and developing the following:

- Codebase for airfrance.fr, klm.com, and ~180 regional domains (Angular, Nx, Apollo)
- Codebase for the frontend and backend servers (NodeJS, GraphQL, Express, Redis, Kubernetes, Azure)
- Codebase for microservices participating in passenger checkout (NodeJS, MongoDB -> CosmosDB, Kubernetes, Azure)
- CI/CD pipelines (GitHub Actions, Nx, Docker, Playwright, Load Testing with K6)
- A/B testing platform and experimentation (Optimizely)
`,
      review: {
        file: 'klm-transversal.png',
        author: 'Sander Verweij, Product Owner',
      },
    },
    {
      company: 'DAZN',
      location: 'Amsterdam, NL',
      title: 'Full-Stack Developer',
      period: 'Jul 2019 – Jan 2021',
      duration: '1.5 years',
      skills: ['AWS', 'Terraform', 'NodeJS', 'Next.JS', 'GraphQL', 'React', 'Mobx', 'Redux', 'Tailwind', 'Webpack', 'Jest', 'Storybook'],
      review: {
        file: 'dazn.png',
        author: 'Cirpo Cinelly, Engineering Manager',
      },
      contents: `
DX engineer for [DAZN](https://dazn.com) - a leading sports streaming platform.
`,
    },
    {
      company: 'KLM Royal Dutch Airlines',
      location: 'Schiphol, NL',
      title: 'Senior Frontend Developer, Contract',
      period: 'Feb 2017 – Jun 2019',
      duration: '2.5 years',
      skills: ['Angular', 'Ionic', 'RxJS', 'NgRx', 'TypeScript', 'NodeJS', 'NestJS', 'SASS', 'Webpack', 'Jest'],
      contents: `
Bootstrapped, maintained, and passed over to another team an internal mobile app.

My users (KLM mechanics at Schiphol) loved the app, and two of my managers referred me for another contract between 2022 and 2024 (see above).
`,
      review: {
        file: 'klm.png',
        author: 'Önder Ceylan, Tech Lead',
      }
    },
    {
      company: 'upwork.com',
      location: 'Mountain View, USA',
      title: 'Senior Frontend Developer, Contract',
      period: 'Oct 2012 – Jun 2014',
      duration: '1.8 years',
      skills: ['Javascript', 'jQuery', 'qUnit', 'Grunt', 'Selenium', 'Compass/SASS', 'PHP', 'Zend', 'Postgres'],
      contents: `
I helped the biggest freelance marketplace, [Upwork](https://www.upwork.com/), to build and perfect the Job Posting part of their website.
`,
      review: {
        file: 'upwork.png',
        author: 'Sean Kane, Vice President of Engineering',
      }
    }
  ],
};
