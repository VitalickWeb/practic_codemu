'use strict';

const screenKeybord = (function() {

    function init(containerSelector) {
        const container = document.querySelector(containerSelector)
        const tableKeyboard = container.querySelector('.buttons_keybord')
        
        const keyboardSymbols = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
            '`', '-', '=', '[', ']', '\\', ';', '\'', ',', '[ space ]','.', '/', '⇪'
        ];

        function interruptsAlphabet(keyboardSymbols) {

            for (let i = 0; i < 1; i++) {
                let rows = document.createElement('tr')
                
                for (let cell of keyboardSymbols) {
                    let cells = document.createElement('td')
                    cells.innerText = cell

                    rows.append(cells)
                }

                tableKeyboard.append(rows)
            }

            return 
        }

        interruptsAlphabet(keyboardSymbols)



    }



    return {
        init
    }
})('.project_app_screen_keybord')

screenKeybord.init('.project_app_screen_keybord')