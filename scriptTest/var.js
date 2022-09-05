var a = 0;
function b () {
    var a = 2;
    console.log(a);
    // setTimeout(() => {
    //     console.log(a);
    // }, 0)
}

function c() {
    var a = 3;
    console.log(a);
}

function d(z) {
    var a = 4;
    (function() {
        z();
    })();
}
function e() {
    console.log(a);
}
console.log(a);
b();
// c();
d(c);
e();
console.log(a);
