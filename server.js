const path = require("path");
const express = require("express");
const socketio = require("socket.io");
const port = 3000 || process.env.PORT;
const app = express();
let http = require("http").createServer(app);
//const server = http.createServer(app);
const io = socketio(http);
var cors = require("cors");
let projectRoutes = require("./routes/projectRoutes");

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/api/projects', projectRoutes)


io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
    setInterval(() => {
      socket.emit("number", parseInt(Math.random() * 10));
    }, 1000);
  });

// // insert project...
// const insertProjects = (project,callback) => {
//     projectCollection.insert(project,callback);
// }

// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }

// const createColllection = (collectionName) => {
//     client.connect((err,db) => {
//         projectCollection = client.db().collection(collectionName);
//         if(!err) {
//             console.log('MongoDB Connected')
//         }
//         else {
//             console.log("DB Error: ", err);
//             process.exit(1);
//         }
//     })
// }

// const cardList = [
//     {
//         title: "Kitten 2",
//         image: "images/suki2.jpg",
//         link: "About Suki",
//         desciption: "Demo desciption about Suki"
//     },
//     {
//         title: "Kitten 3",
//         image: "images/suki3.png",
//         link: "About Suki",
//         desciption: "Demo desciption about Suki"
//     }
// ]

// app.get('/api/projects',(req,res) => {
//     getProjects((err,result) => {
//         if(err) {
//             res.json({statusCode: 400, message: err})
//         }
//         else {
//             res.json({statusCode: 200, message:"Success", data: result})
//         }
//     })
// })

// // post api....
// app.post('/api/projects',(req,res) => {
//     console.log("New Project added", req.body)
//     var newProject = req.body;
//     insertProjects(newProject,(err,result) => {
//         if(err) {
//             res.json({statusCode: 400, message: err})
//         }
//         else {
//             res.json({statusCode: 200, message:"Project Successfully added", data: result})
//         }
//     })
// })

http.listen(port,()=>{
    console.log("App listening to http://localhost:"+port)
    //createColllection("Pets")
})

