/* Используя метод call(), привяжите this в функции func к объекту obj так,
 * чтобы вызов функции func выводил на экран значение свойства a объекта obj (исправлять в последней строке)
 */
let obj = { a: 10, b: 12 };
function func() {
  console.log(this.a);
  return this.a;
}
func.call(obj);

module.exports.func = func;
