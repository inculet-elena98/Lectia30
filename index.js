// const list = [1, 2, 3, 4, 5, 6, 7, 1]
// const findUniq = (arr) => {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i])
//     }
//   }
//   return result
// }
// console.log(findUniq(list))


// const list = ['str', 'str1', 'str2', 'str3', 'str4', 'str5']
// const findItem = (arr, item) => {
//   return arr.some((element, idx) => element === item && (idx + 1) % 2 === 0)
// }
// console.log(findItem(list, 'str'))


// const list = ['str', 'str1', 'str2', 'str3', 'str4', 'str5']
// const findItem = (arr, item) => {
//   return arr.some((element, idx) => element === item && (idx + 1) % 2 === 0)
// }
// console.log(findItem(list, 'str1'))


// const list = ['str', 'str1', 'str2', 'str3', 'str4', 'str5']
// const findItem = (arr, item) => {
//   return arr.some((element, idx) => element === item && idx > 2)
// }
// console.log(findItem(list, 'str1'))


// const list = [
//   { name: 'Boris', age: 30 },
//   { name: 'Alex', age: 32 },
//   { name: 'Vasile', age: 31 }]
// const obj = {
//   name: 'Vasile', age: 31
// }
// const filterList = (arr.item)=>{
//   return arr.filter((element)=>JSON.stringify(element)!==JSON.stringify)
// }
// console.log(findItem(list, obj))


// const renderSquare = (num) => {
//   let side = ''
//   for (let i = 1; i <= num; i++) {
//     side += '*'
//   }
//   for (let i = 0; i <= num; i++) {
//     console.log(side)
//   }
// }
// renderSquare(4)


// const arr = [1, 1, 1, 1, 1, 1]
// console.log(arr.every(item => item === arr[0]))


// const arr = [1, 1, 1, 1, 1, 2]
// console.log(arr.every(item => item === arr[0]))


// const date = new Date()
// console.log(date)


// const date = new Date(1990, 1, 15, 15, 30, 50, 400)
// console.log(date)


// const date = new Date(1990, 1, 15, 15, 30, 50, 400).toLocaleString()
// console.log(date)


// const date = new Date(1990, 1, 15, 15, 30, 50, 400).toLocaleTimeString()
// console.log(date)


// const date = new Date(1990, 1, 15, 15, 30, 50, 400).toLocaleDateString()
// console.log(date)


// const date = new Date(1990, 1, 15, 15, 30, 50, 400)
// console.log(date.getFullYear())


// const date = new Date(1990, 1, 15, 15, 30, 50, 400)
// console.log(date.getMonth())


// const date = new Date(1990, 1, 15, 15, 30, 50, 400)
// console.log(date.getMinutes())
// console.log(date.getMilliseconds())
// console.log(date.getHours())


// const date = new Date(2023, 11, 15, 15, 30, 50, 400)
// console.log(date.getDay())


// const date = new Date(2023, 11, 15, 15, 30, 50, 400)
// console.log(date.getHours())
// date.setHours(5)
// console.log(date.getHours())


// const date = new Date(2023, 11, 15, 15, 30, 50, 400)
// console.log(date.getHours())
// console.log(Date.now())


// const date = new Date(2023, 11, 15, 15, 30, 50, 400)
// console.log(date.getTime())
// console.log(Date.now())


// const now = Date.now()
// const showTime = new Date(now)
// console.log(showTime)




// const time = document.getElementById('time')
// // setTimeout(() => {
// //   console.log('1 sec delay')
// // }, 1000)
// // setInterval(() => {
// //   console.log('1 sec delay')
// // }, 1000)
// let timeInterval

// const startCount = () => {
//   clearInterval(timeInterval)
//   let second = 0
//   let minute = 0
//   let hour = 0

//   timeInterval = setInterval(() => {
//     time.innerHTML =
//       (hour ? hour + ':' : '') +
//       (minute < 10 ? '0' + minute : minute) + ':' +
//       (second < 10 ? '0' + second : second)

//     second++
//     if (second === 60) {
//       minute++
//       second = 0
//     }
//     if (minute === 60) {
//       hour++
//       minute = 0
//     }
//   }, 1000)
// }
// const stopInterval = () => {
//   clearInterval(timeInterval)
// }




// const time = document.getElementById('time')
// const text = 'variabile'

// time.innerHTML = `<div><p>${text}</p></div>`



// const item = []

// const showType = (arg) => {
//   return typeof arg
// }
// console.log(showType('null'))
// console.log(showType(9))
// console.log(showType(undefined))



// const checkNumber = (num1, num2) => {
//   return num1 === 50 || num2 === 50 || num1 + num2 === 50
// }
// console.log(checkNumber(51, 50))


// const checkNumber = (num1, num2) => {
//   return num1 === 50 || num2 === 50 || num1 + num2 === 50
// }
// true && true
// false || true
// console.log(checkNumber(51, 50))


// const checkIsArray = (arg) => {
//   return Array.isArray(arg)
// }
// console.log(checkIsArray('ggg'))


// const arr = [1, 2, 3, 'str', 'str1', 4, 5, 6]
// const convertToStr = (list) => {
//   return list.join('-')
// }
// console.log(convertToStr(arr))


// const number = 345678
// const reverseNumber = (num) => {
//   return num.toString().split('').reverse().join('')
// }
// console.log(reverseNumber(number))


// const str = 'mcdhfcbdsjfc'
// const sortStrh = (str) => {
//   return str.split('').sort((a, b) => a < b ? -1 : 1).join('')
// }
// console.log(sortStrh(str))


// const str = 'the capital of great britan'
// const firstLetter = (str) => {
//   return str.split(' ').map((item) => {
//     return item[0].toUpperCase() + item.slice(1, item.length)
//   }).join(' ')
// }
// console.log(firstLetter(str))


// const str = 'the capital of great britan'
// const longestWord = (str) => {
//   return str.split(' ').reduce((acc, cur) => acc.length > cur.length ? acc : cur)
// }
// console.log(longestWord(str))


// const str = 'the capital of great britan'
// const longestWord = (str) => {
//   return str.split(' ').reduce((acc, cur) => acc.length < cur.length ? acc : cur)
// }
// console.log(longestWord(str))


// const arr = [2, 3, 4, 5, 61, 7, 8, 9, 10]
// const findSecondMinMax = (list) => {
//   const sorted = list.sort((a, b) => a - b)
//   console.log(sorted)
//   return 'min: ' + sorted[1] + ', max: ' + sorted[sorted.length - 2]
// }
// console.log(findSecondMinMax(arr))


const num = 25468
const formatNumber = (number) => {
  return number.toString().split('').reduce((acc, cur) => {
    return acc[acc.length - 1] % 2 === 0 && cur % 2 === 0 ? acc + '-' + cur : acc + cur
  }, '')
}
console.log(formatNumber(num))