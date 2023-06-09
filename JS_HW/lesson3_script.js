// =====================Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// ============================= Решение
// =======VAR1
function getQube(number) {
	return number ** 3 + 3 ** 3;
}
console.log(getQube(2));

//======= VAR2
function getQube(number) {
	return number ** 3;
}
console.log(getQube(2) + 3 ** 3);


// =====================Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// ============================= Решение
const money = (+prompt('Ожидаемый уровень зарплаты'));
function salary(money) {
	return money * 0.87;
}
console.log((money !== money) ? 'Введите пожалуйста цифры!!!' : `Размер заработной платы за вычетом 13% налогов: ${salary(money)}`);
// alert((money === money) ? `Размер заработной платы за вычетом 13% налогов: ${salary(money)}` : 'Введите пожалуйста цифры');


// =====================Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// ============================= Решение
const num1 = +prompt('Давайте сравним числа! Введите первое число:');
const num2 = +prompt('Давайте сравним числа! Введите второе число:');
const num3 = +prompt('Давайте сравним числа! Введите третье число:');

function biggerNum(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1;
	} else if (num2 > num1 && num2 > num3) {
		return num2;
	} else {
		return num3;
	}
}
alert(`Самое большое число ${biggerNum(num1, num2, num3)}!`);


// =====================Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение  
// 2. Разность 
// 3. Умножение 
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций
// могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, 
// если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// ============================= Решение
const numA = +prompt('Введите первое число:');
const numB = +prompt('Введите второе число:');

function sum(numA, numB) {
	return numA + numB;
}
function diff(numA, numB) {
	return numA - numB;
}
function multiply(numA, numB) {
	return numA * numB;
}
function divide(numA, numB) {
	return numA / numB;
}

console.log(`Сумма чисел: ${sum(numA, numB)}
Разность чисел: ${diff(numA, numB)}
Умножение чисел: ${multiply(numA, numB)}
Деление чисел: ${divide(numA, numB)}`);



