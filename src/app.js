const expresss=require("express");
const path=require("path");
const app=expresss();
const hbs=require("hbs");
const port= process.env.PORT || 8000;


const staticPath=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../src/templates/views");
const partials_path=path.join(__dirname,"../src/templates/partials");
app.set('view engine','hbs');

app.set('views',template_path);

hbs.registerPartials(partials_path);

app.use(expresss.static(staticPath));


app.get("/",(req,res) => {
    res.render('index');
});
app.get("/about",(req,res) => {
    res.render("about");
});
app.get("/weather",(req,res) => {
    res.render("weather");
});
app.get("*",(req,res) => {
    res.render("404eror");
});

app.listen(port,() => {
    console.log(`listening to port ${port}`);
});