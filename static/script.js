  
/* add function for mouse hover */
  
  $(".download").mouseenter(function() {
    $(this).addClass("hover");
  });

  $(".download").mouseleave(function() {
    $(this).removeClass("hover");
  });

/* close mobile menu when a section is selected*/

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active")
      menuMobile.classList.replace("bi-x", "bi-list-ul");
    }
  })
})


/* Loading and notification for email*/

const btnSend = document.querySelector('#btn-send')
const btnSendLoader = document.querySelector('#btn-send-loader')

btnSend.addEventListener("click", ()=>{
  btnSendLoader.style.display = "block";
  btnSend.style.display = "none"
})

setTimeout(() => {
  document.querySelector('#alert').style.display = 'none';
}, 5000)