const PirateController=require("../controllers/redbelt.controller")

module.exports=app=>{
    app.get("/",PirateController.test)
    app.get("/api/pirates",PirateController.allPirate)
    app.get("/api/pirates/:id",PirateController.onePirate)
    app.post("/api/pirates/add",PirateController.createPirate)
    app.put("/api/pirates/:id",PirateController.editPirate)
    app.delete("/api/pirates/:id",PirateController.deletePirate)
    
}