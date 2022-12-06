// a file that handles the Routes in the project 

var express = require("express")
var router = express.Router();
let controller = require("../controller")

// get api ...
router.get('/',(req,res) => {
    controller.projectController.retrieveProjects(req, res)
    // getProjects((err,result) => {
    //     if(err) {
    //         res.json({statusCode: 400, message: err})
    //     }
    //     else {
    //         res.json({statusCode: 200, message:"Success", data: result})
    //     }
    // })
})

// post api...
router.post('/',(req,res) => {
    controller.projectController.createProjects(req,res)
    // console.log("New Project added", req.body)
    // var newProject = req.body;
    // insertProjects(newProject,(err,result) => {
    //     if(err) {
    //         res.json({statusCode: 400, message: err})
    //     }
    //     else {
    //         res.json({statusCode: 200, message:"Project Successfully added", data: result})
    //     }
    // })
})

module.exports = router;