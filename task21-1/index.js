function inArray (val,arr){
    if(arr instanceof Array){
        if(arr.includes(val)){
            return true;
        }else return false;
    }else throw new Error('arr is not array');  
}
console.log(inArray('hello', ['svnj', 'hello', 'cvpoq']));
