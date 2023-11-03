// // compare two json properties without order
function compare(obj1,obj2) {
    sorted1 = JSON.stringify(obj1);
    sorted2 = JSON.stringify(obj2 );

     return sorted1 === sorted2;
}
let obj1={
    "name":"person1",
    "age" :"5"
}
let obj2={
    "age":"5",
    "name":"person1"
}
console.log(compare(obj1,obj2));
// //answer *false*

// // 2use the rest countries API URL ANA DISPALY ALL countries and polulation 
 
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data);
    // console.log(result)
    for( var i=0;i<result.length;i++){
        console.log(result[i].flag )
    }
 
}


// // use the same rest countries  and print all countriesname,and region,sub-region and properties

var requests=new XMLHttpRequest();
requests.open("GET","https://restcountries.com/v3.1/all",true);
requests.send();
requests.onload=function(){
    var data =requests.response;
    var result = JSON.parse(data);
    // console.log(result)
    for( var i=0;i<result.length;i++){
        console.log(result[i].currencies)
        console.log(result[i].subregion)
        console.log(result[i].region)
    }

}
  




