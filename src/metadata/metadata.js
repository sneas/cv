module.exports = {
  updated: new Date(),
  pdfFileName: 'dmitry-snisarenko.frontend-developer.pdf',
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
      company: 'KLM Royal Dutch Airlines',
      title: 'Senior frontend developer',
      period: 'Feb 2017 - present',
      skills: ['Angular', 'Ionic', 'Redux', 'RxJS', 'Typescript', 'SASS', 'Webpack', 'Karma'],
      contents: `
Project: Real time mobile application used by KLM mechanics in Schiphol airport.
`
    },
    {
      company: 'Knab hypotheek (ex. eyeOpen.nl)',
      title: 'Senior frontend developer',
      period: 'Jun 2014 - Feb 2017',
      skills: ['AngularJS', 'Karma', 'Protractor', 'SASS', 'Gulp', 'Bootstrap', 'PHP', 'Symfony', 'MySQL', 'PHPUnit', 'AWS', 'Heroku'],
      contents: `
Fully automated mortgage advice system. Flexible registration process and 16 tools intended to gather detailed customer's data.

Started as a backend developer and eventually transferred to the frontend.

Responsibilities:

* develop new functionality
* conduct job interviews

Achievements:

* [component library](https://github.com/sneas/component-library) as a result of collaboration with the design team
* introduced TDD process with Karma and test automation with Protractor
`
    },
    {
      company: 'upwork.com',
      title: 'Frontend developer',
      period: 'Oct 2012 - Jun 2014',
      skills: ['Javascript',   'jQuery',   'qUnit',   'Grunt',   'Selenium', 'Compass/SASS', 'PHP', 'Zend', 'Postgres'],
      contents: `
Core frontend developer of the world's #1 freelance marketplace.

Responsibilities:

* develop A/B tested functionality for company's crucial business component: Job Posting Engine
* conduct job interviews
* facilitate onboarding process

Achievements:

* developed and successfully launched job post engine: highly-configured job posting and rendering tool
* introduced TDD process into the company's development flow 
`
    },
  ],
  projects: [
    {
      name: 'Component Library',
      url: 'component-library',
      skills: ['ES6', 'NodeJS', 'SASS'],
      contents: `
The easiest way to create HTML component library for existing website.
`
    },
    {
      name: 'A solution to CORS problem of Ionic and WKWebView',
      url: 'ionic-native-http-connection-backend',
      skills: ['Angular 5', 'Typescript', 'RxJS', 'Cordova'],
      contents: `
This project's become quite popular since Ionic made WKWebView a default web container.
`
    },
    {
      name: 'Namespaced Bootstrap',
      url: 'bootstrap-sass-namespace',
      skills: ['Bootstrap', 'SASS'],
      contents: `
Non-conflicting bootstrap integration. Consider using this project if Bootstrap has to be applied partially. ie to particular div of a page.
`
    },
  ]
};
