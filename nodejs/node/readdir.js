var testFolder = '../data'; // ../data로 입력해야 정상출력
var fs = require('fs');
 
fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);
})