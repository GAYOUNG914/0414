//함수 선언
//move element
let pos = 0;
let id;
function moveElem(){
  const elem = document.getElementById('animate');
  id = setInterval(frame,10);//0.01초마다 한번씩/ 재귀함수와 같은 반복 되는 로직을 구현할 수 있다.
  function frame() {// element 작동 구현
    elem.style.top = pos + 'px'; //css의 top 속성 가져온거임
    elem.style.left = pos + 'px';
    pos++
  }
}

function stopElem(){
  clearInterval(id);
}
