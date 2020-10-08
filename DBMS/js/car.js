window.addEventListener('load', () => {

    
    const name = sessionStorage.getItem('NAME');
    
    document.getElementById('car-name').innerHTML = name;

})
