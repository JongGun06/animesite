// document.getElementById('searchInput').addEventListener('input', function() {
//     let filter = this.value.toLowerCase();
//     let listItems = document.querySelectorAll('#list .list-item');
    
//     listItems.forEach(function(item) {
//         let text = item.textContent.toLowerCase();
//         if (text.includes(filter)) {
//             item.style.display = '';
//             item.innerHTML = item.textContent.replace(
//                 new RegExp(filter, 'gi'),
//                 match => `<span class="highlight">${match}</span>`
//             );
//         } else {
//             item.style.display = 'none';
//         }
//     });
// });

//anime cart
// let inp  = document.querySelector('#inp')
// let inp2  = document.querySelector('#inp_src')
// let inp3  = document.querySelector('#inp_name')
// let btn = document.querySelector('button')
// let blocks = document.querySelector('#list')

// let alltodo = []

// if (localStorage.getItem('todo')) {
//     alltodo = JSON.parse(localStorage.getItem('todo'))
//     perebor()
// }



// btn.addEventListener('click', () => {
//     let todolist = {
//         text: inp.value,
//         src: inp2.value,
//         name: inp3.value
//     }
//     alltodo.push(todolist)
//     perebor()
//     localStorage.setItem('todo', JSON.stringify(alltodo))


// })


// function perebor() {
//     let chat = ''
//     alltodo.forEach((i) => {
        
//         chat += `<div class="list-item col">
//         <img src="${i.src}">
//         <h2>${i.name}</h2>
//         ${i.text}
//         </div>`
//         blocks.innerHTML = chat
//     })
// }



//номер2


// let inp = document.querySelector('#inp');
// let inp2 = document.querySelector('#inp_src');
// let inp3 = document.querySelector('#inp_name');
// let btn = document.querySelector('#button');
// let blocks = document.querySelector('#list');

// if (!inp || !inp2 || !inp3 || !btn || !blocks) {
//     console.error("Один или несколько элементов не найдены в DOM.");
// } else {
//     let alltodo = [];

//     if (localStorage.getItem('anime')) {
//         alltodo = JSON.parse(localStorage.getItem('anime'));
//         perebor();
//     }

//     btn.addEventListener('click', () => {
//         if (inp.value.trim() === "" || inp2.value.trim() === "" || inp3.value.trim() === "") {
//             console.warn("Пожалуйста, заполните все поля.");
//             return;
//         }

//         let todolist = {
//             text: inp.value,
//             src: inp2.value,
//             name: inp3.value
//         };

//         alltodo.push(todolist);
//         perebor();
//         localStorage.setItem('anime', JSON.stringify(alltodo));
//     });

//     function perebor() {
//         let chat = '';
//         alltodo.forEach((i) => {
//             chat += `<div class="list-item col">
//             <img src="${i.src}" alt="Image">
//             <h2>${i.name}</h2>
//             <p class="dn">${i.text}</p>
//             <button onclick='toggleDisplay(event)'>Смотреть</button>
//             </div>`;
            
//         });
//         blocks.innerHTML = chat;
//         function toggleDisplay(event) {
//             // Получаем все блоки с классом "block"
//             const blocks = document.querySelectorAll('.col');
          
//             // Проходим по всем блокам и скрываем их
//             blocks.forEach(block => {
//               block.classList.add('hidden');
//             });
          
//             // Показываем только кликнутый блок
//             event.target.closest('.block').classList.remove('hidden');
//           }
//     }
// }















//3333333333333333333333333333












// document.getElementById('searchInput').addEventListener('input', function() {
//     let filter = this.value.toLowerCase();
//     let listItems = document.querySelectorAll('#list .list-item');
    
//     listItems.forEach(function(item) {
//         let text = item.textContent.toLowerCase();
//         if (text.includes(filter)) {
//             item.style.display = '';
//             item.innerHTML = item.textContent.replace(
//                 new RegExp(filter, 'gi'),
//                 match => `<span class="highlight">${match}</span>`
//             );
//         } else {
//             item.style.display = 'none';
//         }
//     });
// });

// let inp = document.querySelector('#inp');
// let inp2 = document.querySelector('#inp_src');
// let inp3 = document.querySelector('#inp_name');
// let btn = document.querySelector('#button');
// let blocks = document.querySelector('#list');
// let createAnime = document.querySelector('.createAnime')
// let carousel = document.querySelector('.carousel')


// if (!inp || !inp2 || !inp3 || !btn || !blocks) {
//     console.error("Один или несколько элементов не найдены в DOM.");
// } else {
//     let alltodo = [];

//     if (localStorage.getItem('anime')) {
//         alltodo = JSON.parse(localStorage.getItem('anime'));
//         perebor();
//     }

//     btn.addEventListener('click', () => {
//         if (inp.value.trim() === "" || inp2.value.trim() === "" || inp3.value.trim() === "") {
//             console.warn("Пожалуйста, заполните все поля.");
//             return;
//         }

//         let todolist = {
//             text: inp.value,
//             src: inp2.value,
//             name: inp3.value
//         };

//         alltodo.push(todolist);
//         perebor();
//         localStorage.setItem('anime', JSON.stringify(alltodo));
//     });

//     function perebor() {
//         let chat = '';
//         alltodo.forEach((i) => {
//             chat += `<div class="list-item col">
//             <img src="${i.src}" alt="Image">
//             <h2>${i.name}</h2>
//             <p class="dn">${i.text}</p>
//             <button class='smotret' onclick='toggleDisplay(event)'>Смотреть</button>
//             </div>`;
//         });
//         blocks.innerHTML = chat;
//     }
//     function toggleDisplay(event) {
//         const blocks = document.querySelectorAll('.col');
//         blocks.forEach(block => {
//             block.classList.add('hidden');
//             carousel.classList.add('hidden')
//             createAnime.classList.add('hidden')
            

//         });
        
//         event.target.closest('.col').classList.remove('hidden');
//         let smtr = document.querySelector('.smotret')
//         smtr.style.display = 'none'
        
//     }
// }

//22222222222222222222222

// document.getElementById('searchInput').addEventListener('input', function() {
//     let filter = this.value.toLowerCase();
//     let listItems = document.querySelectorAll('#list .list-item');
    
//     listItems.forEach(function(item) {
//         let text = item.textContent.toLowerCase();
//         if (text.includes(filter)) {
//             item.style.display = '';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// });

// let inp = document.querySelector('#inp');
// let inp2 = document.querySelector('#inp_src');
// let inp3 = document.querySelector('#inp_name');
// let btn = document.querySelector('#button');
// let blocks = document.querySelector('#list');
// let createAnime = document.querySelector('.createAnime');
// let carousel = document.querySelector('.carousel');

// if (!inp || !inp2 || !inp3 || !btn || !blocks) {
//     console.error("Один или несколько элементов не найдены в DOM.");
// } else {
//     let alltodo = [];

//     if (localStorage.getItem('anime')) {
//         alltodo = JSON.parse(localStorage.getItem('anime'));
//         renderList();
//     }

//     btn.addEventListener('click', () => {
//         if (inp.value.trim() === "" || inp2.value.trim() === "" || inp3.value.trim() === "") {
//             console.warn("Пожалуйста, заполните все поля.");
//             return;
//         }

//         let todolist = {
//             text: inp.value,
//             src: inp2.value,
//             name: inp3.value
//         };

//         alltodo.push(todolist);
//         renderList();
//         localStorage.setItem('anime', JSON.stringify(alltodo));
//     });

//     function renderList() {
//         blocks.innerHTML = '';
//         alltodo.forEach((item, index) => {
//             let itemDiv = document.createElement('div');
//             itemDiv.className = 'list-item col';
            
//             let img = document.createElement('img');
//             img.src = item.src;
//             img.alt = "Image";
            
//             let title = document.createElement('h2');
//             title.textContent = item.name;
            
//             let text = document.createElement('p');
//             text.className = 'dn';
//             text.innerHTML = `${item.text}`;
            
//             let button = document.createElement('button');
//             button.className = 'smotret';
//             button.textContent = 'Смотреть';
//             button.addEventListener('click', () => toggleDisplay(index));
            
//             itemDiv.appendChild(img);
//             itemDiv.appendChild(title);
//             itemDiv.appendChild(text);
//             itemDiv.appendChild(button);
            
//             blocks.appendChild(itemDiv);
//         });
//     }

//     function toggleDisplay(index) {
//         const listItems = document.querySelectorAll('.list-item');
//         listItems.forEach((item, idx) => {
//             if (idx === index) {
//                 item.classList.remove('hidden');
//                 let smtrButton = item.querySelector('.smotret');
//                 smtrButton.style.display = 'none'; // скрываем кнопку "Смотреть"
//             } else {
//                 item.classList.add('hidden');
//             }
//         });

//         carousel.classList.add('hidden');
//         createAnime.classList.add('hidden');
//     }
// }
const searchInput = document.getElementById('searchInput');
        const blocksContainer = document.getElementById('list');
        const blocks2 = blocksContainer.getElementsByClassName('col');

        searchInput.addEventListener('input', function() {
            const filter = searchInput.value.toLowerCase();
            for (let i = 0; i < blocks2.length; i++) {
                const blockTitle = blocks2[i].getElementsByTagName('h2')[0];
                if (blockTitle.innerText.toLowerCase().includes(filter)) {
                    blocks2[i].style.display = "";
                } else {
                    blocks2[i].style.display = "none";
                }
            }
        });



// document.getElementById('searchInput').addEventListener('input', function() {
//     let filter = this.value.toLowerCase();
//     let listItems = document.querySelectorAll('#list .list-item');
    
//     listItems.forEach(function(item) {
//         let text = item.textContent.toLowerCase();
//         if (text.includes(filter)) {
//             item.style.display = '';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// });



let inp = document.querySelector('#inp');
let inp2 = document.querySelector('#inp_src');
let inp3 = document.querySelector('#inp_name');
let btn = document.querySelector('#button');
let blocks = document.querySelector('#list');
let createAnime = document.querySelector('.createAnime');
let carousel = document.querySelector('.carousel');

if (!inp || !inp2 || !inp3 || !btn || !blocks) {
    console.error("Один или несколько элементов не найдены в DOM.");
} else {
    let alltodo = [];

    if (localStorage.getItem('anime')) {
        alltodo = JSON.parse(localStorage.getItem('anime'));
        renderList();
    }

    btn.addEventListener('click', () => {
        if (inp.value.trim() === "" || inp2.value.trim() === "" || inp3.value.trim() === "") {
            console.warn("Пожалуйста, заполните все поля.");
            return;
        }

        let todolist = {
            text: inp.value,
            src: inp2.value,
            name: inp3.value
        };

        alltodo.push(todolist);
        renderList();
        localStorage.setItem('anime', JSON.stringify(alltodo));
    });

    function renderList() {
        blocks.innerHTML = '';
        alltodo.forEach((item, index) => {
            let itemDiv = document.createElement('div');
            itemDiv.className = 'list-item col';
            
            let img = document.createElement('img');
            img.className = 'img_card'
            img.src = item.src;
            img.alt = "Image";
            
            let title = document.createElement('h2');
            title.textContent = item.name;
            
            let text = document.createElement('p');
            text.className = 'hidden'; // Скрываем текст изначально
            text.innerHTML = `${item.text}`;
            
            let button = document.createElement('button');
            button.className = 'smotret';
            button.className = 'glow-on-hover'
            button.textContent = 'Смотреть';
            button.addEventListener('click', () => toggleDisplay(index));
            
            itemDiv.appendChild(img);
            itemDiv.appendChild(title);
            itemDiv.appendChild(text);
            itemDiv.appendChild(button);
            
            blocks.appendChild(itemDiv);
        });
    }

    function toggleDisplay(index) {
        const listItems = document.querySelectorAll('.list-item');
        listItems.forEach((item, idx) => {
            if (idx === index) {
                let textElement = item.querySelector('p');
                textElement.classList.remove('hidden'); // Показываем текст
                let smtrButton = item.querySelector('.smotret');
                smtrButton.style.display = 'none'; // скрываем кнопку "Смотреть"
            } else {
                item.classList.add('hidden'); // Скрываем все остальные блоки
            }
        });
    
        carousel.classList.add('hidden');
        createAnime.classList.add('hidden');
    }
    
}