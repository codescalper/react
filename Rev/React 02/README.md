## Chapter 2 -   Components - JSX and Props

 
- **Assignment 1** :  Create a simple React app for **RESUME Builder**. It will be static website. You have to make components like **Resume** as top level and under it - **Skills**, **Education**, **Experience** etc as components.  All resume data will be under 1 big JavaScript object like which you can us in components via props. You can fix the number of items in **Skills**, **Education**, **Experience** or any section. Example you can say that only 3 experience items is allowed.

  ```js 
   resume = {
      experience : [ { year:2012, company:'xyz', role:'something' }],
      education:[ ],
      skills : [ 'react js', 'node js']
      .....
      ...
      }
  ```

   > You can choose any simple HTML layout and convert it to React Components 
 
   Example Link : [ Resume HTML ](https://codepen.io/emzarts/pen/OXzmym)

  ### Special Assignments ==============

- **Assignment 2** : Create a Parent Component called **Border** which can provide some CSS border to any component nested into it. [Hint : You will need to use `children` props here
  ```jsx
   < Border> 
         < Component > 
   < Border />
  ```