addBook = document.getElementById('addBook');
addConfirm = document.getElementById('addConfirm');
formFields = document.getElementsByClassName('formField');
block = document.getElementById('block');
bookForm = document.getElementById('bookForm');
radio = document.getElementsByClassName('radio');

for (let i = 0;i < radio.length; i++)
{
radio[i].addEventListener('click', () => {
   radio[i].classList.add('formField');
})
}

let myLibrary = [];

function Book(title, author, pages, read, edition) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.edition = edition;
}

function addBookToLibrary() {
    bookProperties = [];

    for (let i = 0; i < formFields.length; i++)
    {
        bookProperties.push(formFields[i].value);
    }

    console.log(...bookProperties);

   var book = new Book(...bookProperties);
    myLibrary.push(book)

    console.log(book);
    
}


addBook.addEventListener('mouseout', () => {
    addBook.style.border = "3px solid lightblue";

})

addBook.addEventListener('click', () => {
    addBook.style.border = "5px solid blueviolet";
    block.style.display = "block";
    bookForm.style.display = "block";

})


block.addEventListener('click', () => {
    block.style.display = "none";
    bookForm.style.display = "none";

    for(let i = 0; i < formFields.length; i++)
    {
        formFields[i].value = "";
    }
    for (let i = 0;i < radio.length; i++)
    {
        radio[i].checked = false;
    }

})

addConfirm.addEventListener('click', () => 
{
    addBookToLibrary();
})