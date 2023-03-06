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

/* Add background for toggled navbar itens*/

function expandNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('expanded');
}