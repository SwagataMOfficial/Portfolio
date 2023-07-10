const search = document.getElementById('search-btn');

search.addEventListener('click', ()=>{
    let search_text = document.getElementById('search').value;
    console.log(search_text);
    document.getElementById('search').value = "";
});