const search = document.getElementById('search-btn');
const burger = document.querySelector('.burger');
const navElements = document.querySelector('.center');

// adding searching functionality to all the navigation bars of the website.
search.addEventListener('click', ()=>{
    let search_text = document.getElementById('search').value;
    alert("You Searched : " + search_text);
    document.getElementById('search').value = "";
});

burger.addEventListener('click', () => {
    navElements.classList.toggle('burger-activity');
});
