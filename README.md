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

# UseRouterError

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
