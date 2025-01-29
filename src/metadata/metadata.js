module.exports = {
  name: 'Dmytro Snisarenko',
  title: 'Software Engineer',
  baseUrl: 'https://sneas.github.io/cv/',
  facts: {
    Residence: '<a href="https://goo.gl/maps/3JZUv4LVbG1bmtwN9"><i class="fa fa-home fact-icon"></i>Weesp, NL</a>',
    LinkedIn: '<a href="https://www.linkedin.com/in/sneas"><i class="fab fa-linkedin fact-icon"></i>sneas</a>',
    GitHub: '<a href="https://github.com/sneas"><i class="fab fa-github fact-icon"></i>sneas</a>',
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
      title: 'Software Engineer',
      period: 'Nov 2021 - Present',
      duration: '3 years',
      skills: ['AWS', 'GCP', 'Terraform', 'NodeJS', 'React Native', 'Angular', 'OAuth', 'Browser Extensions', 'Typescript'],
      contents: `
Independently developing an [open-source language learning platform](https://github.com/vocably/vocably-pro).
`
    },
    {
      company: 'Airfrance/KLM',
      location: 'Amstelveen, NL',
      title: 'Software Engineer, Contract',
      period: 'Nov 2022 - Nov 2024',
      duration: '2 years',
      skills: ['NodeJS', 'Typescript', 'CI/CD', 'GitHub Actions', 'Kubernetes', 'Angular', 'A/B Testing'],
      contents: `
 A software engineer for Airfrance and KLM web ticket sales and passenger check-in.
`
    },
    {
      company: 'Athyria',
      location: 'Seattle, USA',
      title: 'Software Engineer, Contract',
      period: 'Feb 2021 - Nov 2021',
      duration: '8 months',
      skills: ['AWS', 'Terraform', 'NodeJS', 'Angular', 'OAuth'],
      contents: `
Completed two boring internal projects for [John Deere](https://www.deere.com/). No-one needed nor loved those apps.
`
    },
    {
      company: 'DAZN',
      location: 'Amsterdam, NL',
      title: 'Platform Engineer',
      period: 'Jul 2019 – Jan 2021',
      duration: '1.5 years',
      skills: ['AWS', 'Terraform', 'NodeJS', 'GraphQL', 'React', 'Mobx', 'Redux', 'Webpack', 'Jest', 'Storybook'],
      review: {
        file: 'dazn.png',
        author: 'Cirpo Cinelly, Engineering Manager',
      },
      contents: `
DX engineer for a high-load [media streaming platform](https://dazn.com).
`,
    },
    {
      company: 'KLM Royal Dutch Airlines',
      location: 'Schiphol, NL',
      title: 'Senior Frontend Developer, Contract',
      period: 'Feb 2017 – Jun 2019',
      duration: '2.5 years',
      skills: ['Angular', 'Ionic', 'RxJS', 'NgRx', 'Typescript', 'SASS', 'Webpack', 'Jest'],
      contents: `
Bootstrapped, maintained, and passed over to another team an internal mobile app.

My 330 users (KLM mechanics at Schiphol) loved the app because it helped them to speed up on-the-ground aircraft maintenance.
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
      duration: '2.5 years',
      skills: ['AngularJS', 'Karma', 'Protractor', 'SASS', 'Gulp', 'Bootstrap', 'PHP', 'Symfony', 'MySQL', 'PHPUnit', 'AWS', 'Heroku'],
      contents: `
A developer for a mortgage calculator app — the app mostly loved by people who are into mortgage-calculating.
`,
      review: {
        file: 'knab.png',
        author: 'Mark Sizoo, Tech Lead',
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
Frontend developer in the Job Posting team of world's #1 [freelance marketplace](https://www.upwork.com/).
`,
      review: {
        file: 'upwork.png',
        author: 'Sean Kane, Vice President of Engineering',
      }
    }
  ],
};
