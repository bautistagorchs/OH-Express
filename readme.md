![logop5](https://i.imgur.com/Ub5CYpa.jpg)

# OH Checkpoint - Express

## Introduction

This office hour is designed to assess your understanding of building applications with Express, specifically focusing on routing, middleware, and integration with models. You'll be working with a simple shopping list application where users can add, update, delete, and filter items.

## Objective

Your task is to implement the necessary routes and model methods to satisfy the provided test specs. The tests will guide you through the requirements step by step.

## Getting Started

1. **Fork & Clone**: Start by forking this repository to your own GitHub account, then clone it to your local machine.
2. **Install Dependencies**: Run `npm install` to install the necessary dependencies.
3. **Run Tests**: You can run `npm test` to execute the tests. They will run in watch mode, so they will re-run when you save changes.
4. **Read the Tests**: The tests in the `test/` directory will guide you on what needs to be implemented. Change `xit` to `it` to activate each test spec as you work through them.
5. **Implement Features**: Work on the following files:
   - `models/shoppingList.js`: This is where the logic for the shopping list is located.
   - `routes/index.js`: This is where you'll define the necessary routes.
   - `app.js`: This is the main Express application file. You might need to add or modify some middleware here.

## Key Areas to Focus

- **Routing**: Ensure that you understand how to define routes in Express, handle different HTTP methods, and extract parameters from the URL.
- **Middleware**: Understand how middleware functions work in Express, and how they can be used to process incoming requests or format outgoing responses.
- **Integration with Models**: Your routes will need to interact with the `ShoppingList` model to perform CRUD operations.

## Tips

- Start with the model tests. They will guide you in implementing the necessary methods in the `ShoppingList` model.
- Once the model methods are working, move on to the route tests. These will guide you in implementing the required routes in `routes/index.js`.
- Remember to consult the Express documentation if you're unsure about any methods or patterns.

## Submission

1. **Commit Your Changes**: As you complete each feature, make sure to commit your changes with a descriptive message.
2. **Push to GitHub**: Once you've completed all the features and all tests are passing, push your code to your forked repository on GitHub.
3. **Submit**: Share the link to your forked repository as your submission.

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [Mocha Documentation](https://mochajs.org/)
- [Chai Documentation](https://www.chaijs.com/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)

## Conclusion

Good luck! Remember, the goal is to demonstrate your understanding of Express and how it integrates with models. Focus on writing clean, efficient code, and make sure to test your routes as you go along.

## Author

**Juan Manuel Tierno**  
For Plataforma 5 Coding Bootcamp  
[LinkedIn Profile](https://www.linkedin.com/in/juanmanueltierno-developer/)
