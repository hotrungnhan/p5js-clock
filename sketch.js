let r;
let width = screen.availWidth;
let height = screen.availHeight;
console.log(height, width)
function setup() {

    (width > height) ? r = height / 4 : r = width / 4;
    createCanvas(width, height)
    frameRate(1);
}

function draw() {
    translate(width / 2, height / 2);
    let weigh = r / 50;
    background(0);
    let date = new Date();//"July 21, 1983 11:45:00");
    let secRad = map(date.getSeconds(), 0, 59, 0, TWO_PI);
    let minusRad = map(date.getMinutes(), 0, 59, 0, TWO_PI);
    let hourRad = map(date.getHours(), 0, 12, 0, TWO_PI);
    // console.log(date.getTimezoneOffset());
    // console.log(date);
    stroke(255, 75);
    strokeWeight(weigh);
    divingWatch();
    timeHand(secRad, 'red', r / 10);
    timeHand(minusRad, 'green', r / 5);
    timeHand(hourRad, 'blue', r / 2);
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(r / 5);
    text('My Clock', 0, 1.5 * r);
}
function timeHand(timeRad, color, length) {
    timeRad -= HALF_PI;
    stroke(color);
    let x = (r - length) * cos(timeRad);
    let y = (r - length) * sin(timeRad);
    line(0, 0, x, y);
    noStroke();
    fill(255);
    ellipse(0, 0, r / 10);
    // console.log(x, y);
}
function divingWatch() {
    noFill();
    stroke(255, 100)
    ellipse(0, 0, r * 2);
    fill(255, 90)
    for (let i = 1; i <= 12; i++) {
        let lengthLine;
        let lengthText;
        let textsize;
        let radx = cos(i * (PI / 6)-HALF_PI);
        let rady = sin(i * (PI / 6)-HALF_PI);
        if (i % 3 === 0) {
            lengthLine = r / 10;
            lengthText = r / 6;
            textsize = r / 8;
        }
        else {
            lengthLine = r / 20;
            lengthText = r / 8;
            textsize = r / 10;
        }
        let x = r * radx;
        let y = r * rady;
        let x1 = (r - lengthLine) * radx;
        let y1 = (r - lengthLine) * rady;
        let x2 = (r - lengthText) * radx;
        let y2 = (r - lengthText) * rady;
        stroke(255);
        line(x, y, x1, y1);
        stroke(r/10);
        textSize(textsize);
        text(`${i}`, x2, y2);
    }
}