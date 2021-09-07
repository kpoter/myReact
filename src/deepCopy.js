// 깊은복사 예제

console.log("****** 깊은복사 *****");

const admin = {a: {b:1, c:2}, d:45};
const user = {...admin, a:{...admin.a}};

console.log(user);

admin.a.b = 100;

console.log(admin);
console.log(user);

// 한단계 더 깊이 들어갈려면 (...)spread 연산자를 다시 사용하여 활용해야한다.

