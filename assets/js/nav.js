const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <nav>
    <ul>
        <li>
            <a href="juz.html">Juz</a>
        </li>
        <li>
            <a href="hizb.html">Hizb</a>
        </li>
        <li>
            <a href="part.html">Part</a>
        </li>
        <li>
            <a href="page.html">Page</a>
        </li>
        <li>
            <a href="surah.html">Surah</a>
        </li>
    </ul>
</nav>
    `;
}

createNav();

// JavaScript code
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('surah');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}