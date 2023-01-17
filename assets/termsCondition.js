const signup = document.getElementById('signup-btn');
signup.addEventListener('click', (e) => {
    e.preventDefault();
    const inputcheck = document.getElementById('terms');
    if(inputcheck.checked == true){
        document.getElementById('errr').innerHTML = '';
        document.getElementById('create_customer').submit();
    }
    else{
        const error = `<p style='color:red;'> Please agree to terms & conditions</p>`;
        document.getElementById('errr').innerHTML = error;
    }
})