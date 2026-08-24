const form = document.getElementById("characterForm");

const notification = document.getElementById("notification");

const characterCard = document.getElementById("characterCard");



const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const raceInput = document.getElementById("race");
const genderInput = document.getElementById("gender");



const characterName = document.getElementById("characterName");
const characterAge = document.getElementById("characterAge");
const characterRace = document.getElementById("characterRace");
const characterGender = document.getElementById("characterGender");



form.addEventListener("submit", function(event) {


    event.preventDefault();



    const name = nameInput.value.trim();
    const age = ageInput.value;
    const race = raceInput.value;
    const gender = genderInput.value;


    if (
        name === "" ||
        age === "" ||
        race === "" ||
        gender === ""
    ) {

        alert("Preencha todos os campos para criar seu personagem!");

        return;
    }



    characterName.textContent = name;

    characterAge.textContent = `${age} anos`;

    characterRace.textContent = race;

    characterGender.textContent = gender;



    notification.classList.add("show");



    characterCard.classList.add("show");


    characterCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});
