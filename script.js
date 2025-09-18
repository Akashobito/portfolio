const checkBox = document.querySelector('.js-check-box');
checkBox.addEventListener('click',function() {
  if(document.querySelector('.js-check-box').classList.contains('before')){ //before class is used like boolean flag state tracking/monitoring
    document.querySelector('.js-check-box').classList.add('check-box-after');
    document.querySelector('.js-check-box').classList.remove('before');
    document.querySelector('.js-check-box').innerHTML = '<i class="fa-solid fa-check check-mark"></i>'; //inserting tick mark in check box 
  }else{ 
    document.querySelector('.js-check-box').classList.add('before');
    document.querySelector('.js-check-box').classList.remove('check-box-after');
    document.querySelector('.js-check-box').innerHTML = '';
  }
});

const eyeLogo = document.querySelector('.js-eye-logo');
eyeLogo.addEventListener('click',function() {
  if(document.querySelector('.js-eye-logo').classList.contains('before')){ //before class is used like boolean flag state tracking/monitoring
    document.querySelector('.js-eye-logo').classList.add('check-box-after');
    document.querySelector('.js-eye-logo').classList.add('fa-eye-slash');
    document.querySelector('.js-eye-logo').classList.remove('before');
    document.querySelector('.js-eye-logo').classList.remove('fa-eye');
  }else{
    document.querySelector('.js-eye-logo').classList.add('before');
    document.querySelector('.js-eye-logo').classList.add('fa-eye');
    document.querySelector('.js-eye-logo').classList.remove('check-box-after');
    document.querySelector('.js-eye-logo').classList.remove('fa-eye-slash');

  }
});
// eyeLogo.innerHTML = '<i class="fa-regular fa-eye-slash eye-logo js-eye-logo before"></i>';