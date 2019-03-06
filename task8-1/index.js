var people = [
    {
        name: 'Anna',
        birth: 1990,
        sex:   'Female',
    },
    {
        name: 'Mia',
        birth: 1994,
        sex:   'Female',
},
    {
        name: 'Jack',
        birth: 1999,
        sex:   'Man',
    },
    {
        name: 'Lisa',
        birth: 1991,
        sex:   'Female',
    },
    {
        name: 'Max',
        birth: 1995,
        sex:   'Female',
    },
    {
        name: 'Peter',
        birth: 1988,
        sex:   'Man',
    },
];
function calcAverageAge(objArr){
    var result=0;
    for(var i=0;i<objArr.length;i++){
      result += parseInt(objArr[i].birth);
    }
    return Math.floor(result/objArr.length);
}
function findMostCommonSex(objArr){
    var msex,fsex=0;
 for(var i=0;i<objArr.length;i++){
        if(objArr[i].sex==="Man"){
            msex++;
        }else fsex++; 
    }
    if(msex===fsex){
        console.log('Equal number');
        return;
    }
    if(msex>fsex){
    console.log('There are more men');
    }  console.log('There are more women');
}
console.log(calcAverageAge(people));
findMostCommonSex(people);
