const content = document.querySelector('.content');

const paragraph = document.createElement('p');
let textNode = document.createTextNode('Hey i\'m red!');
paragraph.style.color = 'red';
paragraph.appendChild(textNode);

content.appendChild(paragraph);

const blueH3 = document.createElement('h3');
blueH3.textContent = 'I\'m a blue h3';
blueH3.style.color = 'blue';
content.appendChild(blueH3);

const pinkDiv = document.createElement('div');
pinkDiv.style.backgroundColor = 'pink';
pinkDiv.style.borderColor = 'black';
pinkDiv.style.borderStyle = 'solid';
content.appendChild(pinkDiv);

const divH1 = document.createElement('h1');
divH1.textContent = 'I\'m a div';
pinkDiv.appendChild(divH1);

const divParagraph = document.createElement('p');
let divParagraphText = document.createTextNode('ME TOO!');
divParagraph.appendChild(divParagraphText);
pinkDiv.appendChild(divParagraph);


/*Add the following elements to the container using ONLY javascript - do not add any HTML or CSS code.

a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background
color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the div with
 createElement, append the <h1> and <p> to it
     before adding it to the container.*/