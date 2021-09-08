// 얕은복사 예제 (참조값의 복사)

console.log("***** 얕은복사 *****");

let admin = { a: 1, b: 2 };
let user = admin;

console.log(user); // user에 a, b 값이 리턴된다.

user.a = 200; // user.a 값에 200을 새로운 값을 넣는다.

console.log(admin);
console.log(user);  // user.a 값에 200을 참조해서 넣어두었기 때문에 내부 객체의 속성을 공유한다.

console.log(admin === user);

// ****** 혹은 (...) spread를 사용한 얕은복사 *******

const mk = { c: 1, d: 2 };
const one = { ...mk }; // 전개구문

console.log(one);  // one에 mk값을 넣는다.

one.c = 150;    // one.c 값에 150을 새로운 값을 넣는다.

console.log(mk);
console.log(one);  // mk에는 기존 값이 들어있다.(one은 변경된 값이 들어있다.)
// 이유 : spread연산자가 객체의 첫번째 껍데기를 가지고 복사한 것이 depth의 한단계 깊이여서 얕은복사로 해당된다.

console.log(mk === one);
