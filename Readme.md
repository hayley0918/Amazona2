1. Design Website Template

   1. Create amazona folder
   2. Create template folder
   3. Create index.html
   4. add default HTML code
   5. link to style.css
   6. create header, main and footer
   7. style elements

2. Display Products

   1. create products div
   2. add product attributes
   3. add link, image, name and price

3. Create React App

   1. npx create-react-app frontend
   2. npm start
   3. Remove unused files
   4. copy index.html content to App.js
   5. copy style.css content to index.css
   6. replace class with className

4. Share Code On Github

5. Create Rating and Product Component

   1. create components/Rating.js
   2. create div.rating
   3. style div.rating, span and last span
   4. create Product component
   5. use Rating component

6. Build Product Screen

   1. Install react-router-dom
   2. Use BrowserRouter and Route for Home Screen
   3. Create HomeScreen.js
   4. Add product list code there
   5. Create ProductScreen.js
   6. Add new Route from product details to App.js
   7. Create 3 columns for product image, info and action

7. Create Node.Js Server

   1. run npm init in root folder
   2. update package.json set type: module
   3. Add .js to imports
   4. npm i express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start

8. Load Product From Backend

   1. edit HomeScreen.js
   2. define products, loading and error
   3. create useEffect
   4. define async fetchData and call it
   5. install axios
   6. get data from /api/products
   7. show them in the list
   8. create Loading Component
   9. create Message Box Component
   10. use them in HomeScreen

9. Install ESLint

   1. install VSCode eslint extension
   2. npm i -D eslint
   3. run ./node_modules/.bin/eslint --init
   4. create ./frontend/.env
   5. add SKIP_PREFLIGHT_CHECK=true

10. Add Redux To Home Screen

- npm install redux react-redux
- create store.js
- initState = { product: [] }
- reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
- export default createStore(reducer, initState)
- edit HomeScreen.js
- shopName = useSelector(state => state.products)
- const dispatch = useDispatch()
- useEffect(() => dispatch({type: LOAD_PRODUCTS, payload: data}))
- add store to index.js

11. Add Redux To Product Screen
12. Handle Add To Cart Button
13. Implement Add To Cart
14. Build Cart Screen
15. Implement Remove From Cart
16. Create Sample Users In MongoDB
17. Create Sample Products In MongoDB
18. Create Signin Backend
19. Design Signin Screen
20. Implement Signin Action
21. Create Register Screen
22. Create Shipping Screen
23. Create Payment Screen
24. Design Place Order Screen
25. Create Place Order API
26. Implement Place Order Action
27. Create Order Screen
28. Add PayPal button
29. Implement Order Payment
30. Display Order History
31. Display User Profile
32. Update User Profile
33. Creat Admin View
