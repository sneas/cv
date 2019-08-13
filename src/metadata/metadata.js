module.exports = {
  name: 'Dmitry Snisarenko',
  title: 'Frontend Developer',
  baseUrl: 'https://sneas.github.io/cv/',
  facts: {
    Residence: 'Weesp, NL',
    LinkedIn: '<a href="https://www.linkedin.com/in/dmitry-s-74a4b830/">https://www.linkedin.com/in/dmitry-s-74a4b830/</a>',
    Email: '<a href="mailto:snisarenkodima@gmail.com">snisarenkodima@gmail.com</a>',
    Languages: 'English, Russian, and a little bit of Dutch',
  },
  skills: [
    ['Javascript', '++++'],
    ['HTML5', '++++'],
    ['CSS3', '++++'],
    ['ES6', '++++'],
    ['Typescript', '++++'],
    ['React', '+++'],
    ['Redux', '++++'],
    ['Angular', '++++'],
    ['RxJS', '++++'],
    ['GraphQL', '+++'],
    ['REST', '++++'],
    ['oAuth', '++++'],
    ['Webpack', '+++'],
    ['Scrum', '++++'],
    ['CI/CD', '++++'],
    ['TDD', '++++'],
  ],
  positions: [
    {
      company: 'DAZN',
      location: 'Amsterdam',
      title: 'Frontend engineer',
      period: 'July 2019 – present',
      skills: ['React', 'Mobx', 'Webpack', 'Jest'],
      contents: `
Highloaded media streaming website.
`,
    },
    {
      company: 'KLM Royal Dutch Airlines',
      location: 'Schiphol',
      title: 'Senior frontend developer',
      period: 'Feb 2017 – June 2019',
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
* [Open source library](https://github.com/sneas/ionic-native-http-connection-backend) as a solution to common Ionic's problem. 450 weekly downloads in 2018
`,
      review: {
        file: 'klm.png',
        author: 'Önder Ceylan, Tech Lead',
      }
    },
    {
      company: 'Knab hypotheek',
      location: 'Amsterdam',
      title: 'Senior frontend developer',
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
      title: 'Senior frontend developer',
      period: 'Oct 2012 – Jun 2014',
      skills: ['Javascript', 'jQuery', 'qUnit', 'Grunt', 'Selenium', 'Compass/SASS', 'PHP', 'Zend', 'Postgres'],
      contents: `
Core frontend developer of the world's #1 freelance marketplace.

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
