//함수 선언
//move element
const elem = document.getElementById('animate');
let pos = 0;
let id;
function moveElem(){
  id = setInterval(frame,10);//setInterval : 재귀함수와 같은 반복 되는 로직을 구현할 수 있다.
  function frame() {// element 작동 구현
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';
    pos++
  }
}

function stopElem(){
  clearInterval(id);
}
