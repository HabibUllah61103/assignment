// -----------------------JavaScript assingment 

// ------------------------Answer 1

function addNumberClosure(n) {
  return function (x) {
    return x + n;
  }
}

// ---------------------------Answer 2

function searchArray(arr, val) {
  if (arr.length === 0) {
    return false;
  } else if (arr[0] === val) {
    return true;
  } else {
    return searchArray(arr.slice(1), val);
  }
}
// ---------------------------Answer 3

function addParagraph(text) {
  // create a new paragraph element
  const newParagraph = document.createElement('p');

  // set the text content of the new paragraph element
  newParagraph.textContent = text;

  // append the new paragraph element to the body of the HTML document
  document.body.appendChild(newParagraph);
}
addParagraph('This is a new paragraph!');


// ---------------------------Answer 4

function addListItem(text) {
  // create a new list item element
  const newListItem = document.createElement('li');

  // set the text content of the new list item element
  newListItem.textContent = text;

  // find the unordered list element in the HTML document
  const unorderedList = document.querySelector('ul');

  // append the new list item element to the unordered list
  unorderedList.appendChild(newListItem);
}
addListItem('This is a new list item!');


// ---------------------------Answer 5

function changeBackgroundColor(element, color) {
  // set the background color of the HTML element
  element.style.backgroundColor = color;
}
// find the HTML element you want to change the background color of
const myElement = document.getElementById('my-element');

// call the changeBackgroundColor function with the element and color arguments
changeBackgroundColor(myElement, 'red');


// ---------------------------Answer 6

function saveToLocalStorage(key, obj) {
  // convert the object to a JSON string
  const objStr = JSON.stringify(obj);

  // save the JSON string to localStorage using the specified key
  localStorage.setItem(key, objStr);
}
const myObj = { foo: 'bar', baz: [1, 2, 3] };

// call the saveToLocalStorage function with the key and object arguments
saveToLocalStorage('myObjKey', myObj);


// ---------------------------Answer 7

function getFromLocalStorage(key) {
  // retrieve the JSON string from localStorage using the specified key
  const objStr = localStorage.getItem(key);

  // convert the JSON string back to an object
  const obj = JSON.parse(objStr);

  // return the object
  return obj;
}
// call the getFromLocalStorage function with the key argument
const myObj = getFromLocalStorage('myObjKey');

// use the returned object as needed
console.log(myObj.foo); // logs 'bar'
console.log(myObj.baz); // logs [1, 2, 3]


// ---------------------------Answer 8

function saveObjToLocalStorage(obj) {
  // save each property of the object to localStorage
  for (const [key, value] of Object.entries(obj)) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // retrieve the saved properties and create a new object
  const newObj = {};
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }
  }

  // return the new object
  return newObj;

}
const myObj = { foo: 'bar', baz: [1, 2, 3] };

// call the saveObjToLocalStorage function with the object argument
const savedObj = saveObjToLocalStorage(myObj);

// use the returned object as needed
console.log(savedObj.foo); // logs 'bar'
console.log(savedObj.baz); // logs [1, 2, 3]
