const fs = require('fs')
const path= require('path')
let input = process.argv.slice(2) //array for command line input
console.log(input)

let command=input[0]


switch(command){
    case 'tree' :
        console.log('Tree Implemneted')
        break;
    case 'organize' :
        console.log('Organise Implemented')
        break;
    case 'help' :
        helpFn()
        break; 
    default :
        console.log('Invalid Command')
        break;
}
//help function will list all the ways by which you can run the command sof this projects
function helpFn(){
    console.log(`List of Command->
                                   1)Tree - node Fo.js tree <dirPath>
                                   2)Organize - node Fo.js <dirPath>
                                   3)Help - node Fo.js help`)
}


// Organize Function will organize all your target folder's files in a different folders acc to their extensions

function organiseFn(dirPath){
    // we need a directory path as parameter
    let destpath
    if(dirPath==undefined){
        console.log('Please Enter A valid Directory Path')
        return
        // check whether directory path is passed or not and if not simply return

    }
    let doesExist= fs.existsSync(dirPath)

    // this doesExist willw tell target Folder Exists or not



    if(doesExist==true){
        destpath = path.join(dirPath, 'Organised_Files')  // created a path for Organised Files folder

        
// check whether in the given destPath does a folder exist with same name and if does not make a folder
        if(fs.existsSync(destPath)==flase){
            fs.mkdirSync(destpath)
        }
        else{
            console.log('Folder Already Exists')
        }   
        
        
        // D:\Batches\FJP-4\testFolder\organized_files- ready to create folder here
    }

}

