Swiggy-app

- Install npm package for manges package
- Add a project on github

- Basic Structure Of App

  - Header
    - navItems
  - Body
    - Search
    - RestaurantsContainer
      - RestaurantCard
        - Img
        - Name
        - Rating
        - Price
        - Address
  - Footer
    - Company
    - Copyright
    - Contact us

- Install Tailwind css for style my react component
- Create a components folder and add all the components in it
- Add one file to another file use a import export feature react will give us
- Make a Header
- Make a card container using flex property
- use swiggy live data

- Create utils folder to add my hard coded data or string

- I learn new thing which is two types of import and export files
  - First is default import and export
    - export default components
    - import components "path"
  - Second is named import and export
    - export const components
    - import {components} "path"

# Hooks in react

- useState() - superpowerfull variable in react
- useEffect() - use for api call

- Hook is normal js function its give a react state (superpowerfull) variable
- Whenever state variable is update my component will be re-render

- I make search btn to apply useState concept
- This search btn filter top rated restaurants

- I use useEffect to get data from api
- Now I use swiggy Live api
- I add shimmer ui in my website for user get better experience

- I make login logout btn using useState.
- And understand how the useState Work.

- I make search functionality here to search any restaurants

# I Learn More About UseEffect

- so we have to do something after rendering the component . then you put inside useEffect
- useEffect is take two argument first is callback function and second is dependency array.
- if you don't pass dependency array then it will run after every render
- if you pass dependency array then it will run after every change in dependency array
- if you pass empty dependency array then it will run only once

# routing (react-router-dom)

- we create routing in our project for that we use react-router-dom
- first install react router dom in my project
- when you create routing we have to create some configuration
- for that i will import {createBrowserRouter} from react-router-dom
- {createBrowserRouter} create a routing configuration for us
- {createBrowserRouter} take list of object
- each object is define two things first is path and second is what should be happened on that path

# UseRouterError Hook

- using this {UseRouterError} hook it is given the more information about the error
- whenever you see a function starts with {use} that means it is hook

# How to create children routes (Outlet)

- we create children route using a list
- and this list give a configuration
- and theses configuration is list of object
- and i use outlet component for add the children in route
- and these outlet is given by react-router-dom

# Link

- why use Link component because when use anchor tag page is reload
- but use Link page is not be reload
- and this single page application also

# Two types of routing in web pages

- clint side routing
  - in clint side routing page is not be reload
- server side routing
  - in server side routing use anchor tag page is reload

# What is dynamic routing (UseParam Hook)

- tou have to created dynamic routes you use /: this
- its define the. this path is dynamic
- and you want read the resId in your URL path then we use USEPARM hook
- which is given by react-router-dom
- and you read the pathId easily and make api call dynamically

# Create own custom hook (useRestaurantsMenu)

- this hook name is useRestaurantsMenu
- and this work is fetch the data and give the restaurants info
- and this hook is created because its optimize my code a lot
- and now my component is a job of single responsibility

# create one more hook (useOnlineStatus)

- This hook is display the user is online or offline
- and this is give you good user experience to user

# Lazy Loading...

- lazy loading is a technique to load the component on demand
- and this is optimize the performance of the application
- and this is also reduce the bundle size of the application
- and this is also reduce the time of the application to load

# make accordion

# letting the state up

- how to controlled child from parent
- learn controlled component and uncontrolled component

# userContext

- how to share the data between the component
- so for that we use context
- how to create context
- we create context using createContext which given by react library
- and we use useContext hook to use the context in our component
- and we use Provider to wrap the context in our application
- this provider to help use to update or overRide the value of userContext
- and we cas pass the value we want in provider value={}

# Redux

- Redux store is nothing but ist big whole object
- We have install the redux in to your project. you get two library
  - 1. @reduxjs/Toolkit
  - 2. react-redux
- Then provide store to our application
- using PROVIDER we provide store to our application
- We create logical separation and we will make small slices inside your redux-store
