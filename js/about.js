const toggles = document.querySelectorAll('.faqtoggle')
toggles.forEach(toggle => {
    toggle.addEventListener('click', () =>{
       toggle.parentNode.classList.toggle('active') 
    })
});