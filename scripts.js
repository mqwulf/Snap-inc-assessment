let dbz = [
{
    name: "Goku",
    race: "Saiyan",
    gender: "Male",
    "bio": "Goku is a Saiyan originally sent to Earth as an infant with the mission to destroy its people. However he grew up to become Earth's greatest defender. He constantly strives and trains to be the greatest warrior possible, which has kept the Earth and the universe safe from destruction many times.",
    health: 500000,
    attack: 50000,
    abilities: [
    "Super Saiyan Transformations",
    "Super Kamehameha",
    "Super Dragon Fist"
    ],
    photo: "images/goku.gif"
},
{
    name: "Vegeta",
    race: "Saiyan",
    gender: "Male",
    bio: "Vegeta is the prince of the fallen Saiyan race. He is the eldest son of King Vegeta. the husband of Bulma, the father of Trunks",
    health: 480000,
    attack: 48000,
    abilities: [
    "Super Saiyan Transformations",
    "Final Flash",
    "Big Bang Attack"
    ],
    photo: "images/vegeta2.gif"
},
{
    name: "Gohan",
    race: "Saiyan",
    gender: "Male",
    bio: "Gohan is son of Goku. He is named after Goku's adoptive grandfather, Gohan. During the battle with Cell, Gohan became the strongest fighter through the Super Saiyan 2 transformation. In this form, Gohan surpassed Cell and even his father in terms of power and speed.",
    health: 470000,
    attack: 47500,
    abilities: [
    "Super Saiyan Transformations",
    "Super Kamehameha",
    "Masenko"
    ],
    photo: "images/gohan.gif"
},
{
    name: "Trunks",
    race: "Saiyan",
    gender: "Male",
    bio: "Trunks is Vegeta's son. Several characters, such as Goku, Krillin and Bulma, remark how much Trunks resembles Vegeta",
    health: 440000,
    attack: 44000,
    abilities: [
    "Super Saiyan Transformations",
    "Galic Gun",
    "Finish Buster"],
    photo: "images/trunks.gif"
},
{
    name: "Frieza",
    race: "Unknown",
    gender: "Male",
    bio: "Frieza was the emperor of the universe, who controlled his own imperial army and was feared for his ruthlessness and power, but was taken out of power when he was killed by Future Trunks & Goku.",
    health: 375000,
    attack: 37000,
    "abilities": [
    "Eye Laser",
    "Death Beam",
    "Death Ball"
    ],
    photo: "images/frieza.jpeg"
},
{
    name: "Beerus",
    race: "God",
    gender: "Male",
    bio: "Beerus is the God of Destruction of Universe 7. He is accompanied by his martial arts teacher and attendant, Whis. Beerus' twin brother is Champa, the God of Destruction of Universe 6.",
    health: 999999999,
    attack: 999999999,
    abilities: [
    "Destruction Sphere",
    "Destruction Gods, Fierce Attack",
    "Hakai"
    ],
    photo: "images/beerus.jpeg"
},
{
    name: "Piccolo",
    race: "Namekian",
    gender: "Male",
    bio: "Piccolo Jr., usually just called Piccolo is a Namekian and also the final child and reincarnation of the Demon King Piccolo, later becoming the reunification of the Nameless Namekian after fusing with Kami.",
    health: 230000,
    attack: 25000,
    abilities: [
    "Special Beam Cannon",
    "Tri-Form",
    "Light Grenade"
    ],
    photo: "images/piccolo.gif"
},
{
    name: "Bulma",
    race: "Human",
    gender: "Female",
    bio: "Bulma is a brilliant scientist and the second daughter of Capsule Corporation's founder Dr. Brief and is Goku's first friend. Also Vegeta's wife.",
    health: 100,
    attack: 50,
    abilities: [
        "Technology",
        "Slapping"
    ],
    photo: "images/bulma.jpeg"
},
{
    name: "Android 17",
    race: "Unknown",
    gender: "Male",
    bio: "Android 17, Lapis when he was an ordinary Human, is the twin brother of Android 18 and Dr. Gero's 17th android creation, a cyborg due to being a human at one point, and one of his first human subjects, designed to serve Gero's vendetta against Goku",
    health: 200000,
    attack: 25000,
    abilities: [
        "Super Strength",
        "Super Speed",
        "Unlimited Energy"
    ],
    photo: "images/android17.jpeg"
},
{
    name: "Android 18",
    race: "Unknown",
    gender: "Female",
    bio: "Android 18 , Lazuli when she was an ordinary human, is the older twin sister of Android 17 and Dr. Gero's eighteenth android creation, designed to serve Gero's vendetta against Goku. ",
    health: 200000,
    attack: 25000,
    abilities: [
        "Super Strength",
        "Super Speed",
        "Unlimited Energy"
    ],
    photo: "images/android18.jpeg"
},
{
    name: "Mr Satan",
    race: "Human",
    gender: "Male",
    bio: "Mr Satan, a great fighter, champion of the world, cheered by all humanity. In reality he hides a clumsy and cowardly personality.",
    health: 200,
    attack: 100,
    abilities: [
        "Stronger and faster than average human"
    ],
    photo: "images/satan.jpeg"
},
{
    name: "Videl",
    race: "Human",
    gender: "Female",
    bio: "Videl, a martial artist, daughter of Mr Satan. She is also the wife of Gohan. In her spare time, Videl helps the police and fights crime",
    health: 150,
    attack: 120,
    abilities: [
        "Stronger and faster than average human",
        "Flying"
    ],
    photo: "images/videl.png"   
}]


document.addEventListener("DOMContentLoaded", function() {
    const characterList = document.getElementById("characterList");
    const searchInput = document.getElementById("searchInput");
    const sortBy = document.getElementById("sortBy");
    const categoryButtons = document.querySelectorAll(".categoryButton");

    let filteredCharacters = [...dbz];

    function generateCharacterCards(characters) {
        characterList.innerHTML = "";
        characters.forEach(character => {
            const card = document.createElement("div");
            card.classList.add("characterCard");
            const photoContainer = document.createElement("div");
            photoContainer.classList.add("photoContainer");
            const img = document.createElement("img");
            img.src = character.photo;
            img.alt = character.name + " Photo";
            photoContainer.appendChild(img);
            card.appendChild(photoContainer);
            card.innerHTML += `
                <h2>${character.name}</h2>
                <p>Race: ${character.race}</p>
                <p>Gender: ${character.gender}</p>
                <p>Health: ${character.health}</p>
                <p>Attack: ${character.attack}</p>
                <p>Bio: ${character.bio}</p>
                <p>Abilities: ${character.abilities.join(", ")}</p>
                <button class="deleteButton" data-name="${character.name}">Delete</button>
            `;
            characterList.appendChild(card);
        });
        attachDeleteListeners();
    }

    generateCharacterCards(filteredCharacters);

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        filteredCharacters = dbz.filter(character =>
            character.name.toLowerCase().startsWith(searchTerm)
        );
        applyFiltersAndSort();
    });

    sortBy.addEventListener("change", function() {
        applyFiltersAndSort();
    });

    categoryButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = button.id;
            if (category === "all") {
                filteredCharacters = [...dbz];
            } else {
                filteredCharacters = dbz.filter(character =>
                    (category === "male" && character.gender.toLowerCase() === "male") ||
                    (category === "female" && character.gender.toLowerCase() === "female") ||
                    (category === character.race.toLowerCase())
                );
            }
            applyFiltersAndSort();
        });
    });

    function applyFiltersAndSort() {
        const sortCriterion = sortBy.value;
        let sortedCharacters = [...filteredCharacters];
        switch (sortCriterion) {
            case "healthAsc":
                sortedCharacters.sort((a, b) => a.health - b.health);
                break;
            case "healthDesc":
                sortedCharacters.sort((a, b) => b.health - a.health);
                break;
            case "attackAsc":
                sortedCharacters.sort((a, b) => a.attack - b.attack);
                break;
            case "attackDesc":
                sortedCharacters.sort((a, b) => b.attack - a.attack);
                break;
        }
        generateCharacterCards(sortedCharacters);
    }

    function attachDeleteListeners() {
        const deleteButtons = document.querySelectorAll(".deleteButton");
        deleteButtons.forEach(button => {
            button.addEventListener("click", function() {
                const name = button.dataset.name;
                dbz = dbz.filter(character => character.name !== name);
                filteredCharacters = filteredCharacters.filter(character => character.name !== name);
                applyFiltersAndSort();
    
                const cardToRemove = button.closest(".characterCard");
                cardToRemove.remove();
            });
        });
    }
    
    
});
