let obj1 = {
    5: 3,
    'test': '4',
    'z': 'egweg',
    innerObj1: {
        1: 1,
        2: 2,
        3: 6,
        'ss': 'g'
    },
}

let obj2 = {
    '2': '5',
    calc: function () {
        let sum = 0;
        sum = Object.values(this).reduce((sum, elem) => {
            if (typeof elem === 'string') {
                return sum + 0;
            }
            if (typeof elem === 'object') {
                return sum + obj2.calc.call(elem);
            }
            return sum + elem;
        })
        return sum;
    }
}
console.log(obj2.calc.call(obj1));