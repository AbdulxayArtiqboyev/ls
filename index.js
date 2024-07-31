// masala 1 rasm
// {
//     // masala 1
//     let person = {
//         name:'Abdulloh',
//         age:19,
//         job:'developer',
//         hobby:'smoking',
//         number:'777777777',
//         username:'AU',

//     }
//     for(let num in person){
//         console.log(`${num} : ${person[num]}`);
//     }

// }

// {
//     // masala 2
//     let person1 = {
//         name:'Abdulloh',
//         age:19
//     }
//     let person2 = {
//         hobby:'football',
//         interest:'drinking',
//     }
//     const obj = (Object.assign(person1,person2))
//     console.log(obj);
// }

// {
//     // masala 3
//     let array = [2,3,4,5];
//     let oxirgi = array.length -1;
//     let plus = array[oxirgi] + 1;
//     array.push(plus)
//     console.log(array);
    
// }

// {
//     // masala 4
//     let array = [1,2,3,4,5,6];
//     function arrFunc (arr){
//         let sum = 0;
//         let firtArray = arr[0]
//         for(let i = 0; i < arr.length;i++){
//             sum += arr[i]
//         }
//         if(firtArray % 2 == 0){
//                 arr.unshift(sum)
//         }
//         else{
//             arr.push(sum)
//         }
//         return arr
        
//     }
//     let result = arrFunc(array)
//     console.log(result);
    
    
// }

// {
//     // masala 5
//     let array = [1,2,3,4,5];
//     function myArray (arr){
//         let first = arr[0];
//         let second = arr[arr.length - 1]
//         arr.shift()
//         arr.pop()
//         arr.push(first)
//         arr.unshift(second)
//         return arr
//     }
//     let result = myArray(array);
//     console.log(result);
    
// }
// {
//     // masala 6


// }

// {
//     // masala 7
// }

// masala 2 rasm
// {
//     // masala 1
//     let name = prompt('ism kiriting')
//     let array = ['Abdulxay','Abdulloh','bexruz'];
//     array.push(name)
//     console.log(array);
// }

// {
//     // masala 2
//     let array1 = [1,2,3,4,5];
//     let a = []
//     let array2 = [5,6,7,8,9];
//     for(let i = 0; i < array1.length;i++){
//         console.log(array1[i]);
//     }
//     for(let i = 0; i < array2.length;i++){
//         console.log(array2[i]);
//     }
// }

// {
//     // masala 3
//     let arr = []
//     let obj = {
//         name:'john',
//         age:30,
//         job:'buisnessmen',
//         study:'najot talim',
//         travel:'us'
//     }
//     for(let key in obj){
//         arr.push(key)
//     }
//     console.log(arr);
//     console.log('lengizi shuncha :' + arr.length);
// }

// {
//     // masala 4
// }
// {
//     // masala 5
//     let obj1 = {
//         name:'Abdulloh',
//     }
//     let obj2 = {
//         age:19,
//         hobby:'music'
//     }
//     let result = Object.assign(obj1,obj2);
//     for(let num in result){
//         console.log(`${result[num]}`);
//     }
// }