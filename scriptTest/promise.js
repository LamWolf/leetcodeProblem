// async function s1() {
//     await s2();
//     console.log('s1');
//     s4();
// }

// async function s2() {
//     console.log('s2');
// }

// s1();

// const s3 = new Promise((res, rej) => {
//     console.log('promise');
//     res();
// })

// s3.then(() => {
//     console.log('s3');
// }).then(() => {
//     console.log('s31');
// })

// function s4 () {
//     console.log('s4');
// }

Promise.reject(0).catch(e => console.log(e)).catch(e => console.log(e));

console.log('end');