const pet = [
    {type: 'Cat', name: 'Lootsie', specialSkill: 'He finds cool things!', color: 'Orange', img: 'https://www.catster.com/wp-content/uploads/2018/01/Orange-tabby-cat-sleeping-with-eyes-closed.jpg'}
];

const pet2 = [
    {type: 'Dino', name: 'Feathers', specialSkill: 'He does a great job keeping bad neighbors away', color: 'Brown', img: 'http://www.scified.com/u/T-Rex_33.png'}
];

const pet3 = [
    {type: 'Dog', name: 'Oceane', specialSkill: 'She makes great coffee', color: 'Black', img: 'https://i.ytimg.com/vi/ulYd7bMRTu4/maxresdefault.jpg'}
];

const pet4 = [
    {type: 'Cat', name: 'Mona', specialSkill: 'He hides like an expert', color: 'Black', img: 'https://images.unsplash.com/photo-1570018144466-5a3251ecd588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}
];

const pet5 = [
    {type: 'Dog', name: 'Koro', specialSkill:'He protects like a champ', color: 'Gray', img: 'https://i.pinimg.com/originals/28/8b/52/288b527eb15362865e5e8f3bb9a6862b.jpg'}
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const petCards = () => {
    let domString = '';
    for (let i = 0; i < pet.length; i++) {
        domString += '<div class="adoptee">';
        domString += `<header>${pet[i].name}</header>`;
        domString +=    `<img src=${pet[i].img}></img>`;
        domString +=    `<section class="colors">${pet[i].color}</section>`;
        domString +=    `<p class="skills">${pet[i].specialSkill}</p>`;
        domString +=    `<footer class="Cat">${pet[i].type}</footer>`;
        domString += '</div>';
    }
    printToDom('pet-cards', domString);
};

const petCards2 = () => {
    let domString2 = '';
    for (let i = 0; i < pet2.length; i++) {
        domString2 += '<div class="adoptee1">';
        domString2 += `<header>${pet2[i].name}</header>`;
        domString2 +=    `<img src=${pet2[i].img}></img>`;
        domString2 +=    `<section class="colors">${pet2[i].color}</section>`;
        domString2 +=    `<p class="skills">${pet2[i].specialSkill}</p>`;
        domString2 +=    `<footer class="Dino">${pet2[i].type}</footer>`;
        domString2 += '</div>';
    }
    printToDom('pet-cards2', domString2);
};

const petCards3 = () => {
    let domString3 = '';
    for (let i = 0; i < pet3.length; i++) {
        domString3 += '<div class="adoptee2">';
        domString3 += `<header>${pet3[i].name}</header>`;
        domString3 +=    `<img src=${pet3[i].img}></img>`;
        domString3 +=    `<section class="colors">${pet3[i].color}</section>`;
        domString3 +=    `<p class="skills">${pet3[i].specialSkill}</p>`;
        domString3 +=    `<footer class="Dog">${pet3[i].type}</footer>`;
        domString3 += '</div>';
    }
    printToDom('pet-cards3', domString3);
};

const petCards4 = () => {
    let domString4 = '';
    for (let i = 0; i < pet4.length; i++) {
        domString4 += '<div class="adoptee3">';
        domString4 += `<header>${pet4[i].name}</header>`;
        domString4 +=    `<img src=${pet4[i].img}></img>`;
        domString4 +=    `<section class="colors">${pet4[i].color}</section>`;
        domString4 +=    `<p class="skills">${pet4[i].specialSkill}</p>`;
        domString4 +=    `<footer class="Cat">${pet4[i].type}</footer>`;
        domString4 += '</div>';
    }
    printToDom('pet-cards4', domString4);
};

const petCards5 = () => {
    let domString5 = '';
    for (let i = 0; i < pet5.length; i++) {
        domString5 += '<div class="adoptee1">';
        domString5 += `<header>${pet5[i].name}</header>`;
        domString5 +=    `<img src=${pet5[i].img}></img>`;
        domString5 +=    `<section class="colors">${pet5[i].color}</section>`;
        domString5 +=    `<p class="skills">${pet5[i].specialSkill}</p>`;
        domString5 +=    `<footer class="Dog">${pet5[i].type}</footer>`;
        domString5 += '</div>';
    }
    printToDom('pet-cards5', domString5);
};

petCards();
petCards2();
petCards3();
petCards4();
petCards5();