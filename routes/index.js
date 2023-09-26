"use strict";

const express = require("express");
const router = express.Router();
const shoppingList = require("../models/shoppingList.js");

router.get("/users", (req, res) => {
  res.send(shoppingList.users());
});

router.get("/users/:name/items", (req, res) => {
  let nombre = req.params.name;
  let listWithProduct = shoppingList.list(nombre);
  res.send(listWithProduct);
});

router.post("/users/:name/items", (req, res) => {
  let nombre = req.params.name;
  let product = req.body.item;
  let addToUser = shoppingList.add(nombre, product);

  res.status(201).send(addToUser);
});

router.put("/users/:name/items/:index", (req, res) => {
  let nombre = req.params.name;
  let index = req.params.index;
  let newProduct = req.body.item;
  let update = shoppingList.update(nombre, index, newProduct);
  res.send(update);
});

router.delete("/users/:name/items/:index", (req, res) => {
  let nombre = req.params.name;
  let index = req.params.index;
  let remove = shoppingList.remove(nombre, index);
  res.status(204).send(remove);
});

module.exports = router;
