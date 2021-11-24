let express = require("express");
let app = new express();
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:1234qwer@cluster0.gzwoo.mongodb.net/mydb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const collection = client.db("mydb").collection("temp");

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static("src"));
app.use(express.static("assets"));

app.get("/", (req, res)=> {
	res.sendFile(__dirname+"/views/index.html");
});

app.post("/submit", (req, res)=> {
	//console.log(req.body)
	res.sendFile(__dirname+"/views/submit.html");

	//+++mongo_here+++
	client.connect(async err => {
		var myobj = { name: req.body.fn, dob: req.body.dob, gender: req.body.gen };
		await collection.insertOne(myobj, function(err, res) {
			if (err) throw err;
			//console.log("1 document inserted");
			client.close();
		});
	});
});

app.listen(8080);