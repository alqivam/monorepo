module.exports = {
    apps: [
      {
        script: 'app.js',
        args: 'start',
        cwd: './backend/',
        name: 'Backend',
        watch: true
      },
      {
        script: 'server.js',
        args: 'start',
        cwd: './frontend/',
        name: 'Frontend',
        watch: true
      }
    ]
  }

