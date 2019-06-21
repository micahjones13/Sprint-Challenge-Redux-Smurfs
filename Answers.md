1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    - Map, Filter, ForEach (spread?). We use map to create the new object 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - action: actions are things that are triggered to change state.
    - reducers: reducers take in actions and change state depending on the action
    - store: store holds all the state of the app. It is known as the single source of truth because it holds all current state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    - App state is what is in the store, and component state is what a specific component has. I used component state in this project
    in order to get the values inputed by the user to add a new smurf. 

1.  What is middleware?

    - Middleware intercepts actions and decides when to dispatch them. This helps with async errors. I think of it as a traffic contorller.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk lets us return promises from our aciton creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect!
