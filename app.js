const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/kiranData", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connection succesful......'))
.catch((err) => console.log(err));

const myDataSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    ctype : String,
    author : String,
    date : {
        type : Date,
        default : Date.now
    } 
})


const MyModel = new mongoose.model("MyModel",myDataSchema);

const createDocument = async () =>{

        try{
            const myNewData = new MyModel({
                name : "Express",
                ctype : "Back end ",
                author : "kiran",
                
            })
            
            const result = await myNewData.save();
            console.log(result);

        }catch(err){
            console.log(err);
        }
    
    
}

createDocument();
