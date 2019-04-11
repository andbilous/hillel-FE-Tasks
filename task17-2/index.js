let response1=[];
let response2=[];
let xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/users',false);
xhr.send();
if(xhr.status!=200){
  console.log(xhr.status+' : '+ xhr.statusText);
}else
response1=JSON.parse(xhr.responseText);
xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1/comments',false);
xhr.send();
if(xhr.status!=200){
  console.log(xhr.status+' : '+ xhr.statusText);
}else
response2=JSON.parse(xhr.responseText);
console.log([...response1,...response2]);

