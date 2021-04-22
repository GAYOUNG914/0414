/*substr*/
let nameStr = ['박길동','홍길동','이길동'];
let week = ['월','화','수','목','금','토','일'];
let str = "hello javascript!!";
let strNum = "20210414";
let numberText = "1234567890";
let nTnum_01 = numberText.substr(1,1);//2
console.log(numberText+','+nTnum_01);
let nTnum_02 = numberText.substr(2,1);//3
console.log(numberText+','+nTnum_02);
let res = str.substr(3);//매개변수가 하나일때는 해당 index에서 배열이 끝나는 index까지 모두 출력
let res1 = str.substr(3,str.length-1);
console.log(res+','+res1);

let num_01 = numberText.substr(1,1);
let num_02 = numberText.substr(4,1);
console.log("오늘은 "+week[2]+"요일 입니다.\n저는 "+nameStr[1]+" 입니다.\n나이는 "+num_01+num_02+"세입니다.");
