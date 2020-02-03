// let b = {
//     name: "Sidor",
//     surname: "sidorovich",}
// let arr1 = new Object();
// arr1.arr11 = new  Object(b);
// console.log(arr1)

// 3 persons
// Сделать три ассоциативных массива a, b, c, в каждом из которых должны быть поля name и surname.
// let a = {name:"Roman",surname: "Skott"};
// let b = {name:"Nikolya", surname: "Oll"};
// let c = {name: "Ivan",surname:"Ivanov"};


// different fields
// Добавьте некоторые другие поля (например age, fathername, sex (пол)) так, что бы набор полей отличался у разных объектов
// let a = {name:"Roman",surname: "Skott",sex:"man",};
// let b = {name:"Nikolya", surname: "Oll",age:"25"};
// let c = {name: "Ivan",surname:"Ivanov",fathername:"Petrovich"};


// fields check
// Проверьте наличие необязательных полей у каждого из этих массивов. Если поле найдено, выведите его с помощью alert. Проверку делайте по typeof или in в if.

// let a = {name:"Roman",surname: "Skott",sex:"man"};
// let b = {name:"Nikolya", surname: "Oll",age:"25"};
// let c = {name: "Ivan",surname:"Ivanov",fathername:"Petrovich"};
// function fieldsCheck(a){
// let res='';
//     if("sex" in a){
//    res= a.sex;
// };
// if("age" in a){
//     res = a.age;
//  };
//  if("fathername" in a){
//    res+= a.fathername;
//  }
//  alert(res);
// };
// fieldsCheck(a)
// fieldsCheck(b)
// fieldsCheck(c)



// array of persons
// Добавьте несколько ассоциативных массивов с персонами в обычный массив persons, например a,b,c. Так же добавьте персону литерально ({...}).
//  Получится обычный массив с элементами-ассоциативными массивами с персонами.

// let a = {name:"Roman",surname: "Skott",sex:"man"};
// let b = {name:"Nikolya", surname: "Oll",age:"25"};
// let c = {name: "Ivan",surname:"Ivanov",fathername:"Petrovich"};
// const persons = [a,b,c,{name: "Semen",surname:"Kote"}];


// loop of persons
// Сделайте цикл, который выводит весь массив persons в форме объектов console.log(persons[i])

// persons.forEach(element => {console.log(element)
    
// });

// loop of name and surname
//Сделайте цикл, который выводит весь массив persons, но только Имя и Фамилию каждой персоны.

//let a = {name:"Roman",surname: "Skott",sex:"man"};
// let b = {name:"Nikolya", surname: "Oll",age:"25"};
// let c = {name: "Ivan",surname:"Ivanov",fathername:"Petrovich"};
// const persons = [a,b,c,{name: "Semen",surname:"Kote"}];
// persons.forEach(element => {
//     let a = element;
//     let res='';
//         if("name" in a){
//        res+= a.name;
//     };
//     if("surname" in a){
//         res += a.surname;
//      };

//      console.log(res);
    
// })

// loop of loop of values
// Сделайте цикл, который выводит весь массив persons, но только значения всех полей из объектов. Используйте вложенный цикл

// let a = {name:"Roman",surname: "Skott",sex:"man"};
// let b = {name:"Nikolya", surname: "Oll",age:"25"};
// let c = {name: "Ivan",surname:"Ivanov",fathername:"Petrovich"};
// const persons = [a,b,c,{name: "Semen",surname:"Kote"}];
// for (key in persons) {
//     let personsLoop = persons[key]
//     for (key1 in personsLoop){
//     console.log(personsLoop[key1])
//     }
// }
    
// fullName
// Сделайте цикл, которых добавляет поле fullName в каждый объект, содержащий ФИО. Учтите, что поле fathername не является обязательным.

// let a = {name:"Roman",surname: "Skott",sex:"man"};
// let b = {name:"Nikolya", surname: "Oll",age:"25"};
// let c = {name: "Ivan",surname:"Ivanov",fathername:"Petrovich"};
// let persons = [a,b,c];



// for (key in persons) {
//     let arrTest = persons[key]
// if("name" in arrTest && "surname" in arrTest){
//   arrTest['fullName']= arrTest.name+arrTest.surname;
// } 
// console.log(arrTest);

// }

// serialize
// Создайте JSON-строку из persons


// let a = {name:"Roman",surname: "Skott",sex:"man"};
// let b = {name:"Nikolya", surname: "Oll",age:"25"};
// let c = {name: "Ivan",surname:"Ivanov",fathername:"Petrovich"};
// let persons = [a,b,c];

// let newJson = JSON.stringify(persons);
// console.log(newJson);

// HTML
// Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия - колонки. 

// let a = {name:"Roman",surname: "Skott",sex:"man"};
// let b = {name:"Nikolya", surname: "Oll",age:"25"};
// let c = {name: "Ivan",surname:"Ivanov",fathername:"Petrovich"};
// let persons = [a,b,c];

   
// var str =`<table border="1">
// <caption>Persons</caption>
// <tr><th>Name</th>
//  <th>Surname</th>
// </tr>`;
// for( key in persons){
// let persons1= persons[key];
// for(key1 in persons1){
// name = persons1.name;
// surname = persons1.surname;


// }
//  str += `<tr><td>${name}</td><td>${surname}</td></tr>`;
// }

// str += "</table>"
// console.log(str)
// document.write(str)