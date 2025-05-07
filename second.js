function createAndStyleElement(tag, className, content=''){
    const element = document.createElement(tag);
    if(className) element.className = className;
    if(content) element.innerHTML = content;
    
    return element;
}
 
 
 function createPage(){
    //creation des elements
    const app = document.getElementById('app');
    const nav = createAndStyleElement('nav');
    const homeLink = createAndStyleElement('a','', 'Accueil');
    const secondLink = createAndStyleElement('a','', 'Infos' );
    const thirstLink = createAndStyleElement('a','','Produits');
    const fourthLink = createAndStyleElement('a','','Contact');

    // ajout des boutons a la navbar
    nav.appendChild(homeLink);
    nav.appendChild(secondLink);
    nav.appendChild(thirstLink);
    nav.appendChild(fourthLink);

    // creation contenaire section 
    const mainContent = createAndStyleElement('div','main-content')

    //creation des sections 
    const homeSection = createAndStyleElement('div', 'section active',`
        <h2> Bienvenue sur Javascript DOM </h2>
        <p> Cliquez sur le compteur</p>
        <div id="counter" class="counter">Compteur</div>
        `)

    const homeInfos = createAndStyleElement('div', 'section',`
        <h2> Bienvenue sur Javascript DOM </h2>
        <p> Cliquez sur le compteur</p>
        <div id="counter" class="counter">Compteur</div>
        `)

    const homeContact = createAndStyleElement('div', 'section',`
    <h2> Bienvenue sur Javascript DOM </h2>
    <p> Cliquez sur le compteur</p>
    <div id="counter" class="counter">Compteur</div>
    `)

    const homeProduit = createAndStyleElement('div', 'section',`
    <h2> Bienvenue sur Javascript DOM </h2>
    <p> Cliquez sur le compteur</p>
    <div id="counter" class="counter">Compteur</div>
    `)

    // creation des sections 
    mainContent.appendChild(homeSection);
    mainContent.appendChild(homeInfos);
    mainContent.appendChild(homeContact);
    mainContent.appendChild(homeProduit);

    //creation footer
    const footer = createAndStyleElement('footer', 'footer',`
        <p>&copy; 2024 Javascript DOM, Tout droits réservés.</p>
        <p>
            <a href="https://twitter.com" target ="blank">Twitter</a>
            <a href="https://facebook.com" target ="blank">Facebook</a>
            <a href="https://instagram.com" target ="blank">Instagram</a>
        </p>        
        `)


    //ajout de la navbar, contenare et footer
    
     app.appendChild(nav);
     app.appendChild(mainContent);
     app.appendChild(footer);



     //ecouter le clic du bouton home
    homeLink.addEventListener('click', () => {
        //j'affiche ma section home dans le conatiner
        showSection(homeSection);
    })

    secondLink.addEventListener('click', () => {
        showSection(homeInfos);
    })

    thirstLink.addEventListener('click', () => {
        showSection(homeContact);
    })

    fourthLink.addEventListener('click', () => {
        showSection(homeProduit);
    })


    //afficher une section
     function showSection(section){
        //selectionner toutes les sections| pour chaque section enleve la classe active
        document.querySelectorAll('.section').forEach(sec => sec.classList.remove ('active'));
        //pour chaque section enlève la classe active
        section.classList.add('active');
     }

 }
 
 createPage()