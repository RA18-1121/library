function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = () => {
        if(isRead.toLowerCase() === "yes")
        {
            return title + " by " + author + ", " + pages + " pages, read.";
        }
        else
            return title + " by " + author + ", " + pages + " pages, not read yet."
    }
}

const myLibrary = [];

const addBookToLibrary = (title, author, pages, isRead) => {
    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}

addBookToLibrary("first", "me", 295, "yes");
addBookToLibrary("second", "you", 592, "no");
console.log(myLibrary[0].info());
console.log(myLibrary[1].info());

const table = document.querySelector("table");

const displayBooks = () => {
    for(let i = 0; i < myLibrary.length; i++)
    {
        let row = document.createElement("tr");

        let serial = document.createElement("td");
        let title = document.createElement("td");
        let author = document.createElement("td");
        let pages = document.createElement("td");
        let isRead = document.createElement("td");

        serial.textContent = `${i + 1}`;
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages;
        isRead.textContent = myLibrary[i].isRead;

        row.appendChild(serial);
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(isRead);

        table.appendChild(row);
    }
}

displayBooks();