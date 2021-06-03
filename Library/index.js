addBook = document.getElementById('addBook');
addConfirm = document.getElementById('addConfirm');
formFields = document.getElementsByClassName('formField');
block = document.getElementById('block');
bookForm = document.getElementById('bookForm');
radio = document.getElementsByClassName('radio');
bookContain = document.getElementById('bookContain');


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

    bookContain.innerHTML = "";

    for (var i = 0; i < myLibrary.length; i++)
    {
    appendBook(i);
    }
    block.click();


})

for (let i = 0;i < radio.length; i++)
{
radio[i].addEventListener('click', () => {
   radio[i].classList.add('formField');
})
}

function appendBook(i) {
    deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButtons');
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute('data-book',"" + i);
    deleteButton.setAttribute('id',"delete" + i); 
    deleteButton.addEventListener('click', function() {
        this.parentNode.remove();
        myLibrary.splice(i-1,1);
        console.log(myLibrary);
    })

    book = document.createElement('div');
    book.classList.add('books');
    book.setAttribute('id', 'book' + i);
    book.setAttribute('data-book',"" + i);

    title = document.createElement('p');
    title.classList.add('bookTitle');
    title.classList.add('inputs');
    title.textContent = "Title: " + myLibrary[i].title;
   

    author = document.createElement('p');
    author.classList.add('bookAuthor');
    author.classList.add('inputs');
    author.textContent = "Author: " + myLibrary[i].author;

    pages = document.createElement('p');
    pages.classList.add('bookPages');
    pages.classList.add('inputs');
    pages.textContent = "Pages: " + myLibrary[i].pages;

    read = document.createElement('p');
    read.classList.add('bookRead');
    read.classList.add('inputs');
    read.textContent = "Read: " + myLibrary[i].read;

    edition = document.createElement('p');
    edition.classList.add('bookEdition');
    edition.classList.add('inputs');
    edition.textContent = "Edition: " + myLibrary[i].edition;

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    book.appendChild(edition);
    book.appendChild(deleteButton);

    bookContain.appendChild(book);

   
    
   
}



