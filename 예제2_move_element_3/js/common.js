//함수 선언
//move element
let pos = 0;
let elem = document.getElementsByClassName('box')[0];//let elem = document.getElementByClassName('box');//elem[0] 와 같음
let id = setInterval(moveFunc,10);

function moveFunc(){
  pos++;
  elem.style.top = pos + 'px';
  elem.style.left = pos + 'px';
}

function stopMove(){
  clearInterval(id);
}

function goMove(){
  id = setInterval(moveFunc,10);
}

// console.log(typeof(elem))//데이터 타임 확인
// console.log(elem[0])//element 가져오기
// console.log(elem[0].textContent)//element 텍스트 가져오기
// console.log(elem.length)//.box를 갖고 있는 div태그의 갯수
//
// for (var i = 0; i < elem.length; i++) {
//   console.log(elem[i].textContent)
// }
