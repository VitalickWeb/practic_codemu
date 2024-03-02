'use srict';

//Игра угадай число на JavaScript Сейчас мы реализуем игру угадай число.
// В этой игре компьютер загадывает число от 1 до 10. В инпут на экране игрок
// вводит число от 1 до 10, пытаясь угадать, что же загадал компьютер.
// Если игрок ввел число, меньше загаданного, компьютер должен написать 
//'введите число побольше', а если введено больше загаданного, то, соответственно,
// компьютер должен написать 'введите число поменьше'.
const guessTheNumber = (function() {

    function init(containerSelector) {
        const container = document.querySelector(containerSelector)
        const get_value = container.querySelector('.input_style')
        const enter_value = container.querySelector('.btn_enter')
        const clear_value = container.querySelector('.btn_clear')
        const show_result = container.querySelector('.show_result_guesse')
        const entered_numbers = container.querySelector('.show_entered_numbers')

        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        
        let guesse = randomInt(1, 10)       
        let attempt = 3
        let enteredNums = []

        function checkGuess(value, guesse) {
            if (value < guesse) {
                enteredNums.push(value)
                attempt -= 1
                return show_result.innerText = `Не добор, нужно чуток потрудится, давай поднажми!`
            } else if (value > guesse) {
                enteredNums.push(value)
                attempt -= 1
                return show_result.innerText = `Перебор! Отгребай скорее!`
            } else {
                return show_result.innerText = `Неожиданно конечно, но вы победили, хотя ни чего не выиграли!)`
            }
        }
        
        function attemptGuesse(attempt) {
            if (attempt === 0) {
                get_value.disabled = true
                return show_result.innerText = `Ну ты прям победитель по жизни. Нет, ты продул ИИ!)`
            }
        }

        function showEnteredNumbers() {
            return enteredNums.map(e => e)
        }
        
        function deleteValue(value, guesse) {
            if (value === guesse || value > guesse || value < guesse) {
                return get_value.value = ''
            }
        }

        function enterNumber() {    
            if (get_value.value !== '' && +get_value.value >= 1 && +get_value.value <= 10) {
                checkGuess(+get_value.value, guesse)
                deleteValue(+get_value.value, guesse)
                attemptGuesse(attempt)
                entered_numbers.innerText = showEnteredNumbers()
            } else {
                alert("Введите корректное значение от 1 до 10!")
            }    
        }   
        
        function deletAll() {
            get_value.value = ''
            enter_value.value = ''
            clear_value.value = ''
            show_result.innerText = ''
            entered_numbers.innerText = ''
            get_value.disabled = false
            guesse = randomInt(1, 10)
            attempt = 3
            enteredNums.length = 0;
        }

        enter_value.addEventListener('click', enterNumber)
        clear_value.addEventListener('click', deletAll)
    }

    return {
        init
    }
})('.project_game')

guessTheNumber.init('.project_game')


//Игра угадай ячейку на JavaScript
//Давайте теперь реализуем игру угадай ячейку.
//1) В этой игре будет дана таблица 10 на 10.
// Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать
// на клетки пока он не найдет все загаданные компьютером клетки.
//2)Модифицируйте предыдущую задачу, добавив таймер обратного отсчета.
// Если игрок не успеет угадать числа за отведенное время - он проиграл.
const guesseTheCell = (function() {

    function init(containerSelector) {
        const container = document.querySelector(containerSelector)
        const buttonRestart = document.querySelector('.button_restart')
        const table = container.querySelector('.table')

        let count = 1

        function makesTableRows(numRows, numCells, cutRandNum) {
            let cells = []
            for (let i = 0; i < numRows; i++) {
                let rows = document.createElement('tr');

                for (let j = 1; j <= numCells; j++) {
                    let cell = document.createElement('td');  
                    cell.id = count                                
                    //console.log(cutRandNum[j])
                    cell.addEventListener('click', pushTheRandomCells)

                    function pushTheRandomCells() {
        
                        cell.classList.add('active')
                        cell.innerText = count    
                                                
                    } 
                    
                    count++
                    rows.append(cell)
                    cells.push(+cell.id)
                }
    
                table.append(rows)
            }
            
            return cells
        }   
        
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
              
            return array;
        }

        // let cutRandNums = [];
        // let cellsArr = makesTableRows(6, 6, cutRandNums); // Запускаем функцию с пустым cutRandNums
        // let shuffleRandInt = shuffle(cellsArr);
        // cutRandNums = shuffleRandInt.slice(0, 6); // После этого обновляем cutRandNums
        // makesTableRows(6, 6, cutRandNums); // И вызываем функцию еще раз, чтобы обновить ячейки таблицы с новыми значениями
        
        function restartGame() {
            makesTableRows()
        }

        buttonRestart.addEventListener('click', restartGame)
    }

    return {
        init
    }
})('.project_game_cell')

guesseTheCell.init('.project_game_cell')


