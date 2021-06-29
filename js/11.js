console.log('this is eventListerer tutorial')
document.getElementById('heading').addEventListener('click', function(e){
    console.log('You have clicked');
    let variable = e.target;
    variable = e.target.id;
    variable = e.target.className;
    variable = e.target.innerText;
    variable = e.target.innerHTML;
    console.log(variable);
// location.href='https://codewithharry.com'
});