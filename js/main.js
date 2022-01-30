class Hero {
    #powerCount = 10;
    constructor(name) {
        this.name = name;
    }

    getCurrentPowerCount() {
        return this.#powerCount;
    }

    train() {
        return ++this.#powerCount;
    }
}

let heroCount = 0;

const heroes = [];

function gethero(name) {
    heroCount++;
    return new Hero(name);
}

const [hulk, geralt, spiderman] = [gethero("hulk"), gethero("geralt"), gethero("spider")];

heroes.push(spiderman);
heroes.push(hulk);
heroes.push(geralt);

const print_hall_of_fame = () => {

    const heroesContainer = document.querySelector("div");
    const showHeroCount = document.querySelector("div h1");
    showHeroCount.innerHTML = `Hero Count: ${heroCount}`;

    heroes.map((x, i, arr) => {
        const heroElement = document.createElement("div");
        heroElement.innerHTML = `<p>${x.name}</p><p>${x.getCurrentPowerCount()}</p>`;

        heroesContainer.append(heroElement);
    });
}

const clear_hall_of_fame = () => {

    const heroesContainer = document.querySelector("div");
    heroesContainer.innerHTML = `<h1></h1>`;

}

print_hall_of_fame();

const powerUpBtn = document.querySelector('button');

powerUpBtn.addEventListener('click', function () {
    hulk.train();
    geralt.train();
    spiderman.train();
    clear_hall_of_fame();
    print_hall_of_fame();
});