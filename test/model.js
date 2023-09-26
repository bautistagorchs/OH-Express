/* eslint-disable no-unused-expressions */
const expect = require("chai").expect;

// import the ShoppingList class
const ShoppingList = require("../models/shoppingList");

describe("ShoppingList model", function () {
  // each test starts with a new shopping list
  beforeEach(function () {
    ShoppingList.reset();
  });

  describe("`add` and `list`", function () {
    it("initially returns an empty array for a new user", function () {
      expect(ShoppingList.list("Alice")).to.eql([]);
    });

    it("adds items to the list for a user", function () {
      ShoppingList.add("Alice", "milk");
      expect(ShoppingList.list("Alice")).to.eql([
        { content: "milk", bought: false },
      ]);
    });

    it("handles multiple items for a user", function () {
      ShoppingList.add("Bob", "bread");
      ShoppingList.add("Bob", "eggs");
      expect(ShoppingList.list("Bob")).to.eql([
        { content: "bread", bought: false },
        { content: "eggs", bought: false },
      ]);
    });
  });

  describe("`remove`", function () {
    it("removes an item from the list of a user by index", function () {
      // set up a list of items for Charlie
      ShoppingList.add("Charlie", "milk");
      ShoppingList.add("Charlie", "bread");
      ShoppingList.add("Charlie", "eggs");

      expect(ShoppingList.list("Charlie").length).to.equal(3);
      // use the `remove` method
      ShoppingList.remove("Charlie", 1);
      // check the current state
      expect(ShoppingList.list("Charlie").length).to.equal(2);
      expect(ShoppingList.list("Charlie")[0]).to.eql({
        content: "milk",
        bought: false,
      });
      expect(ShoppingList.list("Charlie")[1]).to.eql({
        content: "eggs",
        bought: false,
      });
    });
  });

  describe("`update`", function () {
    it("updates an item's content for a given user by index", function () {
      ShoppingList.add("Diana", "milk");
      ShoppingList.update("Diana", 0, "almond milk");
      expect(ShoppingList.list("Diana")[0]).to.eql({
        content: "almond milk",
        bought: false,
      });
    });
  });

  describe("`bought`", function () {
    it("marks an item as bought for a given user by index", function () {
      ShoppingList.add("Eva", "bread");
      ShoppingList.bought("Eva", 0);
      expect(ShoppingList.list("Eva")[0]).to.eql({
        content: "bread",
        bought: true,
      });
    });
  });
});
