const { normalize } = require("path/posix");

var member = ['egoing', 'k8805', 'hoya'];
console.log(member[1]); //k8805
var i = 0;
while(i < member.length){
    console.log('array loop', member[i]);
    i = i + 1;
}

var roles = {
    'programmer':'egoing',
    'designer':'k8805',
    'manager':'hoya'
}
console.log(roles.programmer); //egoing
console.log(roles['programmer']); //egoing

for(var n in roles){
    console.log('object => ', n, 'value => ', roles[n]);
}