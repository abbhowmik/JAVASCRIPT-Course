console.log('we are now going to learn about Loops');
for(let i= 0;i<11;i++)
{
    console.log(i);
}

let arr = [1,2,35, 6]
arr.forEach(element => {
    console.log(element)
});

let obj = {
    name: 'Ashis', 
    role: 'Coder', 
    statue: 'Begginer'
}
for(let key in obj)
{
    console.log(`${key} of object is ${obj[key]}`)
    
}