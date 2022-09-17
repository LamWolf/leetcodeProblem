window.a = 1;

obja = {
    a: 'a',
    fn: function() {
        console.log(this.a);
    }
}

objb = {
    a: 'b',
    fn: function() {
        console.log(this.a);
        return function() {
            console.log(this.a);
        }
    }
}

const fna = obja.fn;
const fnb = objb.fn();
obja.fn();
objb.fn()();
fna();
fnb();