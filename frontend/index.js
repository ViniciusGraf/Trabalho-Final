document.querySelector('.main-btn').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.querySelector('#Produtos').scrollIntoView({
        behavior: 'smooth'  
    });
});
