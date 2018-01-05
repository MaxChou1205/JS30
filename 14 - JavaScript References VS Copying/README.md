<<<<<<< HEAD
### 實現效果
透過console.log和不同的語法，看出不同變數種類Reference和Copy的差異
### 語法
1. 一開始展示的是string、number、boolean，這類型的變數都是copy，也就是age2的值變動時不會影響到age
```
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);
```
2. 再來是array，如果是直接用=的話，就是reference，team值改動會影響到players
```
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;

console.log(players, team);
team[3] = 'Lux';
console.log(players, team);
// ['Wes', 'Sarah', 'Ryan', 'Lux'],['Wes', 'Sarah', 'Ryan', 'Lux']
```
3. 如果是用以下方式宣告，則是copy，不會影響到原array  
* [slice](https://www.w3schools.com/jsref/jsref_slice_array.asp)：會return新的array  
* [conact](https://www.w3schools.com/jsref/jsref_concat_array.asp)：會return新的array  
* [spread](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_operator)
* [array.from](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from)：會return新的array  
```
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);
```
4. object直接用=的話，也是reference的模式，原值會被改動
```
const person = {
    name: 'Wes Bos',
    age: 80
};
const captain = person;
captain.number = 99;
console.log(person, captain);
// age:99,age:99
```
5. 用以下的方法則可以copy object
* [Object.assign](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)：特別注意，一般寫法只能複製第一層的object
* JSON轉換  
    [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)：將json object轉換成string  
    [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)：將string轉成json object

```
// Object.assign
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

// json
const wes = {
    name: 'Wes',
    age: 100,
    social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
    }
};

console.log(wes);

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes));

console.log(dev); // social裡面的值不會被copy到，因為是第二層
console.log(dev2);

```
=======
### 實現效果
透過console.log和不同的語法，看出不同變數種類Reference和Copy的差異
### 語法
1. 一開始展示的是string、number、boolean，這類型的變數都是copy，也就是age2的值變動時不會影響到age
```
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);
```
2. 再來是array，如果是直接用=的話，就是reference，team值改動會影響到players
```
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;

console.log(players, team);
team[3] = 'Lux';
console.log(players, team);
// ['Wes', 'Sarah', 'Ryan', 'Lux'],['Wes', 'Sarah', 'Ryan', 'Lux']
```
3. 如果是用以下方式宣告，則是copy，不會影響到原array  
* [slice](https://www.w3schools.com/jsref/jsref_slice_array.asp)：會return新的array  
* [conact](https://www.w3schools.com/jsref/jsref_concat_array.asp)：會return新的array  
* [spread](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_operator)
* [array.from](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from)：會return新的array  
```
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);
```
4. object直接用=的話，也是reference的模式，原值會被改動
```
const person = {
    name: 'Wes Bos',
    age: 80
};
const captain = person;
captain.number = 99;
console.log(person, captain);
// age:99,age:99
```
5. 用以下的方法則可以copy object
* [Object.assign](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)：特別注意，一般寫法只能複製第一層的object
* JSON轉換  
    [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)：將json object轉換成string  
    [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)：將string轉成json object

```
// Object.assign
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

// json
const wes = {
    name: 'Wes',
    age: 100,
    social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
    }
};

console.log(wes);

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes));

console.log(dev); // social裡面的值不會被copy到，因為是第二層
console.log(dev2);

```
>>>>>>> 98eeaca7913711f12fc2e35a89b9bf3c27922082
