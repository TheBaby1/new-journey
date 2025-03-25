
function Button2(){

    let count = 0;

    const handleClick4 = (e) => e.target.textContent = "OUCH!";

    const handleClick3 = (name) => {
        if (count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            console.log(`${name} stop clicking me`);
        }
    };

    const handleClick = () => console.log("OUCH");

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    return (
        <>
            <button onClick={(e) => handleClick4(e)}>Click Me</button>
            <button onDoubleClick={(e) => handleClick4(e)}>Click Me</button>
        </>
    );
}

export default Button2;