"use strict";

const express = require("express");
//Did you call the express.Router() method?
//Your code here:
//

//Did you import the ShoppingList model?
//Your code here:
//

// GET all users
//Your code here:
//

// GET all items for a specific user
router.get("/users/:name/items", (req, res) => {
  //Here is a little help... You have the url for this route already set up
  //Your code here:
  //
});

// POST an item for a specific user
router.post("/users/:name/items", (req, res) => {
  //Your code here:
  //
});

// PUT (update) an item for a specific user by index
router.put("/users/:name/items/:index", (req, res) => {
  //Your code here:
  //
});

// DELETE an item for a specific user by index
router.delete("/users/:name/items/:index", (req, res) => {
  //Your code here:
  //
});

module.exports = router;
