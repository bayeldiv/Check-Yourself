// task 1
// Создайте переменную num передайте в него число 123 используя циклы вывести пирамиду
// let num = 123;
// let sum = [];
// for (let i = 1; i <= 3; i++) {
//   sum += i;
//   console.log(sum);
// }

// вывод:
// 1
// 12
// 123

// task 2
// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

// let arr = "#";
// let sum = [];
// for (let i = 1; i <= 7; i++) {
//   sum += "#";
//   console.log(sum);
// }
// #
// ##
// ###
// ####
// #####
// ######
// #######

// task 3
// Дан массив с объектами:
// let arr = [
//   { name: "Jack", age: 15 },
//   { name: "Helen", age: 34 },
//   { name: "Tom", age: 20 },
//   { name: "Bob", age: 54 },
//   { name: "Jessica", age: 13 },
// ];
// let result = []
// for (let i of arr) {
//   for (let j in i) {
//     if (age < 18) {

//     }
//   }
//   console.log(
//     `Hello ${name} the grand sale has begun, prices are reduced by 20%!`
//   );
// }
// , задача: реализовать рассылку сообщений типа: 'Hello,
// [Здесь должно быть имя клиента], the grand sale has begun,
// prices are reduced by 20%!', игнорировать клиентов, которым нет 18-ти лет

// task 4
// Дан массив: [1, 10, true, 'hello', 'JS', null, false, 0, {title: 'Samsung', price: 1000}], задача,
//  отфильтровать массив, оставив только строки и числа
// let arr1 = [1, 10, true, 'hello', 'JS', null, false, 0, {title: 'Samsung', price: 1000}]
// task 5
// Дана строка: 'Hello, I\'m Jack. I\'m 25 years old and I Frontend developer!',
// вывести в консоль символы у которых четный индекс
// let arr = "'Hello, I'm Jack. I'm 25 years old and I Frontend developer!";
// for (let i = 0; i > arr.length; i++) {
//   if (i.length % 2 === 0) {
//   }
//   console.log(i);
// }

// task 6
// Дан многомерный массив состоящий из строк:
// const names = [
//   [
//     ["Helen", "Tom"],
//     ["Jack", "Peter"],
//   ],
//   [
//     ["Jessica", "Bob"],
//     ["Jimm", "John"],
//   ],
//   [
//     ["Alexa", "Jessy"],
//     ["David", "Paul"],
//   ],
// ];
// let result = [];
// for (let i of names) {
//   for (let j of i) {
//     for (let z of j) {
//       if (z.length > 4) result.push(z);
//     }
//   }
// }
// console.log(result);

// , задача: вывести в консоль только те имена, длинна которых больше 4-х символов

// task 7
// Проверьте все ли элементы в массиве number
// [1,2,3,4,5] --> true
// [1,"2","3",4,5] --> false
// let arr = [1,2,3,4,5]

// task 8
// найдите разницу в возрасте между самого старшего и самого младшего в семье
// дан массив с возрастами, нужно возвращать новый массив
// [возраст старшего,возраст младшего,разница]
// [12,74,44,28,59] --> [74,12,62]

// task 9
// Напишите цикл, который за 7 вызовов console.log выводит такой ромбик:
// let str = "";
// let sum = [];
// for (let i = 1; i <= 7; i++) {
//   sum += "#";
//   console.log(sum);
// }
// let str1 = "";
// let sum1 = [];
// for (let i = 7; i > 1; i--) {
//   sum1 += "#";
// }
// console.log(sum1);
// let str2 = "";
// let sum2 = [];
// for (let i = 6; i > 1; i--) {
//   sum2 += "#";
// }
// console.log(sum2);
// let str3 = "";
// let sum3 = [];
// for (let i = 5; i > 1; i--) {
//   sum3 += "#";
// }
// console.log(sum3);
// let str4 = "";
// let sum4 = [];
// for (let i = 4; i > 1; i--) {
//   sum4 += "#";
// }
// console.log(sum4);
// let str5 = "";
// let sum5 = [];
// for (let i = 3; i > 1; i--) {
//   sum5 += "#";
// }
// console.log(sum5);
// let str6 = "";
// let sum6 = [];
// for (let i = 2; i > 1; i--) {
//   sum6 += "#";
// }
// console.log(sum6);
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ######
// #####
// ####
// ###
// ##
// #

// task 10
// Вам дан целое число n и строку str и возвращает строку, повторяющуюся ровно n раз.

// let n = 3;
// let str = "hello";

// вывод:
// "hellohellohello"

// task 11
// Вам дан целое число n и вывести следующий результат
// let n = 10;
// for (let i = 1; i <= n; i++) {

//   console.log(i + "-");
// }
// 1-2-3-4-5-6-7-8-9-10

// task 12
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);

// task 13
// Найдите самый длинный элемент массива и выведите в консоль
// "Hello my name is John"
// let arr = "Hello my name is John"
// for (let i = 0;i > arr.length;i++){
//     if (i > ) {

//     }
// }

// task 14
// Так же найдите самый короткий элемент этого же массива
