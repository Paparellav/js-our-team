// Viene fornito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

let userInfos = "";
const teamContainer = document.querySelector(".team-container");
// console.log(teamContainer);

for (let i = 0; i < team.length; i++) {
    userInfos = team[i];
    // console.log(userInfos.name, userInfos.role, userInfos.image);

    generateCard(); // -> Funzione che crea la card e l'appende al team-container
}

//BONUS 3.
const submitBtn = document.getElementById("addMemberButton");
submitBtn.addEventListener('click', function (){
    
    const userName = document.getElementById("name").value;
    const userRole = document.getElementById("role").value;
    const userImage = document.getElementById("image").value;
    
    const userObject = {
        name: userName,
        role: userRole,
        image: userImage,
    };

    console.log(userObject);
    team.push(userObject);

    teamContainer.innerHTML = "";

    for (let i = 0; i < team.length; i++) {
        userInfos = team[i];

        generateCard();
    }
    
});

//FUNCTION 
function generateCard () {
    // BONUS 2:
    // organizzare i singoli membri in card/schede
    
    // creare un div al quale dare la classe team-card
    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");
    // creare un div al quale do la classe card-image
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-image");
    //creare l'immagine
    cardImg.innerHTML = `<img src = "img/${userInfos.image}"/>`;
    teamCard.append(cardImg);
    
    // creare un div al quale dare la classe card-text
    const cardTxt = document.createElement("div");
    cardTxt.classList.add("card-text");
    teamCard.append(cardTxt);
    //creare un h3 al quale appendere ${userInfos.name}
    const title = document.createElement("h3");
    title.innerHTML = `${userInfos.name}`;
    //creare un p al quale appendere ${userInfos.role}
    const p = document.createElement("p");
    p.innerHTML = `${userInfos.role}`;
    cardTxt.append(title, p);
    
    
    teamContainer.append(teamCard);
}   