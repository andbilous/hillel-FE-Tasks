let obj1={
    5:3,
    'test':'4',
    innerObj1:{
        1:1,
        2:2,
        3:6,
        'ss':'g'
    },
    calc:(obj)=>{
        return Object.values(obj);
    }

}
let obj2={
    '2':'5',
    
}
console.log(obj1.calc());