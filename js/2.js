console.log('this is strings operataion method');
let name = "Ashis";
let greeting = "Good Morning";
console.log(name + ' ' + greeting);
let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";
console.log(html)
html = html.concat('this', ' str2');
console.log(html)
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase())
console.log(HTMLBodyElement)
console.log(html[0] ,  html[1]);
console.log(html.indexOf('<'))
console.log(html.charAt(4))
console.log(html.endsWith('str2'))
console.log(html.includes('My'))
console.log(html.substr(1,4))
console.log(html.slice(1, -5))
console.log(html.split('>'))

console.log(html.replace('this', '<<<'))


// template Literal 
let fruit1 = "Orange"
let fruit2 = "Apple"
let myHtml = `Hello ${name}

            <h1> This is my heading </h1>
            <p> YOu also like ${fruit1} and ${fruit2}..
`
console.log(myHtml);
document.body.innerHTML = myHtml;

// console.clear()