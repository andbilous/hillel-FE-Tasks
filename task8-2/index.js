function swapNameValue(obj) {
    for (var name in obj) {
        obj[obj[name]] = name;
        delete obj.name;
        delete obj[obj[obj[name]]];
    }
    return obj;
}
var man = {
    name: 'mykola',
    age: 56
};
console.log(swapNameValue(man));