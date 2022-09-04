window.a = 1;

obja = {
    a: 'a',
    fn: () => {
        console.log(this.a);
    }
}

objb = {
    a: 'b',
    fn: () => {
        return () => {
            console.log(this.a);
        }
    }
}

const fna = obja.fn;
const fnb = objb.fn();
fna();
fnb();