// Example 1: A Simple Casual Greeting
// Uses: greet();
const prop1 = document.getElementById('prop-1-submit');
prop1.addEventListener('click', () => {

    // Setup
    //
    let fName = $('#prop-1-fName').val();
    let lName = $('#prop-1-lName').val();
    let lang = $('#prop-1-lang').val();

    // Creates Greetr Object!
    let gObj = G$(fName, lName, lang);
    // Or: let gObj = Greetr(fName, lName, lang);

    // Example 1: Casual Greeting
    gObj.updateHtml('#prop-1');
    // Second boolean parameter can be omitted or declared
    // Or: gObj.updateHtml('#prop-1', false);

    // Example 2: Formal Greeting
    gObj.updateHtml('#prop-2', true);

    // Example 3: Change Language
    //gObj.setLang('es');

    // Example 4: Change Language and Greet
    gObj.setLang('es').updateHtml('#prop-4');
    // Could use the formal version by setting the second parameter
    // of the updateHtml function as 'true'

    // Example 5: Change Language and Formal Greet
    gObj.setLang('es').updateHtml('#prop-5', true);

});
