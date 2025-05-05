    function createAndStyleElement(tag, className, content = '') {
        const element = document.createElement(tag);
        if(className) element.className = className;
        if (content) element.innerHTML = content;

        return element;
    }

function createPage() {
    const app = document.getElementById('app');
    const nav = document.createElement('nav');
    const homeButton = createAndStyleElement('a', '', 'Accueil');
    const aboutButton = createAndStyleElement('a', '', 'A propos');
    const fetchDataButton = createAndStyleElement('a', '', 'Fetch');
    const networksButton = createAndStyleElement('a', '', 'Réseaux');

    nav.appendChild(homeButton);
    nav.appendChild(aboutButton);
    nav.appendChild(fetchDataButton);
    nav.appendChild(networksButton);

    const mainContent = createAndStyleElement('div', 'main-content');

    const homeSection = createAndStyleElement('div', 'section active', `
        <h2> Bienvenue sur Javascript DOM</h2>
        <p> Cliquez sur le compteur</p>
        <div id="counter" class="counter"></div>
        `)

    mainContent.appendChild(homeSection);

    const footer = createAndStyleElement('footer', '', `
        <p>&copy; 2024 Javascript DOM, Tous droits réservés.</p>
        <p>
            <a href="https://twitter.com" target="_blank">Twitter</a>|
            <a href="https://twitter.com" target="_blank">Twitter</a>|
            <a href="https://twitter.com" target="_blank">Twitter</a>
        </p>
        `) 

    app.appendChild(nav);
    app.appendChild(mainContent);
    app.appendChild(footer);

    homeButton.addEventListener('click' , () => {
        showSection(homeSection);
    })

    aboutlink.addEventListener('click' , () => {
        showSection(homeSection);
    })

    function showSection(section) {
        document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
        section.classList.add('active');
    }
}

createPage()