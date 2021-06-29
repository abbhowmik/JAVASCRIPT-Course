console.log('this is a tutorial of creating an element')

let element = document.createElement('li');
let text = document.createTextNode('this is a new li')
element.appendChild(text);
element.id = 'childul';
element.className = 'childLi';
element.setAttribute('title', 'mytitle')
// element.innerHTML = "<b> this is another</b>"
// element.innerText = 'the main'

let NewNode = document.querySelector('ul.this');
NewNode.appendChild(element);
// console.log(NewNode)

// console.log(element)


// let elem2 = document.createElement('h3');
// elem2.id = 'ele';
// elem2.className = 'elem';
// elem2.setAttribute('title', 'newtitle');
// let tnode = document.createTextNode('text of elem2');

// elem2.appendChild(tnode);
// console.log(elem2)
// // replacing with element

// element.replaceWith(elem2);
// console.log(element)


// let ui = document.getElementById('myul');
// ui.replaceChild(element, document.getElementById('ful'));
// ui.removeChild(document.getElementById('lul'));
// let p = elem2.hasAttribute('class')
// elem2.removeAttribute('id')
// console.log(elem2, p)


let node = document.createElement('a');
let txt = document.createTextNode('Go to CodeWithHarry.com');
node.href = "https://codewithharry.com";
node.appendChild(txt);
console.log(node)
let rep = document.getElementById('new');
rep.replaceChild(node, document.getElementById('newid'));