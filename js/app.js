'use strict';

const screenKeybord = (function() {

    function init(containerInit) {
        const container = document.querySelector(containerInit)
        const tableKeyboard = container.querySelector('.buttons_keybord')
        
        const alphabetLowerCase = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
          ];

        const alphabetUpperCase = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];

        function interruptsAlphabet(alphabetLow, alphabetUp) {

            for (let elem of alphabetLow) {
                let rows = document.createElement('tr')
                console.log(elem)

                tableKeyboard.append(rows)
            }
        }

        interruptsAlphabet(alphabetLowerCase, alphabetUpperCase)



    }



    return {
        init
    }
})('project_app_screen_keybord')

screenKeybord.init('project_app_screen_keybord')