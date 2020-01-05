module.exports = {
  apps : [{
    name: 'server-h',
    script: './index.js'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-13-58-28-21.us-east-2.compute.amazonaws.com',
      key : '~/.ssh/g.pem',
      ref  : 'origin/master',
      repo : 'https://github.com/reperez120/server-h.git',
      path : '/home/ubuntu/server-j',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
