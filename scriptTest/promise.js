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

// Promise.reject(0).catch(e => console.log(e)).catch(e => console.log(e));

// setTimeout(function(){
//     console.log(1);
// });
// new Promise(function(resolve){            
//     console.log(2);
//     resolve();
// }).then(function(){            
//     console.log(3);
// }).then(function(){
//     console.log(4)
// });         
// console.log(5);

// console.log('end');


setTimeout(()=>{
    new Promise(resolve =>{
        resolve();
    }).then(()=>{
        console.log('test');
    });
    console.log(4);
});
new Promise(resolve => {
    resolve();
    console.log(1)
}).then( () => {
    console.log(3);
    Promise.resolve().then(() => {
        console.log('before timeout');
    }).then(() => {
        Promise.resolve().then(() => {
          console.log('also before timeout')
        })
    })
})
console.log(2);