/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (var i=0; i<arrayOfPeople.length; i++){
    people = arrayOfPeople[i];
    let h1div = document.createElement("h1");
    let h2div = document.createElement("h2");
    content.appendChild(h1div);
    content.appendChild(h2div);
    h1div.innerHTML = people.name;
    h2div.innerHTML = people.job;
  }
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  let content = document.querySelector("#content");
  var unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  for (var i = 0; i<shopping.length; i++){
var itemOfList = document.createElement("li");
itemOfList.innerHTML = shopping[i];
unorderedList.appendChild(itemOfList);
  }
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here
  var content = document.querySelector("#content");
  var unorderedList = document.createElement("ul");
 
  
  content.appendChild(unorderedList);
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var listItem = document.createElement("li");
    
    var paragraph = document.createElement("p");
    paragraph.innerText = book.title + " by " + book.author;
    listItem.appendChild(paragraph);

    var link = document.createElement("a");
    link.href = book.cover;
    var image = document.createElement("img");
    image.src = book.cover;
    link.appendChild(image);
    listItem.appendChild(link);

    if (book.alreadyRead) {
      listItem.style.backgroundColor = "green";
    }
    else {
      listItem.style.backgroundColor = "red";
    }

    unorderedList.appendChild(listItem);
  }

}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
