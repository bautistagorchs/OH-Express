/* eslint-disable no-unused-expressions */
const supertest = require("supertest-as-promised")(require("../app"));
const expect = require("chai").expect;
const ShoppingList = require("../models/shoppingList");

describe("ShoppingList routes", function () {
  beforeEach(function () {
    ShoppingList.reset();
  });

  describe("`/users` URI", function () {
    it("GET initially responds with an empty array", function () {
      return supertest
        .get("/users")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body).to.eql([]);
        });
    });

    it("GET responds with all users who have items", function () {
      ShoppingList.add("santi", "medialunas");
      ShoppingList.add("guille", "chivito");
      return supertest
        .get("/users")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body).to.eql(["santi", "guille"]);
        });
    });
  });

  describe("`/users/:name/items` URI", function () {
    it("GET returns a list with items for a specific user", function () {
      ShoppingList.add("alan", "bread");
      return supertest
        .get("/users/alan/items")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body).to.have.length(1);
          expect(res.body[0].content).to.equal("bread");
          expect(res.body[0].bought).to.be.false;
        });
    });

    it("POST adds an item to a user's shopping list", function () {
      return supertest
        .post("/users/toni/items")
        .send({ item: "milk" })
        .expect(201)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body.content).to.equal("milk");
          expect(res.body.bought).to.be.false;
        });
    });

    it("PUT updates an item from the user's list", function () {
      ShoppingList.add("toni", "milk");
      return supertest
        .put("/users/toni/items/0")
        .send({ item: "water" })
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body.content).to.equal("water");
          expect(res.body.bought).to.be.false;
        });
    });

    it("DELETE removes an item from a user's shopping list", function () {
      ShoppingList.add("toni", "milk");
      return supertest
        .delete("/users/toni/items/0")
        .expect(204)
        .then(function (res) {
          expect(ShoppingList.list("toni")).to.have.length(0);
        });
    });
  });

  describe("`/users/:name/items` URI with query parameters", function () {
    it("GET retrieves only bought items when filtered", function () {
      ShoppingList.add("toni", "milk");
      ShoppingList.bought("toni", 0);
      ShoppingList.add("toni", "bread");

      return supertest
        .get("/users/toni/items?filter=bought")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body).to.have.length(1);
          expect(res.body[0].content).to.equal("milk");
          expect(res.body[0].bought).to.be.true;
        });
    });
  });
});
