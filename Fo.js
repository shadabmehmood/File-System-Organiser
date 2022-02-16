const fs = require("fs");
const path = require("path");
let input = process.argv.slice(2); //array for command line input
//console.log(input);

let command = input[0];

let types = {
  media: ["mp4", "mkv", "mp3", "mp4", "jpg"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

switch (command) {
  case "tree":
    console.log("Tree Implemneted");
    break;
  case "organize":
    organiseFn(input[1]);
    break;
  case "help":
    helpFn();
    break;
  default:
    console.log("Invalid Command");
    break;
}
//help function will list all the ways by which you can run the command sof this projects
function helpFn() {
  console.log(`List of Command->
                                   1)Tree - node Fo.js tree <dirPath>
                                   2)Organize - node Fo.js <dirPath>
                                   3)Help - node Fo.js help`);
}

// Organize Function will organize all your target folder's files in a different folders acc to their extensions

function organiseFn(dirPath) {
  // we need a directory path as parameter
  let destpath;
  if (dirPath == undefined) {
    console.log("Please Enter A valid Directory Path");
    return;
    // check whether directory path is passed or not and if not simply return
  }
  let doesExist = fs.existsSync(dirPath);

  // this doesExist willwtell target Folder Exists or not

  if (doesExist == true) {
    destpath = path.join(dirPath, "Organised_Files"); // created a path for Organised Files folder

    // check whether in the given destPath does a folder exist with same name and if does not make a folder
    if (fs.existsSync(destpath) == false) {
      fs.mkdirSync(destpath);
    } else {
      console.log("Folder Already Exists");
    }

    // D:\Batches\FJP-4\testFolder\organized_files- ready to create folder here
    organizeHelper(dirPath, destpath);
  }
}

function organizeHelper(src, dest) {
  let childNames = fs.readdirSync(src);

  for (let i = 0; i < childNames.length; i++) {
    let childAdresse = path.join(src, childNames[i]);
    let isFile = fs.lstatSync(childAdresse).isFile();

    if (isFile == true) {
      let fileCategory = getCategory(childNames[i]);
      //console.log(childNames[i] + " belongs to " + fileCategory);
      sendFiles(childAdresse,dest, fileCategory)
    }

    
  }

  
}
function getCategory(FileName) {
  let ext = path.extname(FileName).slice(1);
  //extracted aextensions of taget file

  for (let key in types) {
    let cTypeArr = types[key];
    //took out all category type arrays here

    for (let i = 0; i < cTypeArr.length; i++) {
      if (ext == cTypeArr[i]) {
        return key;
      }
    }
  }
  return "others";
}


function sendFiles(srcFilePath, dest ,fileCategory){

    let catPath = path.join(dest, fileCategory);

    if (fs.existsSync(catPath) == false) {
        fs.mkdirSync(catPath);
      }

      let fileName = path.basename(srcFilePath);

  // took out the basename of all the files

  let destFilePath = path.join(catPath, fileName);

  fs.copyFileSync(srcFilePath, destFilePath);

  fs.unlinkSync(srcFilePath);

  console.log("Files Organized");
}


