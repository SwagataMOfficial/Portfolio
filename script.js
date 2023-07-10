const search = document.getElementById('search-btn');

// adding searching functionality to all the navigation bars of the website.
search.addEventListener('click', ()=>{
    let search_text = document.getElementById('search').value;
    alert("You Searched : " + search_text);
    document.getElementById('search').value = "";
});
