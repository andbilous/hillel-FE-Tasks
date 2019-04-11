let xhr = new XMLHttpRequest();
function sendReq (url){
  xhr.open('GET',url,false);
  xhr.send();
  if(xhr.status!=200){
    console.log(xhr.status+' : '+ xhr.statusText);
  }else
return JSON.parse(xhr.responseText);
}
console.log([...sendReq('https://jsonplaceholder.typicode.com/users'),...sendReq('https://jsonplaceholder.typicode.com/posts/1/comments')]);



