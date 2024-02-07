'use strict';

                //Калькуляторы фигур на JavaScript//
// ============================================================= //
//калькулятор, который находит площадь и периметр квадрата.
const squareCalculator = (function () {
    const calculateSquare = (area, perimetr) => {
        const result = {
            area: area * area,
            perimetr: 4 * perimetr,
        };
        return result;
    };

    const displayResult = (showArea, showPerimetr, result) => {
        showArea.innerText = 'Площадь: ' + result.area;
        showPerimetr.innerText = 'Периметр: ' + result.perimetr;
    };

    const handleCalculation = (calcArea, calcPerimetr, showArea, showPerimetr) => {
        const areaValue = parseFloat(calcArea.value);
        const perimetrValue = parseFloat(calcPerimetr.value);

        if (isNaN(areaValue) || isNaN(perimetrValue)) {
            alert('Введите корректные значения!');
            return;
        }

        const result = calculateSquare(areaValue, perimetrValue);
        displayResult(showArea, showPerimetr, result);
    };

    const init = (containerSelector) => {
        const container = document.querySelector(containerSelector);
        const btn = container.querySelector('.btn_square');
        const calcArea = container.querySelector('#area_square');
        const calcPerimetr = container.querySelector('#perimetr_square');
        const showArea = container.querySelector('.show_area');
        const showPerimetr = container.querySelector('.show_perimetr');

        btn.addEventListener('click', function () {
            handleCalculation(calcArea, calcPerimetr, showArea, showPerimetr);
        });
    };

    return {
        init,
    };
})('.square_box');

//калькулятор, который находит площадь и периметр прямоугольника.
const rectangleCalculator = (function () {
    const calculateRectangle = (length, width) => {
        const result = {
            area: length * width,
            perimetr: 2 * (length + width),
        };
        return result;
    };

    const displayResult = (showArea, showPerimetr, result) => {
        showArea.innerText = 'Площадь: ' + result.area;
        showPerimetr.innerText = 'Периметр: ' + result.perimetr;
    };

    const handleCalculation = (calcArea, calcPerimetr, showArea, showPerimetr) => {
        const areaValue = parseFloat(calcArea.value);
        const perimetrValue = parseFloat(calcPerimetr.value);

        if (isNaN(areaValue) || isNaN(perimetrValue)) {
            alert('Введите корректные значения!');
            return;
        }

        const result = calculateRectangle(areaValue, perimetrValue);
        displayResult(showArea, showPerimetr, result);
    };

    const init = (containerSelector) => {
        const container = document.querySelector(containerSelector);
        const btn = container.querySelector('.btn_rectangle');
        const calcArea = container.querySelector('#area_rectangle');
        const calcPerimetr = container.querySelector('#perimetr_rectangle');
        const showArea = container.querySelector('.show_area');
        const showPerimetr = container.querySelector('.show_perimetr');

        btn.addEventListener('click', function () {
            handleCalculation(calcArea, calcPerimetr, showArea, showPerimetr);
        });
    };

    return {
        init,
    };
})('.rectangle_box');

//калькулятор, который находит площадь и длинну окружности.
const circleCalculator = (function () {
    const calculateCircle = (radius1, radius2) => {
        const result = {
            area: Math.PI.toFixed(2) * Math.pow(radius1, 2),
            circumference: 2 * Math.PI.toFixed(2) * radius2,
        };
        return result;
    };

    const displayResult = (showArea, showPerimetr, result) => {
        showArea.innerText = 'Площадь: ' + result.area;
        showPerimetr.innerText = 'Длина: ' + result.circumference;
    };

    const handleCalculation = (calcArea, circumference, showArea, showCircumference) => {
        const areaValue = parseFloat(calcArea.value);
        const lengthValue = parseFloat(circumference.value);

        if (isNaN(areaValue) || isNaN(lengthValue)) {
            alert('Введите корректные значения!');
            return;
        }

        const result = calculateCircle(areaValue, lengthValue);
        displayResult(showArea, showCircumference, result);
    };

    const init = (containerSelector) => {
        const container = document.querySelector(containerSelector);
        const btn = container.querySelector('.btn_circle');
        const calcArea = container.querySelector('#area_circle');
        const circumference = container.querySelector('#circumference');
        const showArea = container.querySelector('.show_area');
        const showCircumference = container.querySelector('.show_circumference');

        btn.addEventListener('click', function () {
            handleCalculation(calcArea, circumference, showArea, showCircumference);
        });
    };

    return {
        init,
    };
})('.circle_box');

//калькулятор, который находит площадь и длинну окружности.
//Если известны три стороны треугольника a, b и c , то его площадь можно вычислить по формуле:
const triangleCalculator = (function () {
    const calculateTriangle = (calcSideA, calcSideB, calcSideC) => {
        const semiperimetr = (+calcSideA.value + +calcSideB.value + +calcSideC.value) / 2
        const areaCalc = Math.sqrt(semiperimetr * (semiperimetr - +calcSideA.value) * (semiperimetr - +calcSideB.value) * (semiperimetr - +calcSideC.value)) 
        const result = {
            area: areaCalc.toFixed(2)
        };
        return result;
    };

    const displayResult = (showArea, result) => {
        showArea.innerText = 'Площадь: ' + result.area;
    };

    const handleCalculation = (calcSideA, calcSideB, calcSideC, showArea) => {
        const calcSideAValue = parseFloat(calcSideA.value);
        const calcSideBValue = parseFloat(calcSideB.value);
        const calcSideCValue = parseFloat(calcSideC.value);
        
        if (isNaN(calcSideAValue) || isNaN(calcSideBValue) || isNaN(calcSideCValue)) {
            alert('Введите корректные значения!');
            return;
        }

        const result = calculateTriangle(calcSideA, calcSideB, calcSideC);
        displayResult(showArea, result);
    };

    const init = (containerSelector) => {
        const container = document.querySelector(containerSelector);
        const btn = container.querySelector('.btn_triangle');
        const calcSideA = container.querySelector('#side_a');
        const calcSideB = container.querySelector('#side_b');
        const calcSideC = container.querySelector('#side_c');
        const showArea = container.querySelector('.show_area');

        btn.addEventListener('click', function () {
            handleCalculation(calcSideA, calcSideB, calcSideC, showArea);
        });
    };

    return {
        init,
    };
})('.triangle_box');

squareCalculator.init('.square_box');
rectangleCalculator.init('.rectangle_box');
circleCalculator.init('.circle_box');
triangleCalculator.init('.triangle_box')



// ============================================================================ //
// ================ Математические калькуляторы на JavaScript ================= //
//Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения.
// По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
const quadraticEquation = (function() {

    function init(containerSelector) {
        let container = document.querySelector(containerSelector)
        let inputA = container.querySelector('.inp1');
        let inputB = container.querySelector('.inp2');
        let inputC = container.querySelector('.inp3');
        let btnEnter = container.querySelector('.btn_enter');
        let btnClear = container.querySelector('.btn_clear');
        let elem1 = container.querySelector('.elem1');
        let elem2 = container.querySelector('.elem2');
        let elem3 = container.querySelector('.elem3');
        
        btnEnter.addEventListener('click', findRootOfEquation);
        //9X2 + 6x + 1 = 0
        //a = 9; b = 6; c = 1
        //формула -> D = b^2 - 4ac
        //x1 = -b + root D / 2 * a 
        //x2 = -b - root D / 2 * a 
        function findRootOfEquation() {
            let d1 = (+inputB.value * +inputB.value) - (4 * inputA.value * inputC.value)
            let rootOfNum = Math.sqrt(d1) 
            
            if (d1 > 0) {        
                let round1 = (-inputB.value + rootOfNum) / (2 * inputA.value)
                let round2 = (-inputB.value - rootOfNum) / (2 * inputA.value)
                let rounded1 = parseFloat(round1.toFixed(1))
        
                elem1.textContent += `x1: ${rounded1}`
                elem2.textContent += `x2: ${parseFloat(round2.toFixed(1))}`
            }
        
            if (d1 === 0) {
                let round1 = (-inputB.value + rootOfNum) / (2 * inputA.value)
                let rounded1 = parseFloat(round1.toFixed(1))
              
                elem1.textContent += `x1: ${rounded1}`
                elem2.textContent += `x2: ${rounded1}`
            }
        
            if (d1 < 0) {
                elem3.textContent = `Корней нет ${d1} так как корень дискриминанта меньше нуля!`
            }
        }
        
        btnClear.addEventListener('click', clearValue)
        function clearValue() {
            inputA.value = ''
            inputB.value = ''
            inputC.value = ''
            elem1.textContent = ''
            elem2.textContent = ''
            elem3.textContent = ''
        }
    }
   
    return {
        init
    }
})('.quadratic_equation_box'); 


//Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора:
// квадрат самого большого числа должен быть равен сумме квадратов двух остальных.
const pythagoreanTriple = (function() {

    function init(containerSelector) {
        let container = document.querySelector(containerSelector)
        let inputA = container.querySelector('.inp1');
        let inputB = container.querySelector('.inp2');
        let inputC = container.querySelector('.inp3');
        let btnEnter = container.querySelector('.btn_enter');
        let btnClear = container.querySelector('.btn_clear');
        let elem = container.querySelector('.elem');
        
        btnEnter.addEventListener('click', checkEqualitySquaresLegsAndHypotenuse);
    
        function checkEqualitySquaresLegsAndHypotenuse() {
            let leg = (inputA.value * inputA.value) + (inputB.value * inputB.value)
            let hypotenuse = (inputC.value * inputC.value)
            
            if (leg == hypotenuse) {
                elem.textContent = `Является тройкой пифагора так как сумма квадратов катетов ${leg}, равна сумме квадрату гипотенузы ${hypotenuse}.`
            } else {
                elem.textContent = `Не является тройкой пифагора так как сумма квадратов катетов и гипотенузы не равны!`
            }
        }
        
        btnClear.addEventListener('click', clearValue)
        function clearValue() {
            inputA.value = ''
            inputB.value = ''
            inputC.value = ''
            elem.textContent = ''
        }
    }
   
    return {
        init
    }
})('.pythagorean_triple_box'); 


//Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку 
//выведите список делителей этого числа.
const numberDivisors = (function() {

    function init(containerSelector) {
        let container = document.querySelector(containerSelector)
        let inputA = container.querySelector('.inp1');
        let btnEnter = container.querySelector('.btn_enter');
        let btnClear = container.querySelector('.btn_clear');
        let resValue = container.querySelector('.result_value');
        let elem = container.querySelector('.elem');
        
        function getSum(sum) {
            let arrNums = []

            for (let i = 1; i <= sum; i++) {
                if (sum % i === 0) {
                    arrNums.push(i)
                }
            }

            return arrNums
        }

        btnEnter.addEventListener('click', digitOfNums);
        function digitOfNums() {  
            resValue.innerText += ` ${inputA.value}:`
            elem.textContent = `${getSum(inputA.value)}`
        }
        
        btnClear.addEventListener('click', clearValue)
        function clearValue() {
            inputA.value = ''
            resValue.innerText = ''
            elem.textContent = ''
        }
    }
   
    return {
        init
    }
})('.number_divisors_box'); 


//Даны 2 инпута и кнопка. В инпуты вводятся числа. 
//По нажатию на кнопку выведите список общих делителей этих двух чисел.
const commonFactorsOfNums = (function() {

    function init(containerSelector) {
        let container = document.querySelector(containerSelector)
        let inputA = container.querySelector('.inp1');
        let inputB = container.querySelector('.inp2');
        let btnEnter = container.querySelector('.btn_enter');
        let btnClear = container.querySelector('.btn_clear');
        let resValue1 = container.querySelector('.result_value1');
        let resValue2 = container.querySelector('.result_value2');
        let resValue3 = container.querySelector('.result_value3');
        
        function getFactors(num) {
            return Array.from({ length: num }, (_, i) => i + 1).filter(n => num % n === 0);
        }

        function findMatchingFactors(arr1, arr2) {
            return arr1.filter(num => arr2.includes(num));
        }

        function displayFactors(element, factors) {
            element.textContent = factors.join(', ');
        }

        function handleEnterClick() {
            const factorsA = getFactors(Number(inputA.value));
            const factorsB = getFactors(Number(inputB.value));

            displayFactors(resValue1, factorsA);
            displayFactors(resValue2, factorsB);

            const matchingFactors = findMatchingFactors(factorsA, factorsB);
            displayFactors(resValue3, matchingFactors);
        }

        function handleClearClick() {
            inputA.value = '';
            inputB.value = '';
            resValue1.textContent = '';
            resValue2.textContent = '';
            resValue3.textContent = '';
        }

        btnEnter.addEventListener('click', handleEnterClick);
        btnClear.addEventListener('click', handleClearClick);
    }
   
    return {
        init
    }
})('.common_factors_nums_box'); 


quadraticEquation.init('.quadratic_equation_box')
pythagoreanTriple.init('.pythagorean_triple_box')
numberDivisors.init('.number_divisors_box')
commonFactorsOfNums.init('.common_factors_nums_box')


//Даны 2 инпута и кнопка. В инпуты вводятся числа. 
//По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.
const twoNumsNOD = (function() {

    function init(containerSelector) {
        let container = document.querySelector(containerSelector)
        let inputA = container.querySelector('.inp1');
        let inputB = container.querySelector('.inp2');
        let btnEnter = container.querySelector('.btn_enter');
        let btnClear = container.querySelector('.btn_clear');
        let resValue = container.querySelector('.result_value');
        
        function getSum(sum) {
            let arrNums = []

            for (let i = 1; i <= sum; i++) {
                if (sum % i === 0) {
                    arrNums.push(i)
                }
            }

            return arrNums
        }

        function handleEnterClick() {  
            resValue.innerText += ` ${inputA.value}:`
            elem.textContent = `${getSum(inputA.value)}`
        }
        
        function handleClearClick() {
            inputA.value = ''
            resValue.innerText = ''
            elem.textContent = ''
        }

        btnEnter.addEventListener('click', handleEnterClick);
        btnClear.addEventListener('click', handleClearClick);
    }
   
    return {
        init
    }
})('.two_nums_NOD_box'); 


twoNumsNOD.init('.two_nums_NOD_box')