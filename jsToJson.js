var faker = require('faker');
var fs = require('fs'); // require file-system

// var people = [];

// for(var i = 1; i<=5; i++) {
//     var person = {};

//     person.name = faker.name.findName();
//     person.email = faker.internet.email();
//     person.address = {
//         city: faker.address.city(),
//         country: faker.address.country(),
//         latitude: faker.address.latitude(),
//         longtitude: faker.address.longitude()
//     };

//     people.push(person);
// }

// console.log(people); // display an array of objects with lots of fake data

// console.log(JSON.stringify(people)); // convert js to json object

/*write json file into another file and send it to server */
// fs.writeFile('demo.json', JSON.stringify(people), function(err, data) {
//     console.log('File created successfully!');
// });


/* convert json to javascript object */
var data = fs.readFileSync('demo.json').toString();

var people = JSON.parse(data);
console.log(people);

people.forEach(function(elem) {
    console.log(elem.name, elem.email);
});
