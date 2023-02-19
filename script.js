//Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

//const Nummer =prompt("write nummer")

//const newPrice = Nummer - Nummer * 10 / 100 

//console.log(newPrice)

//===============================================================


//Написать программу, которая получает два числа и выводит наименьшее

//const number1 = prompt("Write Erste Number")
//const number2 = prompt("Write zweite Number")

//if (number1<number2) {
  //  console.log(number1)
//} else (number2>number1) 
  //  console.log (number2)

  //===============================================================


//Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’


    //const a = prompt("Schrieben Sie bitte eine Nummer")

    //if (a<100) {
      //  console.log("Number less than 100")
    //} else if (a>100) {
      //  console.log("Number greater than 100")
    //}  else  (a = 100) 
    //console.log ("the number is 100") 


    //===============================================================

    //Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, или ‘Hi, ’, если пользователь несовершеннолетний.

    //const name = prompt("Введите ваше имя: ")
    //const age = prompt("Years")

   //if (age >= 18)
    //console.log ("Hello, " + name + "!")
   //else{
    //console.log("Hi, " + name + "!")
   //}
   


    //===============================================================



//Создайте массив из строк, чисел, NaN и объектов. Пример: ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]
//Задача 1
//Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент массива: строкой, числом или ни тем, ни другим (используя функции isNaN и typeof).
//Задача 2
//Просуммируйте все числа в массиве и выведите результат в консоли. Игнорируйте нечисловые элементы.


    const array = ['hello', 1, { name: 'John' }, 'world', 2, 4,7,10,  { name: 'Jane' }, NaN]

    for (let index = 0; index < array.length; index++) {
        console.log(isNaN(array))
        }

        let sum=0

        for (let index = 0; index < array.length; index++) {
          const num = Number(array[index])
          if(!isNaN(num)) {
            sum += num; 
          }
        }
        console.log(sum);

        














    