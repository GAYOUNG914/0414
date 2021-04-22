/*substring*/
let num = "1234567890";
let infoText = "안녕하세요. 저는 대구에 사는 홍길동입니다. 나이는 20세입니다.";
/*substring으로 아래와 같은 console log 값을 출력하시오.*/
let age = infoText.substring(29,31);
let name = infoText.substring(17,20);
let local = infoText.substring(10,12);
console.log('나이: '+age+'세 , 이름: '+name+', 지역: '+local);
console.log(`나이: ${age}세 , 이름:${name} , 지역: ${local}`);
