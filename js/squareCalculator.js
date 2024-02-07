// 'use strict';

// //калькулятор, который находит площадь и периметр квадрата.
// export const squareCalculator = (function () {
//     const calculateSquare = (area, perimetr) => {
//         const result = {
//             area: area * area,
//             perimetr: 4 * perimetr,
//         };
//         return result;
//     };

//     const displayResult = (showArea, showPerimetr, result) => {
//         showArea.innerText = 'Площадь: ' + result.area;
//         showPerimetr.innerText = 'Периметр: ' + result.perimetr;
//     };

//     const handleCalculation = (calcArea, calcPerimetr, showArea, showPerimetr) => {
//         const areaValue = parseFloat(calcArea.value);
//         const perimetrValue = parseFloat(calcPerimetr.value);

//         if (isNaN(areaValue) || isNaN(perimetrValue)) {
//             alert('Введите корректные значения!');
//             return;
//         }

//         const result = calculateSquare(areaValue, perimetrValue);
//         displayResult(showArea, showPerimetr, result);
//     };

//     const init = (containerSelector) => {
//         const container = document.querySelector(containerSelector);
//         const btn = container.querySelector('.btn_square');
//         const calcArea = container.querySelector('#area_square');
//         const calcPerimetr = container.querySelector('#perimetr_square');
//         const showArea = container.querySelector('.show_area');
//         const showPerimetr = container.querySelector('.show_perimetr');

//         btn.addEventListener('click', function () {
//             handleCalculation(calcArea, calcPerimetr, showArea, showPerimetr);
//         });
//     };

//     return {
//         init,
//     };
// })('.square_box');

// squareCalculator.init('.square_box');