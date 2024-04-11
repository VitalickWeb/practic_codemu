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
        
        function updateAll() {
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
        clear_value.addEventListener('click', updateAll)
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
        const start = container.querySelector('#start')
        const showTimer = container.querySelector('.show_timer')
        const showPopupCongrat = container.querySelector('.popup_box_congrat')
        const showPopupLose = container.querySelector('.popup_box_lose')
        const table = container.querySelector('.table')
        const restart = container.querySelector('#restart')
        
        function makesTableRows() {       
            let count = 1            
            let randIntcells = []
        
            for (let i = 0; i < 6; i++) {
                let rows = document.createElement('tr')

                for (let j = 0; j < 6; j++) {
                    let cell = document.createElement('td')  
                    cell.id = count                                 

                    rows.append(cell)
                    randIntcells.push(+cell.id)
                    count++      
                }
    
                table.append(rows)
            }
            
            return randIntcells
        }   
        
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
              
            return array;
        }
        
        let tableCells = makesTableRows()
        let randCells = shuffle(tableCells).slice(0, 10)
        let guessedCount = 0;
        let totalCells = 10;

        const cells = document.querySelectorAll('.table td')

        function assignRandomNumbersToCells(tableCells, arrCell) {
            let arrayRandomCellsId = []

            for (let i = 0; i < tableCells.length; i++) {
                let randomNum = arrCell[i]
                let cellId = tableCells[i]
                
                arrayRandomCellsId.push(cellId)

                const cell = document.getElementById(cellId)
                
                if (randomNum) {
                    cell.addEventListener('click', function clickCells() {
                        cell.innerText = randomNum
                        cell.classList.add('active')

                        guessedCount++
                        
                        if (guessedCount === totalCells) {
                            cell.innerText = ''
                            showPopupCongrat.classList.add('popup_congrat_active')
                            restart.disabled = false
                            restart.classList.remove('restart_active')
                            cells.forEach(cell => {
                                cell.classList.add('disabled_cell')
                            });
                        } 
                        this.removeEventListener('click', clickCells)        
                    })                                   
                } else {
                    cell.addEventListener('click', function clickCells() {
                        cell.innerText = 'boom!'
                        cell.classList.add('not_active')
                        this.removeEventListener('click', clickCells)
                    })
                }
            }

            return arrayRandomCellsId
        }

        function getTimer(timeCount, randCellId) {
            
            let timerId = setInterval( () => {
                showTimer.innerText = --timeCount

                if (timeCount <= 5) {
                    showTimer.classList.add('active')
                }

                for (let i = 0; i < randCellId.length; i++) {
                    let cellId = randCellId[i]
                    
                    let cell = document.getElementById(cellId)
                    
                    if (timeCount <= 0) {
                        restart.disabled = false
                        restart.classList.remove('restart_active')
                        cell.innerText = ''
                        cell.classList.add('disabled_cell') // Отключение событий для ячейки                        
                    }                    
                }

                if (timeCount <= 0) {
                    clearInterval(timerId)
                    showPopupLose.classList.add('popup_active_lose')
                    
                } else if (guessedCount === totalCells) {
                    clearInterval(timerId)
                }

            }, 1000)        
        }     

        function startTimer() {
            let cellId = assignRandomNumbersToCells(tableCells, randCells)
            getTimer(30, cellId)

            this.removeEventListener('click', startTimer) 
            start.disabled = true
            restart.disabled = true
            start.classList.add('start_active')   
            restart.classList.add('restart_active')

            cells.forEach(cell => {
                cell.classList.remove('disabled_cell')
            });
        }

        function restartGame() {
            // 1. Сбросить содержимое всех ячеек в таблице.
            // 2. Удалить все классы с ячеек.
            cells.forEach(cell => {
                cell.innerText = '';
                cell.classList.remove('active', 'not_active', 'disabled_cell');
                cell.classList.add('disabled_cell')
            });

            // 3. Установить значения по умолчанию для переменных.
            guessedCount = 0;
            totalCells = 10;

            // 4. Скрыть все всплывающие окна.
            showPopupCongrat.classList.remove('popup_congrat_active');
            showPopupLose.classList.remove('popup_active_lose');

            // 5. Восстановить начальные значения для таймера и других элементов интерфейса.
            showTimer.innerText = 30;
            showTimer.classList.remove('active');
            start.classList.remove('start_active');
            start.disabled = false;

            // Добавить обработчик события для кнопки "start"
            start.addEventListener('click', startTimer);
        }

        start.addEventListener('click', startTimer)
        restart.addEventListener('click', restartGame)
    }

    return {
        init
    }
})('.project_game_cell')

guesseTheCell.init('.project_game_cell')

//#############################################





