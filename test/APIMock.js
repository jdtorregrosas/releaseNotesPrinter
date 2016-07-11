'use strict'
var projectsSchema = require('../app/schemas/projectsSchema')

module.exports = {
  getUser: () => {
    return {
      username: 'tsailer'
    }
  },
  getProjects: () => {
    let projects = [
      {
        name: 'userService2.0',
        tags: [
          {
            name: 'release-3.0.0',
            date: '2016-06-07T11:36:43+00:00'
          },
          {
            name: 'release-2.0.0',
            date: '2016-06-02T11:36:43+00:00'
          }
        ]
      },
      {
        name: 'website',
        tags: []
      }
    ]
    return projectsSchema.validateProjects(projects)
  },
  getCommits: () => {
    return [
      {
        title: 'Add something new',
        body: '',
        author: 'tsailer',
        date: '2016-06-07T11:36:43+00:00'
      },
      {
        title: 'Add something new',
        body: '',
        author: 'tsailer',
        date: '2016-06-09T11:36:43+00:00'
      },
      {
        title: 'Fix something new',
        body: '',
        author: 'tsailer',
        date: '2016-06-08T11:36:43+00:00'
      },
      {
        title: 'Make something new',
        body: '',
        author: 'tsailer',
        date: '2016-06-07T11:36:43+00:00'
      },
      {
        title: 'Add something old',
        body: 'This and this\n and this \n - and this',
        author: 'ceggert',
        date: '2016-06-04T11:36:43+00:00'
      },
      {
        title: 'Fix something old',
        body: 'This and this\n and this \n - and this',
        author: 'ceggert',
        date: '2016-06-02T11:36:43+00:00'
      },
      {
        title: 'Remove something new',
        body: '',
        author: 'tsailer',
        date: '2016-06-01T11:36:43+00:00'
      }
    ]
  },
  getMergeRequests: () => {
    return [
      {
        title: 'Merge Hallo World into Master',
        link: 'http://gitlab.coliquio.de/merge-requests/1234',
        description: 'Added cool things\nRemoved cool things',
        author: 'tsailer',
        date: '2016-06-08T11:36:43+00:00'
      },
      {
        title: 'Merge Bye new World into Master',
        link: 'http://gitlab.coliquio.de/merge-requests/4321',
        description: 'Added cool things\nRemoved cool things',
        author: 'ceggert',
        date: '2016-06-03T11:36:43+00:00'
      },
      {
        title: 'My merge request',
        link: 'http://gitlab.coliquio.de/merge-requests/5678',
        description: 'Added cool things\nRemoved cool things',
        author: 'jtorregrosa',
        date: '2016-06-03T11:36:43+00:00'
      }
    ]
  },
  getError: () => {
    return {
      title: 'Error: Alles kaputt',
      description: 'Du hast alles falsh gemacht!!'
    }
  }
}
