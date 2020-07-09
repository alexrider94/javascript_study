var a = 8;
var b = new Number(8);

//문자열을 숫자로 변경해주는 용도로 사용될 수 있다.
var c = new Number("123");


// 값을 비교하는 동등연산자 로 판단하고 true
console.log(a == b);
// 서로 다른 객체로 판단하여 false
console.log(a === b);

//문자열을 파싱하여 숫자부분을 정수 형태로 반환.
//문자열이 여러개 존재하면 첫번째 숫자만 반환.
console.log(Number.parseInt("7.1"));

//Number 객체 내장 라이브러리.
console.log(Number.prototype.toExponential(2));
console.log(1.3435.toPrecision(3));
console.log(3.47.toFixed(1));

