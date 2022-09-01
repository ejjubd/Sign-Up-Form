





    const submit = document.querySelector('.form-grid')
    submit.addEventListener('submit', function (e) {
        e.preventDefault()
      let  password = e.target.password.value
      let  confirmPassword = e.target.confirm_password.value
      

      if(password.length < 6 ) {
        document.getElementById('password').style.border = '1px solid red'
        document.getElementById('confirm_password').style.border = '1px solid red'
        document.getElementById('password-length').style.display = 'block'
        return 
    } else document.getElementById('password-length').style.display = 'none'
      

    if (password != confirmPassword) {
       
            document.getElementById('password').style.border = '1px solid red'
            document.getElementById('confirm_password').style.border = '1px solid red'
            document.getElementById('matching-password').style.display = 'block'
             return
        } 
   
     if (password.length >= 6 && password === confirmPassword) {
        document.getElementById('password').style.border = ''
            document.getElementById('confirm_password').style.border = ''
            document.getElementById('matching-password').style.display = 'none'
            document.getElementById('password-length').style.display = 'none'

    }

    

  })


