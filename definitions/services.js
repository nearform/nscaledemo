exports.root = {
  type: 'blank-container'
};

exports.web = {
  type: 'docker',
  override: {
    process: {
      type: 'process'
    }
  },
  specific: {
    repositoryUrl: 'git@github.com:nearform/nscaledemoweb.git',
    processBuild: 'npm install',
    execute: {
      args: '-p 8000:8000 -d',
      exec: '',
      process: 'npm start'
    }
  }
};
