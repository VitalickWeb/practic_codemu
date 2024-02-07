// 'use strict';

// export const rectangleCalculator = (function () {
//     const calculateRectangle = (length, width) => {
//         const result = {
//             area: length * width,
//             perimetr: 2 * (length + width),
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

//         const result = calculateRectangle(areaValue, perimetrValue);
//         displayResult(showArea, showPerimetr, result);
//     };

//     const init = (containerSelector) => {
//         const container = document.querySelector(containerSelector);
//         const btn = container.querySelector('.btn_rectangle');
//         const calcArea = container.querySelector('#area_rectangle');
//         const calcPerimetr = container.querySelector('#perimetr_rectangle');
//         const showArea = container.querySelector('.show_area');
//         const showPerimetr = container.querySelector('.show_perimetr');

//         btn.addEventListener('click', function () {
//             handleCalculation(calcArea, calcPerimetr, showArea, showPerimetr);
//         });
//     };

//     return {
//         init,
//     };
// })('.rectangle_box');

// rectangleCalculator.init('.rectangle_box');
