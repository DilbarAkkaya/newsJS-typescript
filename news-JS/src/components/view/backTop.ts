const goTopBtn = document.querySelector('.top') as HTMLElement;
export function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}

goTopBtn.addEventListener('click', topFunction);