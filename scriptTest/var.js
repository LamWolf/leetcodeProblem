var a = 0;
function b () {
    setTimeout(() => {
        var a = 2;
        console.log(a);

    }, 0)
}

function c() {
    const a = 3;
    console.log(a);
}
console.log(a);
b();
c();
console.log(a);
