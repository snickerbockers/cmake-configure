const core = require('@actions/core');
const { exec } = require('child_process');

// most @actions toolkit packages have async methods
async function run() {
  try {
      exec("cmake .", (err, stdout, stderr) => {
	  console.log("cmake configuration complete\n");
      }) ;
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
