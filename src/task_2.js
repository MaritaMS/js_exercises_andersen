/* Создайте функцию filter(arr,func),
 * которая получает массив arr и возвращает новый, в который
 * входят только те элементы arr , для которых func возвращает true.
 */
// .. ваш код для filter
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(
  filter(arr, function (a) {
    return a % 2 == 0;
  })
); // 2,4,6

module.exports = filter;
