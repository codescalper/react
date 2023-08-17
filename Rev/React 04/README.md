- **Assignment 1** : Make a simple component which can conditionally render a list with **number** or **alphabets** or ***bullets*** in HTML for number. e..g. use a prop like `layout` for this. Also use a prop `items` for array of items in list.
 ```jsx
< List layout="numbered" items={items}/> 
< List layout="alpha"  items={items}/> 
< List layout="bullet"   items={items}/>
  ```

- **Assignment 2** :  This is continuation of previous assignment **RESUME Builder**
  1. In this part you have to make some conditional rendering. Suppose if any section doesn't exist you have to remove that section from **Resume**. Example if `skills` is empty array than don't display `skills` section in Resume.
  2. You have to use `map` in most places where there are arrays. Like **Skills**, **Education**, **Experience** if there are 3 entries, use `map` to display 3 experience items. You don't need fix number of items. Any array can have 1 to 10(or some Limit) any number of items. You can put some Limit, so that your layout is not affected.
  3. Conditionally put some styling to **Resume**. Like `light` theme or `dark` theme or any other way you can switch the CSS layouts.

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


