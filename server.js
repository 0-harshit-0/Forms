let express = require("express");
let app = new express();


app.use(express.static("views"));
app.use(express.static("src"));
app.use(express.static("assets"));

app.get("/", (req, res)=> {
	res.sendFile("./index.html");
})

app.listen(8080);