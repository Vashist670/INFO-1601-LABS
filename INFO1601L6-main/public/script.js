
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent)
console.log(navigator.platform);

console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url){
  window.location.assign(url);
}

window.onload = function(event){
   console.log("Page has loaded");
   
}

console.log(result.style);

result.style.backgroundColor = 'lightgrey';
console.log(result.getAttribute('id'));

result.removeAttribute('id');
result.setAttribute('id','result');

result.classList.add('content');
result.classList.remove('content');

let obj2 = myobj;

//obj2 and myobj are the same variable

obj2.name = "Shelly";

console.log(myobj.name);//Shelly

//if you need to create a new object and copy its values use Object.assign

let obj3 = {};
Object.assign(obj3, myobj);

obj3.name = 'Smith';

console.log(myobj.name, obj3.name);//Shelly, Smith

async function getData(url){
   try{
     let response = await fetch(url);//1. Send http request and get response
     let result = await response.json();//2. Get data from response
     drawTable(result);// 3. Do something with the data
  }catch(e){
      console.log(e);//catch and log any errors
  }
}
getData("https://api.openbrewerydb.org/breweries/search?query=harry")