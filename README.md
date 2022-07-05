# Grocerly

> Get the freshest groceries at the best prices

Grocerly is an e-commerce shopping patform for groceries.
A visiting user is able to do the following:

- [x] arrive at the home page
- [ ] search products :mag:
- [x] view product page for more details
- [ ] sign up/sign in
- [ ] add products to wishlist :hearts:
- [x] add products to cart :shopping_cart:
- [ ] checkout :tada:

#### This project was built using:

- [React.js](https://reactjs.org/)
- [Firebase](https://firebase.google.com/) for database
- [React Router](https://reactrouter.com/) for routing
- [Styled Components](https://www.styled-components.com/) for styling
- [Fontsource](https://fontsource.org/) for font
- [React Hot Toast](https://react-hot-toast.com/) for icons

#### Home page

![image of homepage](/src/assets/screenshots/home-page.jpeg)

#### Search page

![image of homepage](/src/assets/screenshots/search-page.jpeg)

#### Product page

![image of homepage](/src/assets/screenshots/product-page.jpeg)

#### Cart

![image of homepage](/src/assets/screenshots/cart.jpeg)

## How I worked on this project

My goal was to simulate a professional work environment.

- I built this app based on Figma designs:
  ![figma design](/src/assets/screenshots/figma-home-page.jpeg)
  ![figma design](/src/assets/screenshots/figma-header.jpeg)
  ![figma design](/src/assets/screenshots/figma-footer.jpeg)

- I worked with tasks on a Kanban board: [Screenshot of tasks]
  ![kanban board view of tasks](/src/assets/screenshots/github-tasks.jpeg)
  ![header task details](/src/assets/screenshots/github-tasks-header.jpeg)

- I used feature branches and Pull Requests: Here is a PR example #2

## How to navigate this project

- [x] Somewhat complex stateful logic: [Link to example code on GitHub](https://github.com/Cyanhead/grocerly/blob/main/src/context/StateContext.js#:~:text=const%20onAdd%20%3D,%7D%3B)
- [ ] Responsive CSS using styled-components: [Link to example code on GitHub]
- [x] The application fetches data from Firebase: [Example for the request data transformation ](https://github.com/Cyanhead/grocerly/blob/main/src/pages/SearchPage/SearchPage.jsx#L30:~:text=const%20fetchProducts%20%3D,%7D%3B)
- [ ] Integration tests using React Testing Library: [Link to example test on GitHub]

## Why I built the project this way

- I didn't use a state management library like Redux on purpose. For this app simple `useState` and `useContext` are sufficient. I realized that more and more projects don't use Redux anymore since GraphQL or
  react-query are often used for data management.
- styled-components is a great library for styling. It includes an auto-prefixer, uses scoped
  classes, and allows a seamless integration with JS.
- My plan is to become a full-stack developer eventually. But for the beginning I focus on the
  frontend. That's why I decided to use an existing database procider like Firebase rather to create a custom server.
    <!-- I have
    basic backend knowledge as well. -->
  <!-- - Testing is an essential part of production applications. Testing Library is the go-to library in the
    React community. I covered the essential features of the app with tests. -->

## If I had more time I would change this

- Set up continuous integration to run the tests and ESLint on every Pull Request
- Refactor some of the code. Especially [this part](https://github.com/Cyanhead/grocerly/blob/main/src/pages/AddProduct/AddProduct.jsx#:~:text=%7D%3B-,const%20uploadProductsV2%20%3D%20productsArray%20%3D%3E%20%7B,%7D%3B,-const%20areAllPhotosSelected%20%3D)
- Add end-to-end tests with Cypress.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

<!-- ### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance. -->
