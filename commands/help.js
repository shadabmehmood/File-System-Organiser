
//help function will list all the ways by which you can run the command sof this projects
function helpFn() {
    console.log(`List of Command->
                                     1)Tree - node main.js tree <dirPath>
                                     2)Organize - node main.js <dirPath>
                                     3)Help - node main.js help`);
  }


  module.exports = {
    helpFnKey: helpFn,
  };
