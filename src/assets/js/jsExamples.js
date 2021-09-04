
const myString = "Hi!";
for(character of myString) {
    // console.log(character);  // H   i   !
}

// const myObject = {name: 'kurt', age: 56};
// for(key in myObject) {
//     // console.log(key);
//     console.log(myObject[key]);
// }

const myObject = {name: 'kurt', age: 56};	
for(const key in myObject) {	
  // .hasOwnProperty() filters out key-value pairs belonging to prototype (this doesn't seem to need it tho)	
  if(myObject.hasOwnProperty(key)) {	
    console.log('key:', key)	
    console.log('value:', myObject[key]); // Note that myObject.key returns undefined.	
  }	
}	




