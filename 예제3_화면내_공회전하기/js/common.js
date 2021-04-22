let elem = document.getElementsByClassName('box')[0];
let xMove = 0;
let yMove = 0;
let xDirection = 1;// 1 일때 양수방향(증가) , 0 일때 음수방향(감소)
let yDirection = 1;
let xSpeed = 1;
let ySpeed = 1;
// let moveInterval = setInterval(move, 10);

function randomFunc(){
  return Math.trunc(Math.random()*10+1);
}


function move() {
  xMove = xMove + xSpeed*xDirection;
  yMove = yMove + ySpeed*yDirection;
  elem.style.left = xMove + 'px';
  elem.style.top = yMove + 'px';
  if( xMove > window.innerWidth-100 || xMove < 0 ){
    xDirection = xDirection*(-1);
    xSpeed = randomFunc();
  }
  if( yMove > window.innerHeight-100 || yMove < 0 ){
    yDirection = yDirection*(-1);
    ySpeed = randomFunc();
  }
}

// console.log(Math.trunc(Math.random()*10+1));
