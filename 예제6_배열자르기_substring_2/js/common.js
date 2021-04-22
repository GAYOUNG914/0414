/*substring*/
let infoText = "javascript,html,css3,photoshop,xd";
let ahtml = '<h1>My Skill</h1>';
let str = [];
//str.push('');
str.push(infoText.substring(0,10));
str.push(infoText.substring(11,15));
str.push(infoText.substring(16,20));
str.push(infoText.substring(21,30));
str.push(infoText.substring(31,33));

console.log(str);

//for 구문 사용  unordered list 태그를 사용하여 .demo에 출력하세요.

ahtml += '<br><ul>';
for (var i = 0; i < str.length; i++ ){
  console.log(str[i]);
  ahtml += '<li>'+str[i]+'</li>'
}
ahtml += '</ul>';

document.getElementsByClassName('demo')[0].innerHTML = ahtml;
