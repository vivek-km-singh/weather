const express=require("express");
const path=require('path');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT||8000;

// publlic static path
const static_path=(path.join(__dirname,"../public"));
const template_path =(path.join(__dirname,"../templates/views"));
const partials_path =(path.join(__dirname,"../templates/partials"));

app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));


// routing
app.get("",(req,res)=>{
    res.render("index")
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:"oops page not found try again letter" 
    });
});

app.listen(port,()=>{
    console.log(`listning to the port at ${port}`)
});

// const express=require("express");
// const path=require('path');
// const hbs=require('hbs');
// const app=express();
// const port= 8000;

// // publlic static path
// const static_path=path.join(__dirname,"../public");
// const template_path =path.join(__dirname,"../templates/views");
// const partials_path =path.join(__dirname,"../templates/partials");

// app.set("view engine","hbs");
// app.set("views",template_path);
// hbs.registerPartials(partials_path);

// app.use(express.static(static_path));


// // routing
// app.get("",(req,res)=>{
//     res.render("index")
// });

// app.get("/about",(req,res)=>{
//     res.render("about");
// });

// app.get("/weather",(req,res)=>{
//     res.render("welcome to the weather  vivek singh");
// });

// app.get("*",(req,res)=>{
//     res.render("404 error page oops");
// });
// app.listen(port,()=>{
//     console.log(`listning to the port at ${port}`)
// });
