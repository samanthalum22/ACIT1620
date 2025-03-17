//let dogName = "bobo";
//let dogWeight = 23;

//function bark(dogWeight, dogName) {
   // if (dogWeight > 20) {
  //      console.log(dogName + " says woof woof");
 //   }
  //  else {
  //      console.log(dogName + " says WOOF WOFF")
  //  }
//}

//bark(23,bobo);
//bark(17,bosco);
//bark(13,lady);
//bark(18,spot);

let x = 32;
let y = 44;
let radius =5;

let centerX = 0;
let centerY = 0;
let width = 600;
let height= 400;

function setup(width,height){
    centerX = width/2;
    centerY = height/2;
}

function computeDistance(x1,x2,y1,y2){
    let dx = x1 -x2;
    let dy = y1 - y2;
    let d2 = (dx * dx) + (dy + dy);
    let d = Math.sqrt(d2);
    return d;

}

function areaCircle(r){
    let area = Math.PI * r * r;
    return area;
}

setup(width,height);
let area = areaCircle(radius);
let distance = computeDistance(x,y, centerX, centerY);
alert("area: " + area);
alert("distance: " + distance);