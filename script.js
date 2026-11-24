function getStarted(){
    // Initialisation
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password')
    const response =  document.getElementById('response');

    //Thank you Ella Asamoah,  your email address is ella@gmail.com and password is 
    response.innerText = 'Thank you ' + firstName.value + ' ' + lastName.value + ', your email address is ' + email.value + ' and password is ' + password.value;
}