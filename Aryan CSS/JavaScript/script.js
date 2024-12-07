
$(document).ready(function() {
  $(function()
  {
    $('footer').load('footer.html');
    $('header').load('header.html');
  });
  
});
function toggleMenu()
{
  document.querySelector('div.hiddenMenu').classList.toggle('showMenu');
  document.querySelector('button.toggleButton i').classList.toggle('fa-bars');
  document.querySelector('button.toggleButton i').classList.toggle('fa-xmark');
}