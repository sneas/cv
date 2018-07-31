module.exports = {
  updated: new Date(),
  facts: {
    Residence: 'Weesp, Dichtershof, NL',
    LinkedIn: '<a href="https://www.linkedin.com/in/dmitry-s-74a4b830/">https://www.linkedin.com/in/dmitry-s-74a4b830/</a>',
    Email: '<a href="mailto:snisarenkodima@gmail.com">snisarenkodima@gmail.com</a>',
    Languages: 'English, Russian, Dutch on a primitive level',
  },
  positions: [
    {
      company: 'KLM Royal Dutch Airlines',
      title: 'Senior frontend developer',
      period: 'Feb 2017 - present',
      skills: ['Angular 5', 'Ionic 3', 'Redux', 'RxJS', 'Typescript', 'SASS', 'Webpack 2', 'Karma'],
      contents: `
Project: Real time mobile application used by KLM mechanics in Schiphol airport.
`
    },
    {
      company: 'Knab hypotheken',
      title: 'Senior frontend developer',
      period: 'Jun 2014 - Feb 2017',
      skills: ['AngularJS', 'Karma', 'Protractor', 'SASS', 'Gulp', 'Bootstrap', 'Heroku'],
      contents: `
Project: Registration flow, mortgage tools

Responsibilities: Maintain existing project and provide new tools and
components.

Main achievements: Backbone -> Angular 1.3 transition. Introduction of TDD with Karma
and E2E with Protractor. Angular 1.3 -> Angular 1.5 transition.
`
    },
    {
      company: 'upwork.com',
      title: 'Senior frontend developer',
      period: 'Oct 2012 - Jun 2014',
      skills: ['Javascript',   'jQuery',   'qUnit',   'GruntJS',   'Selenium',   'Compass/SASS',   'PHP'],
      contents: `
A high traffic website. The biggest player on freelance job market.

Responsibilities: Maintain existing application, developed new features and components.

Main achievements: Introduction of TDD process with PHPUnit and qUnit. Job post template engine.
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