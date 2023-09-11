const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <nav>
    <ul>
        <li>
            <a href="#">Juz 1-6</a>
        </li>
        <li>
            <a href="#l">Juz 7-12</a>
        </li>
        <li>
            <a href="#">Juz 13-19</a>
        </li>
        <li>
            <a href="#">Juz 19-25</a>
        </li>
        <li>
            <a href="#">Juz 25-30</a>
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