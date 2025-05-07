function createAndStyleElement(tag, className, content = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;

    return element;
}

function createPage() {
    // Creation des elements
const app = document.getElementById('app');
const nav = createAndStyleElement('nav');
const homeLink=createAndStyleElement('a','','Home');
const aProposLink=createAndStyleElement('a','','À propos');
const produitsLink=createAndStyleElement('a','','Produits');
const contactLink=createAndStyleElement('a','','Contact');
// ajout des boutons a la navbar
nav.appendChild(homeLink);
nav.appendChild(aProposLink);
nav.appendChild(produitsLink);
nav.appendChild(contactLink);
// creation des contenair de sections
const mainContent=createAndStyleElement('div','main-content','');
// creation des sections
const homeSection= createAndStyleElement('div', 'section active',`
    <h2>Bienvenue sur Javascript DOM</h2>
    <p>Cliquez sur le compteur</p>
    <div id="counter" class="counter">Compteur</div>
`)

const aProposSection=createAndStyleElement('div', 'section',`
    <p>Pouet</p>
    `)

const produitsSection=createAndStyleElement('div', 'section',`
    <p>Produits</p>
    `)

const contactSection=createAndStyleElement('div', 'section',`
    <p>Contact</p>
    `)
// ajout des sections au contenair
    mainContent.appendChild(homeSection);
    mainContent.appendChild(aProposSection);
    mainContent.appendChild(produitsSection);
    mainContent.appendChild(contactSection);
// creation footer
const footer=createAndStyleElement('footer','footer',`
    <p>&copy; 2025 Javascript DOM, Tous droits réservés.</p>
    <p>
        <a href="https://twitter.com" target="_blank">Twitter</a>
        <a href="https://twitter.com" target="_blank">Twitter</a>
        <a href="https://twitter.com" target="_blank">Twitter</a>
    </p>
    `)

// ajout de la navbar a l'application
// ajout du contenair a l'appli
// ajout du footer a l'appli
app.appendChild(nav);
app.appendChild(mainContent);
app.appendChild(footer);

// ecouter le click du bouton home
homeLink.addEventListener('click', () => {
    // j'affiche la section home dans le contenair
    showSection(homeSection);
})

aProposLink.addEventListener('click', ()=>{
    showSection(aProposSection);
})

produitsLink.addEventListener('click', ()=>{
    showSection(produitsSection);
})

contactLink.addEventListener('click', ()=>{
    showSection(contactSection);
})

// afficher une section
function showSection(section){
    // selectionner toutes les sections       | pour chaque section enleve la classe active
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    // pour la section cliquée ajoute lui la classe active
    section.classList.add('active');
}
}




createPage();