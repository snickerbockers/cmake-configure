const core = require('@actions/core');
const { exec } = require('child_process');

// most @actions toolkit packages have async methods
async function run() {
  try {
      const generator = core.getInput('generator');
      var genstr = '';
      if (generator != null && !(generator == '')) {
	  console.log('requested cmake generator is ${generator}');
	  genstr = '-G ${generator}'
      } else {
	  console.log('using default cmake generator');
      }
      exec("cmake ${genstr} .", (err, stdout, stderr) => {
	  console.log("cmake configuration complete\n");
      }) ;
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
