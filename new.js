var fs = require('fs');
var path = require('path');
const testFolder = './folder';

var arr=[];

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {

    var extension = file.substr(-4);
    if(extension ===".jpg")
        {arr.push(file)}
       
      
    });
    console.log(arr);

    console.log( "LENGTH OF ARRAY IS: " +arr.length);
  });
  




