module.exports = {
  name: 'Dmytro Snisarenko',
  title: 'Software Engineer',
  baseUrl: 'https://sneas.github.io/cv/',
  facts: {
    Residence: '<a href="https://goo.gl/maps/3JZUv4LVbG1bmtwN9"><i class="fa fa-home fact-icon"></i>Weesp, NL</a>',
    LinkedIn: '<a href="https://www.linkedin.com/in/sneas"><i class="fab fa-linkedin fact-icon"></i>sneas</a>',
    GitHub: '<a href="https://github.com/sneas"><i class="fab fa-github fact-icon"></i>sneas</a>',
    Mobile: '<a href="tel:+31645223717"><i class="fa fa-phone fact-icon"></i>+31645223717</a>',
    Email: '<a href="mailto:dmytro@sneas.io"><i class="fa fa-envelope fact-icon"></i>dmytro@sneas.io</a>',
  },
  skills: [
    ['Typescript', 100],
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
      title: 'Founder, Software Engineer',
      period: 'Nov 2021 - Present',
      skills: ['AWS', 'GCP', 'Terraform', 'NodeJS', 'Angular', 'OAuth', 'Browser Extensions', 'Typescript'],
      contents: `
[Vocably](https://vocably.pro) is a platform (extension and an app) that helps users to look up new words while surfing the web and study those words as flashcards on mobile.

As a founder and the only developer of Vocably, I'm responsible for:

* Developing backend with AWS/GCP/Lambda/API Gateway/Cognito
* Developing frontend/mobile experience (PWA) with Angular/Amplify
* Developing Chrome Extension with Vanilla/Web Components
* DevOps with CircleCI/Terraform/NodeJS/Zx/Bash
* Testing with Jest/Cypress/Endtest.io
* Market analysis, product marketing, cost and pricing analysis 
`
    },
    {
      company: 'Athyria',
      location: 'Seattle, USA',
      title: 'Software Engineer',
      period: 'Feb 2021 - Nov 2021',
      skills: ['AWS', 'Terraform', 'NodeJS', 'Angular', 'OAuth'],
      contents: `
Completed two projects for [John Deere](https://www.deere.com/).

1. A system that receives, stores, and processes operation metrics from different types of vehicles. Mainly AWS, Terraform, DynamoDB, Lambda
1. A sales tool that helps users to track, analyze, and predict various machinery metrics. Mainly Angular, OAuth, AWS, Terraform
`
    },
    {
      company: 'DAZN',
      location: 'Amsterdam, NL',
      title: 'Platform Engineer',
      period: 'Jul 2019 – Jan 2021',
      skills: ['AWS', 'Terraform', 'NodeJS', 'GraphQL', 'React', 'Mobx', 'Redux', 'Webpack', 'Jest'],
      review: {
        file: 'dazn.png',
        author: 'Cirpo Cinelly, Engineering Manager',
      },
      contents: `
High load media streaming [platform](https://dazn.com).

Started as a front-end engineer at My Account team. Later as a full-stack/dev-ops engineer for the Developer Experience team which provided development, deployment, and automation tools for more than 60 teams and 500 people across DAZN Engineering.

Responsibilities:

* Develop and maintain "My Account" section of the website (front end)
* Develop and maintain various deployment and development tools (full stack)
`,
    },
    {
      company: 'KLM Royal Dutch Airlines',
      location: 'Schiphol, NL',
      title: 'Senior Frontend Developer',
      period: 'Feb 2017 – Jun 2019',
      skills: ['Angular', 'Ionic', 'Redux', 'RxJS', 'Typescript', 'SASS', 'Webpack', 'Jest'],
      contents: `
Real time fault tolerant mobile application used by 330 KLM mechanics at Schiphol airport to perform between-the-flight aircraft maintenance.
The application displays up-to-date KLM's fleet schedule and towing information, helps team leaders to manage teams, and provides the scope of
work for mechanics.

Responsibilities:

* Incorporate business requirements into biweekly product increments

Achievements:

* Developed and launched product from the scratch
* Clean record of critical issues in 2018
* [Open source library](https://github.com/sneas/ionic-native-http-connection-backend) as a solution to common Ionic's problem. 1k weekly downloads in 2020
`,
      review: {
        file: 'klm.png',
        author: 'Önder Ceylan, Tech Lead',
      }
    },
    {
      company: 'Knab hypotheek',
      location: 'Amsterdam, NL',
      title: 'Senior Frontend Developer',
      period: 'Jun 2014 – Feb 2017',
      skills: ['AngularJS', 'Karma', 'Protractor', 'SASS', 'Gulp', 'Bootstrap', 'PHP', 'Symfony', 'MySQL', 'PHPUnit', 'AWS', 'Heroku'],
      contents: `
Core front end developer of a fully automated mortgage advice system.

Started as a backend developer and eventually transferred to the frontend.

Responsibilities:

* Developed new functionality
* Conducted job interviews

Achievements:

* Developed flexible registration process and 16 tools intended to gather detailed customer's legal and financial data
* [Component library](https://github.com/sneas/component-library) as a result of collaboration with the design team
* Introduced test driven development process with Karma and test automation with Protractor
`,
      review: {
        file: 'knab.png',
        author: 'Mark Sizoo, Tech Lead',
      }
    },
    {
      company: 'upwork.com',
      location: 'Mountain View, USA',
      title: 'Senior Frontend Developer',
      period: 'Oct 2012 – Jun 2014',
      skills: ['Javascript', 'jQuery', 'qUnit', 'Grunt', 'Selenium', 'Compass/SASS', 'PHP', 'Zend', 'Postgres'],
      contents: `
Core frontend developer of the world's #1 [freelance marketplace](https://www.upwork.com/).

Responsibilities:

* Developed A/B tested functionality for company's crucial business component: Job Posting Engine
* Conducted job interviews
* Facilitated onboarding process

Achievements:

* Developed and successfully launched job post engine: highly-configured job posting and rendering tool
* Introduced test driven development process into the organization's development flow 
`,
      review: {
        file: 'upwork.png',
        author: 'Sean Kane, Vice President of Engineering',
      }
    }
  ],
};
