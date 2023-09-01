const exp= require("express") //npm install express
const app = exp();
const cors=require("cors");
const bodyParser= require("body-parser");
const fu= require("express-fileupload");

const mongoose= require("mongoose")
mongoose.connect('mongodb+srv://ritesh_saha:r123456@cluster0.pmdmzxf.mongodb.net/gmitdb?retryWrites=true&w=majority')//npm install mongoose

const cat=require("./routes/Category");
const pr=require("./routes/Product");
const ar=require("./routes/Auth");

app.use(exp.static('public'))
app.use(cors());
app.use(fu());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Hello Express");
});

app.use("/pro",pr);
app.use("/cat",cat);
app.use("/auth",ar);


app.listen(2000);