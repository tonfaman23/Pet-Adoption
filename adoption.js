const pets = [
    {id: 'pet-card', type: 'Cat', name: 'Lootsie', specialSkill: 'He finds cool things! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget ipsum felis. In hac habitasse platea dictumst. Maecenas venenatis, massa vel blandit pretium, justo ante rutrum mi, sit amet lacinia.', color: 'Orange', img: 'https://www.catster.com/wp-content/uploads/2018/01/Orange-tabby-cat-sleeping-with-eyes-closed.jpg'},
    {id: 'pet-card1', type: 'Dino', name: 'Feathers', specialSkill: 'He does a great job keeping bad neighbors away. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus lorem, condimentum fringilla posuere sed, commodo nec purus. Vestibulum felis nibh, lobortis sed erat.', color: 'Brown', img: 'http://www.scified.com/u/T-Rex_33.png'},
    {id: 'pet-card2', type: 'Dog', name: 'Oceane', specialSkill: 'She makes great coffee. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id elementum purus. Mauris felis leo, imperdiet eu lorem consequat, interdum semper nibh. Pellentesque felis tortor, interdum sed nunc.', color: 'Black', img: 'https://i.ytimg.com/vi/ulYd7bMRTu4/maxresdefault.jpg'},
    {id: 'pet-card3', type: 'Cat', name: 'Mona', specialSkill: 'He hides like an expert. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel tincidunt neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac nisl ut ante luctus cursus quis eget risus erut.', color: 'Black', img: 'https://images.unsplash.com/photo-1570018144466-5a3251ecd588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {id: "pet-card4", type: 'Dog', name: 'Koro', specialSkill:'He protects like a champ. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat sem justo, vel fermentum nisl faucibus et. Vestibulum venenatis orci purus, efficitur molestie libero pulvinar at. Morbi molleras.', color: 'Gray', img: 'https://i.pinimg.com/originals/28/8b/52/288b527eb15362865e5e8f3bb9a6862b.jpg'},
    {id: "pet-card5", type: 'Dino', name: 'Tommy', specialSkill:'Can carry you a very long way. faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Mori esperanza.', color: 'Gray', img: 'https://www.wildrepublic.com/wp-content/uploads/2018/07/Brachiosaurus-3025-xl-600x404.jpg'},
    {id: "pet-card6", type: 'Dog', name: 'Felixious', specialSkill: 'A loyal companion to the very end. quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Loborium espa.', color: 'Brown', img: 'https://www.keystonepuppies.com/wp-content/uploads/2018/10/Chocolate-Lab-Category.jpg'},
    {id: "pet-card7", type: 'Cat', name: 'Adam', specialSkill: 'Seems delusional about thinking that it is a person.nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id. morbi tincidunt augue interdum velit ipsum faucibus vitae al.', color: 'White', img: 'http://www.petsworld.in/blog/wp-content/uploads/2014/09/Ragdoll1.jpg'},
    {id: "pet-card8", type: 'Dino', name: 'Gumshoe', specialSkill: 'Always seems to stick to the bottom of your shoe like gum. vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.', color: 'Green', img: 'https://p7.hiclipart.com/preview/452/270/479/sheriff-woody-dino-buzz-lightyear-jessie-rex-green-dinosaurs.jpg'}
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const petCards = (petsArray) => {
    let domString = '';
    for (let i = 0; i < petsArray.length; i++) {
        domString += `<div class="pet" id=${petsArray[i].id}>`;
        domString += `<header>${petsArray[i].name}</header>`;
        domString +=    `<img src=${petsArray[i].img} class=${petsArray[i].type}Img></img>`;
        domString +=    `<section class="colors">${petsArray[i].color}</section>`;
        domString +=    `<p class="skills">${petsArray[i].specialSkill}</p>`;
        domString +=    `<footer class=${petsArray[i].type}>${petsArray[i].type}</footer>`;
        domString += '</div>';
    }
    printToDom('pet-cards', domString);
};




const allPets = (e) => {
    const buttonId = e.target.id;
    if(buttonId === 'All'){
        petCards(pets);
    } else{
    const daPets = []
        for (let i = 0; i < pets.length; i++){
            if( pets[i].type === buttonId){
                daPets.push(pets[i]);
            }
        }
    petCards(daPets);
    }
};


const event = () => {
    document.getElementById('Dog').addEventListener('click', allPets);
    document.getElementById('Cat').addEventListener('click', allPets);
    document.getElementById('Dino').addEventListener('click', allPets);
    document.getElementById('All').addEventListener('click', allPets);
}
const init = () => {
    petCards(pets);
    event();
};

init();