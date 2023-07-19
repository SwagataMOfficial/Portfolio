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
// console.log(current_page);
// console.log(navItems);
console.log(current_page)
// if (current_page === '/'){
//     navItems.forEach(e =>{
//         e.classList.remove('activated');
//     });
// }
// navItems.forEach((e)=>{
//     if (e.href.includes(current_page)){
//         // console.log(e.href);
//         e.classList.add('activated');
//     }
// });

if(current_page != '/'){
    navItems.forEach((e)=>{
        if (e.href.includes(current_page)){
            // console.log(e.href);
            e.classList.add('activated');
        }
    });
}
else{
    navItems[0].classList.add('activated');
}