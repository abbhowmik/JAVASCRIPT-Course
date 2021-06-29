console.log('this is a solution of an exercise')

let str = 'python';
let links = document.links;
// console.log(links);
let href;

Array.from(links).forEach(function(element) {
    href = element.href;
    if (href.includes(str)) {
        console.log(href);
    }
})