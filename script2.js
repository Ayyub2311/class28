// const fetchData = async() => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();

// const user = data[0]
// const {name: userName, address: {city}, company: {name} } = user;

// console.log(userName, city, name);   

// const user1 = data[1]
// const {name: userName1, address: {city: city1}, company: {name: name1} } = user1;

// console.log(userName1, city1, name1);

// const user2 = data[2]
// const {name: userName2, address: {city: city2}, company: {name: name2} } = user2;

// console.log(userName2, city2, name2); 

// };

// fetchData()

const restaurant = {
    name: "EVOS",
    mainMenu: ["lavash", "burger", "hotdog"],
    drinks: ["chay", "coffee", "coke", "water"],
  
}

const menu = [...restaurant.mainMenu, ...restaurant.drinks]
console.log(menu);

const [,,a,,b] = menu;
console.log(a,b);