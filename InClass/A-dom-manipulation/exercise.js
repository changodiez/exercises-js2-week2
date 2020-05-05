/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
allpElements = document.querySelectorAll("p")
console.log(allpElements)

firstDiv = document.querySelector("div");
console.log(firstDiv);

elementWithID = document.querySelector("#jumbotron-text")
console.log(elementWithID);

pElements = document.querySelectorAll(".primary-content p")
console.log(pElements)
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
alertButton = document.querySelector("#alertBtn")
alertButton.addEventListener("click", alertButtonMessaje);

function alertButtonMessaje() {
    alert("Thanks for visiting Bikes for Refugees!")
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
background = document.querySelector("body");
changeButton = document.querySelector("#bgrChangeBtn")

changeButton.addEventListener("click", changeBackground);

function changeBackground() {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    background.style.backgroundColor = getRandomColor();

}


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

addSomeTextButton = document.querySelector("#addTextBtn");
addSomeTextButton.addEventListener("click", addText);

function addText() {
    var paragraph = document.createElement("p");
    paragraph.innerText = "Read more below.";
    content.appendChild(paragraph);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

largerLinksButton = document.querySelector("#largerLinksBtn");
largerLinksButton.addEventListener("click", increaseLinks);

var fontSize =  15;

function increaseLinks() {
    
    allLinks = document.querySelectorAll("a");
    for (i = 0; i< allLinks.length; i++){
        
        allLinks[i].style.fontSize = fontSize +"px";
        
    }  
    fontSize ++;
    console.log(fontSize);
}

