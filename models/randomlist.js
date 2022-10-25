const axios = require('axios');
const {Allcategoriesquery}=require('./categorieslist');
var result=new Array();
async function random(){
    for(let category of Allcategoriesquery){
        const t=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=40`);
        const r=t.data.items;
        result.push(...r);
    }
}
random();
module.exports=result;

