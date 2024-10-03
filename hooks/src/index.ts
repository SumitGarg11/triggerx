import express from "express"
const app = express();

// https://hooks/triggerx.com/hooks/catch/1789767/278972

app.post("/hooks/catch/:userId/:zapId", (req,res)=>{
    const userId  = req.params.userId;
    const zapId = req.params.zapId;
    // store in db a new trigger 

    // push in on to queue kafka/redis 

})
