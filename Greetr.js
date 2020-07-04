/*****************************************************************/
/* Author: Alexander Skinner                                     */
/* Course: Udemy: Javascript - Understanding the Weird Parts     */
/*****************************************************************/

/*
   Greetr is a framework that utilizes and supports
   jQuery to easily add greeting functionality to
   any application.
*/


/*
    @param global = window object
    @param $      = jQuery object
*/

(function ( global, $ ) {

    // Returns a 'new' Greetr.init object to avoid requiring
    // developers to create Greetr objects with the 'new' keyword
    // Side Note: This pattern is used in jQuery itself...
    let Greetr = function ( fName, lName, language ) {
        return new Greetr.init( fName, lName, language );
    }

    // Hidden within the scope in this IIFE
    // Properties are never directly accessible
    // Supported Languages
    const supportedLangs = [
        'en', // English
        'es', // Spanish
        'de', // German
        'ko', // Korean
        'it', // Italian
    ];

    // Casual Greetings
    const greetings = {
        'en': 'Hello',
        'es': 'Hola',
        'de': 'Hallo',
        'ko': '여보세요',
        'it': 'Ciao',
    }

    // Formal Greetings
    const formalGreetings = {
        'en': 'Greetings',
        'es': 'Saludos',
        'de': 'Grüß Gott',
        'ko': '안녕하세요',
        'it': 'Salve',
    }

    // Console logged messages
    const logMessages = {
        'en': 'Logged in...',
        'es': 'Conectado...',
        'de': 'Eingeloggt...',
        'ko': '로그인...',
        'it': 'connesso...',
    }

    // Used to store custom messages
    let customMessage = {

        'msg': ''

    }

    Greetr.prototype = {

        // Getter: Returns users first and last name
        fullName: function( ) {

            return this.fName + ' ' + this.lName;

        },

        // Checks if the passed language is valid and supported
        validate: function( ) {

            if( supportedLangs.indexOf(this.language) === -1 ) {
                throw "Invalid Language";
            }

        },

        // Checks if the passed custom message is a valid
        validateMessage: function ( msg ) {
            // Validation
            // Check if a message was passed
            if(!msg) {
                throw "No message found...";
            }

            // Validation
            // Check if the passed message is a string
            if(typeof msg !== "string") {
                throw "The message must be a string...";
            }

            return msg;

        },

        // Setter: Sets a casual greeting
        greeting: function( ) {

            return greetings[this.language]  + ' ' + this.fName + '!';

        },

        // Setter: Sets a formal greeting
        formalGreeting: function( ) {

            return formalGreetings[this.language] + ' ' + this.fullName() + '.';

        },

        // Getter: Updates the greeting message with the custom message
        customGreeting: function( ) {

            if(customMessage["msg"] === "") {

                throw "Please set the message first";

            }

            return customMessage["msg"];

        },

        // Getter: Updates the greeting message of a Greetr object
        greet: function( formal ) {

            // msg will be updated with our greeting message
            let msg;

            if( formal ) {
                // If formal is true
                msg = this.formalGreeting();

            } else {
                // If formal is false
                msg = this.greeting();

            }
            // Checks if console exists first
            if ( console ) {
                // Log the greeting message
                console.log( msg );

            }
            // Returns the Greetr object
            return this;

        },

        // Used to set a custom message
        setMessage: function( msg ) {

            customMessage["msg"] = msg;

            return this;

        },

        // Used to update the console
        log: function( ) {

            if( console ) {
                console.log( logMessages[this.language] + ' ' + this.fullName() );
            }

            return this;

        },

        // Used to change the language for a user
        setLang: function( lang ) {

            this.language = lang;

            this.validate();

            return this;

        },

        // Used to update an html property with a greeting
        updateHtml: function ( selector, formal, custom ) {

            // Check if jQuery is in the environment
            if(!$) {
                throw "jQuery not loaded...";
            }
            // Check if a selector was passed
            if(!selector) {
                throw "Missing jQuery selector...";
            }
            // Check if formal and boolean are booleans
            if(formal) {
                if(typeof formal !== "boolean") {
                    throw "Parameter 'format' must be a boolean..."
                }
            }
            if(custom) {
                if(typeof custom !== "boolean") {
                    throw "Parameter 'custom' must be a boolean..."
                }
            }


            let msg;

            if(formal) {

                // If formal is true
                msg = this.formalGreeting();

            } else {

                // If formal is false
                msg = this.greeting();

            }

            if(custom) {
                msg += ' ' + this.customGreeting();
            }

            // Use jQuery to update the html
            $(selector).html(msg);

            // Return Greetr object
            return this;

        },

    }

    // This is the actual Greetr object
    // This allows us to 'new' an object without calling 'new'
    Greetr.init = function ( fName, lName, language ) {

        let self = this;

        self.fName = fName || "";
        self.lName = lName || "";
        self.language = language || "en";

        // Check if the passed arguments are valid
        self.validate();

    }

    // This line allows us to avoid using the 'new' operator
    // every time we create a Greetr.init object and by extension
    // also the Greetr object
    Greetr.init.prototype = Greetr.prototype;

    // Exposing the Greetr object to the global environment and
    // also assigning/exposing the 'G$' alias for less typing
    // Example - let greetObject = G$('Joe', 'Smith', 'en');
    // Instead of - let greetObject = Greetr('Joe', 'Smith', 'en');
    global.Greetr = global.G$ = Greetr;

}( window, jQuery )); // Immediately invoked