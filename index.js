var footer = document.getElementById('footer-p'), year = new Date().getFullYear(), btn_menu = document.getElementById('btn-menu'), btn_div = document.getElementById('buttons')

footer.innerHTML = `&copy; ${year} Foster Web Solutions & Consulting / Todos os direitos reservados.`

function toggleDiv() {
  btn_menu.style.display = "none";
  btn_div.style.display = "flex";
}