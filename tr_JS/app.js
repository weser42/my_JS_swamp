"use strict"
//let oneH=80;
//let timePerDay = 5;
//let timePerWeek = 5;
//let timeLimit = 11;
//let hoLim=40;
//let projectTime = 8;
//let workTime=1;
//let week=["pn","wt","sr","ch","pt","sb","ws"];
////console.log(week[1]);
//let summTime= week.concat(week);
////console.log(summTime[10]);
////console.log(summTime[11]);

//for (let i=0; i<=10; i++){
//   //let workDay=[]
//   //let workTime=1;
   
//   //workDay.push(summTime[i])
//   if (summTime[i] !== summTime[5] && summTime[i] !== summTime[6] ) { console.log(` ${workTime = i ++}`)};  //workDay.push(summTime[i]);
   
   
//   //workDay.push(summTime[i])

////summTime[i];
////console.log(workDay);
////console.log(workTime*5);
////console.log(summTime);

//}
//console.log(`${workTime*5>hoLim} + ${hoLim*oneH} `);
// расчет процентов по депозиту

//let orignDeposit = 12000;
//let prDepositperYear = 7;
//let prDepositperMonth = 7/12;
//let onePersent;
//let purpose = 13000;
//for (let i = 0; i < 24; i++){
//   let persentPerMonthNew = orignDeposit/100*prDepositperMonth;
//let a = orignDeposit + persentPerMonthNew;
//    orignDeposit = a;
//   //let b = orignDeposit+newarr;
//   console.log(`${i} : ${orignDeposit}`);
//}
//console.log(orignDeposit);
// Проверка на робота
//let a;
//const res = prompt(`Сколько будет 7+-15?`)

//switch(true){
//   case res ==="iam not a Robot":
//   case Number(res)===22:
//   case Number(res)===-8:
//      console.log('Sucsess');
//      break;
//   default:
//      console.log('You are Robot');
//}

//  ---- Методы массива
//// работа с массивами
//const users = ["Ann", "Kate", "Kriss"];
//console.log(users);
//const a1 = users[2] = "Vera";
//console.log(a1);
//console.log(users);
//users[5] = "Nike";
//console.log(users);
////  в конец
//// мутирует изначальный массив
//users.push("Mike");
//console.log(users);
//users.unshift("Vasia");
////in yhe start
//console.log(users);
//// del from the end
////мутирует изначальный массив
//users.pop();
//console.log(users);
//// del fromn the start
//users.shift()
//console.log(users);

<<<<<<< HEAD
let arr = [2, 1, 1, 1, 4, 5, 78, 9, 1, 2, 2, 67];

function uniq_fast(arr) {
   var seen = [];
   var out = [];
   var len = arr.length;
   var j = 0;
   
   for(var i = 0; i < len; i++) {
        var item = arr[i];
      
        console.log(item);
      console.log(seen[item]);
        if(seen[item] !== 1) {
         
              seen[item] = 1;
              out[j++] = item;
        }
   }
   //console.log(out);
   return out;
}

console.log(uniq_fast(arr));
//uniq_fast(arr)
=======
//// поиск индекса элемента массива (ищет первое вхожденияе)
//const role = ["user", "admin", "manager"];
//console.log(role.indexOf("admin"));

//// если элемента нет - выдвет -1
//const el2 = role.indexOf("superuser");
//console.log(el2);
//if (role.indexOf('admin')>=0){
//   console.log('Доступ есть');
//}
//// Проверка на существование элемента в массиве
//console.log(role.includes("admin"));
//console.log(role.includes("superuser"));
//// Общепринятая проверка 
//if (role.includes('admin')>=0){
//   console.log('Доступ есть');
//}

const roles = ["user", "admin", "manager", "superuser"];
//// slice не модифицирует исходный массив (бвырезает с указанного элемента)
////с одним аргументом slice берет по указанному индексу и вырезает до конца
//const res = roles.slice(2);
//console.log(roles);
//console.log(res);
//// с двумя аргументами - 1 аргумент начальный инедекс , 2- конечный индекс (не включая этот номер, т.е. n < указанного числа)
//const res2 = roles.slice(2, 3);
//console.log(roles);
//console.log(res2);
//// может принемать отрицательные значения (-n - указывает какое количество элементов взять с тконца массива)
//const res3 = roles.slice(-1);
//// эквивалентно (в первом случе передаться массив, во втором случае передасться конкретное значение массива)
//const  res4 = roles[roles.length-1]
//// для получения значения
//const res5 = roles.slice(-1)[0];
//console.log(roles);
//console.log(res3);
//console.log(res4);
//console.log(res5);
//// 1 - начальный индекс, -2 - конечный индекс (начиная с конца, т.е. -1 , -2, ......)
//const res6 = roles.slice(1, -2);
//console.log(res6);
//console.log(roles);
//// splice - мутирует изначальный массив
//он их вырежет и оставит изначальный массив без них
//const res7 = roles.splice(2);
//console.log(res7);
//console.log(roles);
// 1 аргумент индекс элемента с которого  взять, 2 аргумент - (количество сколько взять элементов) длина этих элементов
//со 2-го элемента взять 2 элемента
//const res8 = roles.splice(2,2);
//console.log(res8);
//console.log(roles);
//для удаления последнего элемента массива
//const res9 = roles.splice(-1);
//console.log(res9);
//revers - модифицирует массив
//console.log(roles);
//const res10 = roles.reverse();
//console.log(roles);
//console.log(res10);
//console.log(roles);

//const newRoles = ["susadmin", "developer"];
//const res11 = roles.concat(newRoles);
//console.log(res11);

// -----из массива в строку и обратно
// на вход подается символ при помощи которго будет происходить разбиение чтроки на элементы массива
//тут 1 строка - она не будет модифицирована при помощи split
//const myUrl = "auth/user/login"
//// тут 3 элемента массива
//const res12 = myUrl.split("/");
//console.log(res12);

//// объединение элементов массива в строку можно сделать при помощи join
//console.log(roles.join("-"));

// ------- Упражнение с массивами 
//const tasks = ["Задача 1", "Задача 3"];
////добавление задачи в конец

//function addToTheEnd (arr){
//   return tasks.push(arr);
//}
////удаление задачи по названию
//let funcDel = function(arr){
//   const elemArrayIndex = tasks.indexOf(arr);
//      //console.log(elemArrayIndex);
//      //для проверки на существование элемента
//      if (elemArrayIndex === -1){
//         return;
//      }    
//     //для нахождения и удаления этого элемента
//    return tasks.splice(elemArrayIndex, 1)
//}
////перенос задачи в начало списка по названию
//let trTaskToTheSrart  = arr =>{
//   let findElem = tasks.indexOf(arr);
//   //console.log(findElem);
//   //так можно взять элемент массива в строчном виде
//   //const oldTask = tasks[findElem];
//   //console.log(oldTask);
//if (findElem ===-1){
//   return;
//}
//   //console.log(findElem);
//   let cutFindElem = `${tasks.splice(findElem, 1)}`;
//   //console.log(cutFindElem);
//   return tasks.unshift(cutFindElem);

//}
//console.log(tasks);
//addToTheEnd("Задача 2");
//console.log(tasks);
//funcDel("Задача 2");
//console.log(tasks);
//trTaskToTheSrart("Задача 3")
//console.log(tasks);

// ----------- принцип DRY (Do not repit yourself) - 
// - необходимо придерживаться принципа не повторения 
//(повторяющуюся часть кода необходимо выносить  в отдельную функцию)
//перенос задачи в начало списка по названию
//let newTrTaskToTheSrart  = arr =>{
//const delElem = funcDel(arr)
//// так можно перевести элемент массива в строку
////console.log(delElem[0]);
////или так
////const toStr = `${delElem}`;
////console.log(toStr);
//// всегда необходимо проводить проверку
//if (!delElem){
//   return;
//}
//return tasks.unshift(delElem[0]);  
//   //let cutFindElem = `${tasks.splice(findElem, 1)}`;
//   ////console.log(cutFindElem);
//   //return tasks.unshift(cutFindElem);

//}

//newTrTaskToTheSrart("Задача 3")
//console.log(tasks);

//  ---------------Деструктуризация
//const userData = ["Anton", 18, "Moscow"];
//function getData(){
//   return ["Anton", 18, "Moscow"];
//}
////const userName = userData[0];
////const age = userData[1];
////const city = userData[2];

////// можно так
////const temp1 = getData();
////const userName1 = temp1[0];
////// или так
////const userName = getData()[0];
////const age = getData()[1];
////const city = getData()[2];

////console.log(userName, age, city);
//// теперь используем Деструктуризацию на функции
//const [userName, age, city] = getData();
//console.log(userName, age, city);

//// теперь используем Деструктуризацию на массиве
//const [userName1, age1, city1] = userData;
//console.log(userName1, age1, city1);

//// если элемент не нужен, его можно опустить
////ниже плохой пример использования
//const [userName2, , city2] = userData;
//console.log(userName2, city2);
//// хороший подход (использовать нижнее подчеркивание) - все понимают, что эту переменную не используем
//const [userName3, _, city3] = userData;
//console.log(userName3, city3);
// ------- REst оператор 

//const data = [1, 2, 3, 4, 5, 6];
//// при помощи rest оператора - можно положить оставшуюся часть массива 
//// берет оставшуюся часть (этот оператор можно использовать только в конце (в начале (можно, но не стоит) и середине - нельзя))
//const [one, two, ...others] = data;
//console.log(one, two, others);
//  ---- Упражнение - Функция разбора URL
// делаем URL парсер

//const myUrl = "https://purpleschool.ru/course/javascript";
//const myUr2 = "purpleschoolru/course/javascript";
//мое решение
//function myParserUrl (str){
//  const colDot = myUrl.indexOf(":");
//console.log(colDot);

//const arrWithoutDot = myUrl.split(':').splice(0,1);
//console.log(arrWithoutDot);
//   const newArr = myUrl.split('://');
//   //console.log(myUrl);
//   const proto = `${newArr.slice(0,1)}`;
//   //console.log(newArr);
//   const posOfdomain = `${newArr[1]}`;
//   //console.log(posOfdomain );
//   const newArr2 = posOfdomain.split('/');
//   console.log(newArr2);
//   const domain = `${newArr2.splice(0,1)}`;
//   console.log(newArr2);
//   const path = `/${newArr2.join("/")}`;
//   console.log(newArr2);
//   return [proto, domain, path]
//}
//myParserUrl(myUrl)
//const [proto, domain, path]= myParserUrl(myUrl);
//console.log([proto, domain, path]);
// ----- правильное решение задачи 

//function getUrlParts(url){
//   const [protocol, _, host, ...path] = url.split('/');
//   if (protocol === "https:" || protocol === "http:"){
//      if (!host.includes(".")){
//         return
//      }
//   console.log(protocol, _, host, path);
//   console.log(`Протокол : ${protocol.split(":")[0]}`);
//   console.log(`Домен : ${host}`);
//   console.log(`Путь : /${path.join("/")}`);
//}
//}
//getUrlParts(myUr2)
//Цикл for
//for (let i=0; i<=10; i++){
//console.log(`Наш баланс ${i}`);
//}

////----------Break и continue
//const tasks = ["Задача 1", "Задача 2", "Задача 3"];
//for (let i = 0; i<tasks.length; i++ ){
//   if (tasks[i] === "Задача 2"){
//      //при выполнении условия переходит на новый виток цикла
//      continue;
//   }

//   console.log(tasks[i]);
//}
//console.log('-----------');
//for (let j = 0; j<tasks.length; j++ ){
//   if (tasks[j] === "Задача 2"){
//      //прекращает выполнение цикла
//      break;
//   }

//   console.log(tasks[j]);
//}
//--------- Упражнение перевернуть массив
//const arr =["!", "JS", "люблю", "Я"];
//let mass = [];
//for (let i = arr.length - 1; i>=0; i--){
//   mass.push(arr[i]);   
//}
//console.log(mass);
//console.log(mass.join(" "));
// -------- Цикл в цикле
//for (let i = 1; i < 5; i++){
//   console.log(`Цикл 1 - ${i} `);
//   for(let j = 1; j < 5; j++){
//      console.log(`Цикл 2 - ${j} `);
//   }
//}
// Прример
//const tasks = [[1,"Задача 1"], [2, "Задача 2"]];

//for (let i = 0; i < tasks.length; i++){
   
//   for(let j = 0; j < tasks[i].length; j++){
//      console.log(i,j);
//      console.log(tasks[i][j]);
//   }
//}
//------ while

//for (let i = 1; i<=5; i++){
//   console.log(`Вывод - ${i}`);
//}
//console.log(i);
//let j=1;
//while(j < 5){
//   console.log(`Вывод while - ${j}`);
//   j++;
//}

//const arr = [1,2,3,4,7];
//for (let i = 0; i<=arr.length; i++){
//   if (arr[i]>5){
//      break;
//   }
//   //console.log(`Вывод - ${arr[i]}`);
//}
//let ar = 0;
//while (arr[ar] <= 5 && ar < arr.length ){
//   //console.log(arr[ar]);
//   ar++;
//}

//// ----- do while

//let j = 0;
//do{
//   console.log(arr[ar]);
//   j++
//} while(j < 0)

//-----------Циклы for of и for in

//const arr = [1,2,3,4,7];
//for (let i = 0; i<=arr.length-1; i++){
 
//   console.log(`Вывод - ${arr[i]}`);
//}
//// для получения конкретного элемента массива (проход оп всем элементам массива)
////проход по элементам массива
////двигается по значениям массива
//for (let element of arr){
//   console.log(element);
//}
//// проход по индексам массива 
//for (let index in arr){
//   console.log(index);
//}
//// для прохода по элементам сделаем следующее
////двигаемся по индексам массива
//for (let index in arr){
//   console.log(arr[index]);
//}
//-----Упражнение раздел 9 -  баланс
let balance = 100;
const operations = [1000, -700, 300, -500, 10000];
//функция расчтета итогого баланса
 function totalBalance (elem1, elem2){
   let sum = 0;
   for(let i of elem2){
      //console.log(i);
      sum = sum + i;
      //console.log(sum);
   }
   return sum;
 }
 console.log(totalBalance(balance, operations));
>>>>>>> bc9aa5486a5bddb2da0609f8faaff82fc827080e
