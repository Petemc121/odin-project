addBook = document.getElementById('addBook');
addConfirm = document.getElementById('addConfirm');
formFields = document.getElementsByClassName('formField');
block = document.getElementById('block');
bookForm = document.getElementById('bookForm');
radio = document.getElementsByClassName('radio');
bookContain = document.getElementById('bookContain');
bookNo = 0;


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
    appendBook();
    block.click();

   

})

for (let i = 0;i < radio.length; i++)
{
radio[i].addEventListener('click', () => {
   radio[i].classList.add('formField');
})
}

function appendBook() {
    deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButtons');
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute('data-book',"" + bookNo);
   

    book = document.createElement('div');
    book.classList.add('books');
    book.setAttribute('id', 'book' + bookNo);
    book.setAttribute('data-book',"" + bookNo);

    title = document.createElement('p');
    title.classList.add('bookTitle');
    title.classList.add('inputs');
    title.textContent = "Title: " + myLibrary[bookNo].title;
   

    author = document.createElement('p');
    author.classList.add('bookAuthor');
    author.classList.add('inputs');
    author.textContent = "Author: " + myLibrary[bookNo].author;

    pages = document.createElement('p');
    pages.classList.add('bookPages');
    pages.classList.add('inputs');
    pages.textContent = "Pages: " + myLibrary[bookNo].pages;

    read = document.createElement('p');
    read.classList.add('bookRead');
    read.classList.add('inputs');
    read.textContent = "Read: " + myLibrary[bookNo].read;

    edition = document.createElement('p');
    edition.classList.add('bookEdition');
    edition.classList.add('inputs');
    edition.textContent = "Edition: " + myLibrary[bookNo].edition;

    bookNo++


    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    book.appendChild(edition);
    book.appendChild(deleteButton);

    bookContain.appendChild(book);

    deleteButton.addEventListener('click', () =>
    {
        console.log(deleteButton.dataset.book);
       parentBook = document.getElementById("book" + deleteButton.dataset.book);
       parentBook.parentNode.removeChild(parentBook);
       myLibrary.splice(bookNo, 1);
       bookNo--;
    })
}



    

