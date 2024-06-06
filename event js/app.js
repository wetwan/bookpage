document.addEventListener('DOMContentLoaded', ()=>{
    const list = document.querySelector('ul')
    const addForm = document.querySelector('#add-book')
    const button = document.querySelector('button')
    const Add = document.querySelector('#Add').value
    const hideBox = document.querySelector('#hide')
    const books = document.querySelectorAll('li')
    const search = document.querySelector('#search');
    const tabs = document.querySelectorAll('.about');
    const panels = document.querySelectorAll('.contact-b');


    list.addEventListener('click', (e) => {
        if(e.target.className == 'delete'){
            const li = e.target.parentElement
            li.remove(li)
        }
    })


    // to add a new Element to dom
    button.addEventListener('click', (e)=>{
        e.preventDefault
        

        // create Element///
        const li= document.createElement('li')
        const bookName= document.createElement('span')
        const dltBtn= document.createElement('span')

    // append to dom

        li.appendChild(bookName)
        li.appendChild(dltBtn)
        list.appendChild(li)

        // add Text
        dltBtn.textContent='Delete'
        bookName.textContent=Add

        // add class///
        bookName.classList.add('nam')
        dltBtn.classList.add('delete')
    })

    hideBox.addEventListener('change' ,(e)=>{
        if (hideBox.checked){
            list.style.display='none'
        }
        else{
            list.style.display='block'
        }
    })


    search.addEventListener('keyup', (e)=>{
        const term = e.target.value.toLowerCase()
        // for (i=0; i < books.length; i++)(book)=>{
            books.forEach(function(book){
                const title = book.firstElementChild.textContent.toLowerCase()  /// for a list
            // const title = book.firstElementChild.textContent.toLowerCase()  /// for a fullwebsite


                if(title.indexOf(term) != -1){
                book.style.display='block'
            }
                else{
                book.style.display='none'
            }
            }

            )
            
        }

    )

  

                tabs.forEach(tab => {
                    tab.addEventListener('click', function() {
                        tabs.forEach(tab => tab.classList.remove('active'));
                        this.classList.add('active');

                     
                        panels.forEach(panel => panel.classList.remove('active'));
                        const targetPanel = document.querySelector(this.dataset.target);
                        targetPanel.classList.add('active');
                    });
                });


})

