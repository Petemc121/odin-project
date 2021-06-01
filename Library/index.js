addBook = document.getElementById('addBook');
addConfirm = document.getElementById('addConfirm');
formFields = document.getElementsByClassName('formField');
block = document.getElementById('block');
bookForm = document.getElementById('bookForm');
radio = document.getElementsByClassName('radio');
bookContain = document.getElementById('bookContain');
deleteButtons = document.getElementsByClassName('deleteButtons');



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

  let book = new Book(...bookProperties);

    myLibrary.push(book)
    console.log(book);
    console.log(bookProperties);
    return book;

    
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

    for (let i = 0;i < radio.length; i++)
    {
        radio[i].checked = false;
        radio[i].classList.remove('formField');
    }

    for(let i = 0; i < formFields.length; i++)
    {
        formFields[i].value = "";
    }
   

})

addConfirm.addEventListener('click', () => 
{
    addBookToLibrary();
    

    for (let i = myLibrary.length - 1; i < myLibrary.length; i++)
    {
        bookContain.innerHTML += 
        '<div class="books" id="book' + i + '" data-book = "'+ i +'"><p class="inputs bookTitle">Title: ' + myLibrary[i].title + '</p><p class=" inputs bookAuthor"> Author: ' + myLibrary[i].author + '</p><p class="inputs bookPages">Pages: ' + myLibrary[i].pages + '</p><p class="inputs bookRead">Read: ' + myLibrary[i].read + '</p><p class="inputs bookEdition">Edition: ' + myLibrary[i].edition + '</p><button id="delete-button' + i + '" class="deleteButtons" data-book="' + i + '">Delete</button></div>'
}

for (let i = 0; i < deleteButtons.length; i++)
{
    book = document.getElementById('book' + i)
deleteButtons[i].addEventListener('click', () => {
   book.parentNode.removeChild(book);
   myLibrary.splice(i, 1);
   deleteButtons.length = deleteButtons.length - 1;
});
    }

    block.click();


})

for (let i = 0;i < radio.length; i++)
{
radio[i].addEventListener('click', () => {
   radio[i].classList.add('formField');
})
}


