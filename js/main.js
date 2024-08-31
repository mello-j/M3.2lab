// Expose the functions to the global scope
window.onload = loaded;
window.helloAlert = helloAlert;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);


}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}

/**
 * This function will display an alert box with the result of the sayHello function
 */
export function helloAlert(){
    alert(sayHello());
}



