const pets = [
    {id: 'pet-card', type: 'Cat', name: 'Lootsie', specialSkill: 'He finds cool things! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget ipsum felis. In hac habitasse platea dictumst. Maecenas venenatis, massa vel blandit pretium, justo ante rutrum mi, sit amet lacinia.', color: 'Orange', img: 'https://www.catster.com/wp-content/uploads/2018/01/Orange-tabby-cat-sleeping-with-eyes-closed.jpg'},
    {id: 'pet-card1', type: 'Dino', name: 'Feathers', specialSkill: 'He does a great job keeping bad neighbors away. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus lorem, condimentum fringilla posuere sed, commodo nec purus. Vestibulum felis nibh, lobortis sed erat.', color: 'Brown', img: 'http://www.scified.com/u/T-Rex_33.png'},
    {id: 'pet-card2', type: 'Dog', name: 'Oceane', specialSkill: 'She makes great coffee. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id elementum purus. Mauris felis leo, imperdiet eu lorem consequat, interdum semper nibh. Pellentesque felis tortor, interdum sed nunc.', color: 'Black', img: 'https://i.ytimg.com/vi/ulYd7bMRTu4/maxresdefault.jpg'},
    {id: 'pet-card3', type: 'Cat', name: 'Mona', specialSkill: 'He hides like an expert. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tincidunt neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac nisl ut ante luctus cursus quis eget risus erut.', color: 'Black', img: 'https://images.unsplash.com/photo-1570018144466-5a3251ecd588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {id: "pet-card4", type: 'Dog', name: 'Koro', specialSkill:'He protects like a champ. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat sem justo, vel fermentum nisl faucibus et. Vestibulum venenatis orci purus, efficitur molestie libero pulvinar at. Morbi molleras.', color: 'Gray', img: 'https://i.pinimg.com/originals/28/8b/52/288b527eb15362865e5e8f3bb9a6862b.jpg'}
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const petCards = () => {
    let domString = '';
    for (let i = 0; i < pets.length; i++) {
        domString += `<div class="pet" id=${pets[i].id}>`;
        domString += `<header>${pets[i].name}</header>`;
        domString +=    `<img src=${pets[i].img}></img>`;
        domString +=    `<section class="colors">${pets[i].color}</section>`;
        domString +=    `<p class="skills">${pets[i].specialSkill}</p>`;
        domString +=    `<footer class=${pets[i].type}>${pets[i].type}</footer>`;
        domString += '</div>';
    }
    printToDom('pet-cards', domString);
};

petCards();


