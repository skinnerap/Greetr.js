const prop1 = document.getElementById('prop-1-submit');
prop1.addEventListener('click', () => {

    topbar.config({
        autoRun      : false,
        barThickness : 15,
        barColors    : {
            '0'        : 'rgba(26,  188, 156, .7)',
            '.3'       : 'rgba(41,  128, 185, .7)',
            '1.0'      : 'rgba(231, 76,  60,  .7)'
        },
        shadowBlur   : 5,
        shadowColor  : 'rgba(0, 0, 0, .5)',
        className    : 'topbar',
    });

    topbar.show();
    topbar.hide();

    // Setup
    const fName = $('#prop-1-fName').val();
    const lName = $('#prop-1-lName').val();
    const lang = $('#prop-1-lang').val();

    // Creates Greetr Object!
    const gObj = G$(fName, lName, lang);
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

    // Example 7: Setting and Greeting with a Custom Message
    let message = 'I am a custom message!';
    /*
    gObj.setMessage(message);
    console.log(gObj);
    gObj.updateHtml('#prop-7', true, true);*/
    gObj.setMessage(message).updateHtml('#prop-7', false, true);




});

const copy1 = document.querySelector('#copy-code-1');
const clip1 = new ClipboardJS( copy1 );
clip1.on('success', function( e ) {
    console.log( e );
});
clip1.on('failure', function( e ) {
    console.log( e );
});

const copy2 = document.querySelector('#copy-code-2');
const clip2 = new ClipboardJS( copy2 );
clip2.on('success', function( e ) {
    console.log( e );
});
clip2.on('failure', function( e ) {
    console.log( e );
});

const copy3 = document.querySelector('#copy-code-3');
const clip3 = new ClipboardJS( copy3 );
clip3.on('success', function( e ) {
    console.log( e );
});
clip3.on('failure', function( e ) {
    console.log( e );
});

const copy4 = document.querySelector('#copy-code-4');
const clip4 = new ClipboardJS( copy4 );
clip4.on('success', function( e ) {
    console.log( e );
});
clip4.on('failure', function( e ) {
    console.log( e );
});

const copy5 = document.querySelector('#copy-code-5');
const clip5 = new ClipboardJS( copy5 );
clip5.on('success', function( e ) {
    console.log( e );
});
clip5.on('failure', function( e ) {
    console.log( e );
});

const copy6 = document.querySelector('#copy-code-6');
const clip6 = new ClipboardJS( copy6 );
clip6.on('success', function( e ) {
    console.log( e );
});
clip6.on('failure', function( e ) {
    console.log( e );
});

const copy7 = document.querySelector('#copy-code-7');
const clip7 = new ClipboardJS( copy7 );
clip7.on('success', function( e ) {
    console.log( e );
});
clip7.on('failure', function( e ) {
    console.log( e );
});

const copy8 = document.querySelector('#copy-code-8');
const clip8 = new ClipboardJS( copy8 );
clip8.on('success', function( e ) {
    console.log( e );
});
clip8.on('failure', function( e ) {
    console.log( e );
});