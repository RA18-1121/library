function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead.toLowerCase();
}

const myLibrary = [];

const addBookToLibrary = (title, author, pages, isRead) => {
    let book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}

const toggleRead = (index) => {
    if(myLibrary[index].isRead === "yes")
        myLibrary[index].isRead = "no";
    else
        myLibrary[index].isRead = "yes";
}

const table = document.querySelector("table");
const body = document.querySelector("tbody");

const displayBooks = () => {

    while(body.lastChild)
    {
        body.removeChild(body.lastChild);
    }
    let j = 0;
    for(let i = 0; i < myLibrary.length; i++)
    {
        if(myLibrary[i] == undefined)
            continue;

        let row = document.createElement("tr");
        row.classList.add(`class${i}`);

        let serial = document.createElement("td");
        let title = document.createElement("td");
        let author = document.createElement("td");
        let pages = document.createElement("td");
        let isRead = document.createElement("td");
        let remove = document.createElement("button");
        let toggle = document.createElement("button");

        serial.textContent = `${j + 1}`;
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages;
        isRead.textContent = myLibrary[i].isRead;
        remove.textContent = "Remove Book";
        toggle.textContent = "Toggle Read";

        remove.addEventListener("click", (event) => {
            let index = event.target.parentNode.getAttribute("class").at(-1);
            delete myLibrary[index];
            displayBooks();
        })

        toggle.addEventListener("click", (event) => {
            toggleRead(event.target.parentNode.getAttribute("class").at(-1));
            displayBooks();
        })

        row.append(serial, title, author, pages, isRead, remove, toggle);
        body.appendChild(row);
        j++;
    }
}

const form_container = document.querySelector(".form-container");

const create_form = document.querySelector(".create-form");
create_form.addEventListener("click", () => {

    let form = document.createElement("form");

    let title_div = document.createElement("div");
    let title_label = document.createElement("label");
    title_label.setAttribute("for", "title_input");
    title_label.textContent = "Title";
    let title_input = document.createElement("input");
    title_input.setAttribute("type", "text");
    title_input.setAttribute("id", "title_name");
    title_input.setAttribute("name", "title_name");
    title_div.append(title_label, title_input);

    let author_div = document.createElement("div");
    let author_label = document.createElement("label");
    author_label.setAttribute("for", "author_input");
    author_label.textContent = "Author";
    let author_input = document.createElement("input");
    author_input.setAttribute("type", "text");
    author_input.setAttribute("id", "author_name");
    author_input.setAttribute("name", "author_name");
    author_div.append(author_label, author_input);

    let pages_div = document.createElement("div");
    let pages_label = document.createElement("label");
    pages_label.setAttribute("for", "pages_input");
    pages_label.textContent = "Pages";
    let pages_input = document.createElement("input");
    pages_input.setAttribute("type", "text");
    pages_input.setAttribute("id", "pages_name");
    pages_input.setAttribute("name", "pages_name");
    pages_div.append(pages_label, pages_input);

    let isRead_div = document.createElement("div");
    let isRead_label = document.createElement("label");
    isRead_label.setAttribute("for", "isRead_input");
    isRead_label.textContent = "isRead";
    let isRead_input = document.createElement("input");
    isRead_input.setAttribute("type", "text");
    isRead_input.setAttribute("id", "isRead_name");
    isRead_input.setAttribute("name", "isRead_name");
    isRead_div.append(isRead_label, isRead_input);

    let submit_form = document.createElement("button");
    submit_form.textContent = "Submit";
    submit_form.addEventListener("click", (event) => {
        event.preventDefault();
        addBookToLibrary(title_input.value, author_input.value, pages_input.value, isRead_input.value);
        displayBooks();
        form_container.removeChild(form);
    })

    form.append(title_div, author_div, pages_div, isRead_div, submit_form);
    form_container.append(form);
})