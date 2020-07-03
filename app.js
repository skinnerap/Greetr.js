const prop1 = document.getElementById('prop-1-submit');
prop1.addEventListener('click', () => {

    // Setup
    let fName = $('#prop-1-fName').val();
    let lName = $('#prop-1-lName').val();
    let lang = $('#prop-1-lang').val();

    // Creates Greetr Object!
    let gObj = G$(fName, lName, lang);
    // Or: let gObj = Greetr(fName, lName, lang);

    // Saving the user's original language choice
    // as we will manipulate it during an example
    // below and then return to it's original state
    const userLang = gObj.language;

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

    // Example 6: Console Log for Debugging
    // Language was set to spanish during above
    // previous example, and we therefore chain
    // the 'setLang()' function before the 'log()'
    // function to reset it to the user's original choice
    gObj.setLang(userLang).log();

});
