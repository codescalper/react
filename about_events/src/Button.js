//This code was for event onClick

// function Button(){
//     const clickHandler = () => console.log("Clicked")
//     return(
//         <button onClick={clickHandler} >
//             Click Me!
//         </button>
//     );
// }

// export default Button;


//This code is for another event onMouseOver

function Button(){
    const clickHandler = () => console.log("Clicked")
    return(
        <button onMouseOver={clickHandler} >
            Click Me!
        </button>
    );
}

export default Button;
