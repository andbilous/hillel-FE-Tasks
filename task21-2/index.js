function pluck(obj, prop) {
    var res = [];
    res.forEach.call(obj, (el) => {
        res.push(el[prop]);
    });
    return res;
}

var characters = [{
        'name': 'barney',
        'age': 36
    },
    {
        'name': 'fred',
        'age': 40
    }
];

console.log(pluck(characters, 'name')); // ['barney', 'fred']