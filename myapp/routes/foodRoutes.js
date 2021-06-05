const express = require("express");
const foodModel = require("../models/food");
const app = express();
// read operation
app.get("/foods", async (request, response) => {
  const foods = await foodModel.find({});

  try {
    response.send(foods);
  } catch (error) {
    response.status(500).send(error);
  }
});
// create operation
app.post("/food", async (request, response) => {
    const food = new foodModel(request.body);
  
    try {
      await food.save();
      response.send(food);
    } catch (error) {
      response.status(500).send(error);
    }
});
 // update operation 
app.patch("/food/:id", async (request, response) => {
    try {
      //The Mongoose query function .findByIdAndUpdate() 
      //takes the target’s id and the request data you want to replace it with.
      await foodModel.findByIdAndUpdate(request.params.id, request.body);
      await foodModel.save();
      response.send(food);
    } catch (error) {
      response.status(500).send(error);
    }
 });
// delete operation
app.delete("/food/:id", async (request, response) => {
    try {
      const food = await foodModel.findByIdAndDelete(request.params.id);
  
      if (!food) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
 });
module.exports = app;