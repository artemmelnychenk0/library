const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.getElementById('read')

const card = document.getElementById('card')
const addBook = document.getElementById('addBook')

const form = document.querySelector('#form')
let modal = document.getElementById("myModal");


addBook.addEventListener('click', () => {
    modal.style.display = 'block'
})

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})


let library = []

form.addEventListener('submit', (e) => {
    let titleForm = title.value;
    let authorForm = author.value;
    let pagesForm = pages.value;
    let readForm = read.value;
    let newBook = new book(`${titleForm}`, `${authorForm}`, `${pagesForm}`, `${readForm}`)
    addBookToLibrary(newBook)

    publish();
    modal.style.display = 'none'
    form.reset();
    e.preventDefault();
})



function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
function addBookToLibrary(a) {
    library.push(a)

}



let a = 0;
function publish() {
    for (let i = a; i < library.length; i++) {
        let box = document.createElement('div')

        box.classList.add('box')

        let deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = 'Delete'

        let changeStatus = document.createElement('button')
        changeStatus.innerHTML = 'Change Read Status'


        let title = document.createElement('div')
        title.classList.add('title')
        let titletNode = document.createTextNode(`Title: ${library[i].title}`)
        title.appendChild(titletNode)
        box.appendChild(title);

        let author = document.createElement('div')
        author.classList.add('author')
        let authorNode = document.createTextNode(`Author: ${library[i].author}`)
        author.appendChild(authorNode)
        box.appendChild(author);

        let pages = document.createElement('div')
        pages.classList.add('pages')
        let pagesNode = document.createTextNode(`Pages: ${library[i].pages}`)
        pages.appendChild(pagesNode)
        box.appendChild(pages);

        let read = document.createElement('div')
        read.classList.add('read')
        let readNode = document.createTextNode(`${library[i].read}`)

        read.appendChild(readNode)

        box.appendChild(read);

        changeStatus.addEventListener('click', () => {
            if (read.innerHTML == 'Read') {
                read.innerHTML = 'Not Read'
            } else if (read.innerHTML == 'Not Read') {
                read.innerHTML = 'Read'
            }
        })

        box.appendChild(deleteBtn)
        box.appendChild(changeStatus)

        card.appendChild(box);

        deleteBtn.addEventListener('click', () => {
            card.removeChild(box);
        })


    }
    a++
}



