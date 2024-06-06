
// TO LOOP THROUGH AN HTMLCollection    /////

// const book= document.querySelectorAll('.name')
// for(i = 0; i < book.length; i++){
//     console.log(book[i].textContent)
// }

// ADD INNERTEXT ////////////////////////////////////

// const book= document.querySelectorAll('.name')
// for(i = 0; i < book.length; i++){
//     book[i].textContent += ' (book title)'
// }
 

// add innerHTML ///////////


// const bookList = document.querySelector('#book-list')
// // bookList.innerHTML = '<h2> books and more boooks....................</h2>'
// bookList.innerHTML += '<p>more book .................</p>'

const banner = document.querySelector('#page-banner')
console.log('page-banner node type is', banner.nodeType)
console.log('page-banner node name is', banner.nodeName)
console.log('page-banner  has child nodes ', banner.hasChildNodes())

