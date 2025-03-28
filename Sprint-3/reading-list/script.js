// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function readingList(books) {
  for (const book of books) {
    const { title, author, bookCoverImage, alreadyRead } = book;
    const list = document.getElementById("reading-list");

    const listElement = document.createElement("li");

    if (alreadyRead) {
      listElement.style.backgroundColor = "green";
    } else {
      listElement.style.backgroundColor = "red";
    }

    listElement.style.margin = "10px";
    listElement.textContent = `${title} by ${author}`;

    const bookCover = document.createElement("img");

    bookCover.src = bookCoverImage;
    bookCover.style.marginTop = "10px";
    bookCover.style.height = "160px";
    bookCover.style.display = "block";

    listElement.appendChild(bookCover);

    list.appendChild(listElement);
  }
}
readingList(books);
