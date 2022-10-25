const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const axios = require('axios')
const {categoriesdata,Allcategories,Allcategoriesquery}=require('./models/categorieslist');
const list = require('./models/randomlist');
const randomlist=()=>{
    var arr = [];
    while(arr.length < 40){
        var r = Math.floor(Math.random() * list.length) + 1;
        if(arr.indexOf(r) === -1) arr.push(list[r]);
    }
    return arr;
}


const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')))

app.listen(3000,async ()=>{
    
    console.log('Serving on port 3000');
})
const resp=new Array();

app.get('/',async (req,res)=>{
    let i=0;
    for(let category of categoriesdata){
    const resd=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=40`);
    resp[i]=resd.data.items;
    i++;
}
    res.render('home',{resp,categoriesdata});
})

app.get('/categories',async(req,res)=>{
    res.render('categories',{Allcategories,Allcategoriesquery});
})

app.get(`/categories/:category&&:categoryvalue`,async(req,res)=>{
    const {category,categoryvalue}=req.params;
    const resd=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=40`);
    const resdd=resd.data.items;
    res.render('show',{categoryvalue,resdd});
})

app.get('/:type',async(req,res)=>{
    const {type}=req.params;
    res.render('show',{categoryvalue:type,resdd:randomlist()});
})

app.get('/search/:category',async(req,res)=>{
    const {category}=req.params;
    const resd=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${category}&maxResults=40`);
    const resdd=resd.data.items;
    res.render('searchshow',{categoryvalue:category,resdd})
})

app.get('')