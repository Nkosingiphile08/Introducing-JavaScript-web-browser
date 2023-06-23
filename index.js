console.log(document)
const myMessage = document.querySelector('.myMessage');
console.log(myMessage);
myMessage.innerText = 'This is a message in the DOM!'

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    myMessage.innerText = 'Button pressed'
});
const inputBox = document.querySelector('.theInputValue');

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
    }
});


myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})

setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!'
}, 3000 );
const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitList = document.querySelector(".fruits");

for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}
const listItemElements = document.querySelectorAll('li');

listItemElements.forEach(function(element) {
 
  element.style.listStyle = 'none';

});

const theMessageButton1 = document.querySelector('.theMessageButton1');
theMessageButton1.addEventListener('click', function() {
    alert("button pressed, Thank you!")
});
const buttonElements = document.getElementsByTagName('button');
for (const i = 0; i < buttonElements.length; i++) {
  const button = buttonElements[i];
 
  button.style.backgroundColor = 'blue';
  button.style.color = 'white';
}
