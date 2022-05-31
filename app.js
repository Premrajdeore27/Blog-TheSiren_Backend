const express = require("express");
const port = process.env.PORT || 9000
const app = express();
const homeRouter = require("./routes/home.route")
const cors = require("cors")

app.use(cors())

app.use("/",homeRouter)


app.listen(port,function(){
    console.log(`server Running at port ${port}`)
})