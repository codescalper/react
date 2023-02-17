function ModeToggler(){
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>Light Mode is on</h1>

    function changeValue(){
        darkModeOn = !darkModeOn;
        if(darkModeOn){
            console.log("Dark mode is on");
        }else{
            console.log("Dark mode is off");
        }
    }
    
    return(
        <div>
        {darkModeOn ? darkMode : lightMode }
        <button onClick= {changeValue}>Click!</button>
    </div>
    )
}

export default ModeToggler;

