document.addEventListener("DOMContentLoaded",() =>{
    const cardArray = [
        { name: "bird", img: "images/bird.JPG"}, 
        { name: "bird", img: "images/bird.JPG"}, 
        { name: "fish", img: "images/fish.JPG"},
        { name: "fish", img: "images/fish.JPG"},
        { name: "fox", img: "images/fox.JPG"},
        { name: "fox", img: "images/fox.JPG"},
        { name: "frog", img: "images/frog.JPGg"},
        { name: "frog", img: "images/frog.JPGg"},
        { name: "gibbon", img: "images/gibbon.JPG"},
        { name: "gibbon", img: "images/gibbon.JPG"},
        { name: "leaopard", img: "images/leopard.JPG"},
        { name: "leaopard", img: "images/leopard.JPG"}
        ]; 
  })

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result")
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement("img");
            card.setAttribute("src", "images/background.JPG");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll("img")
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0]=== cardsChosen[1]){
            alert("You found a match")
            cards[optionOneId].setAttribute("src", "images/background.JPG")
            cards[optionTwoId].setAttribute("src", "images/background.JPG")
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute("src", "images/background.JPG")
            cards[optionTwoId].setAttribute("src", "images/background.JPG")
            alert("Try again")
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardsArray.length/2){
            resultDisplay.textContent = "Congratulations!You found them all!"
        }

        }
    
    function flipCard() { 
        var cardId =this.getAttribute("data-id");
        cardsChosen.push(cardArray[card.id].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch,500)
        }
    }

createBoard();