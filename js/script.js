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

// adding acive-inactive tab notation.
const current_page = document.location.pathname;
const navItems = document.querySelectorAll('.center a');

if(current_page != '/Portfolio/'){
    navItems.forEach((e)=>{
        if (e.href.includes(current_page)){
            e.classList.add('activated');
        }
    });
}
else{
    navItems[0].classList.add('activated');
}
