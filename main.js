let button = document.querySelector('button');
let divContainer = document.querySelector('.formDiv');
let inputIt = document.querySelector('#prevent');

button.addEventListener("click", function(event){
    if(inputIt.value == ""){
        event.preventDefault();
        alert('Enter A Note');
    }else{
        divContainer.style.display = "block";
        let input = document.querySelector('input');

        let newParagraf = document.createElement('p');
        newParagraf.classList.add('notePrg');
        newParagraf.innerText = input.value;

        let divContent = document.createElement('div');
        divContent.classList.add('divcontent');
        divContent.append(newParagraf);
        divContainer.append(divContent);
        //----------------
        let i = document.createElement('i');
        i.className='bx bxs-x-circle';
        divContent.appendChild(i);
        input.value = "";


        i.addEventListener("click", function(){
            this.parentElement.remove();
            if(divContainer.innerText == ""){
                divContainer.style.display = "none";
            }
        })

        const str = document.querySelector('.bx-sort-up');
        const icn = document.querySelector('.bx-sort-down');
        str.addEventListener("click", function(){
            str.style.display = "none";
            icn.style.display = "block";
            const task = [...document.querySelectorAll('.divcontent')];
            task.sort((a,b)=>{
                return parseInt(b.innerText) - parseInt(a.innerText);
            })
            divContainer.replaceChildren(...divContainer.children,...task)
        })
        icn.addEventListener("click", function(){
            str.style.display = "block";
            icn.style.display = "none";
            const task = [...document.querySelectorAll('.divcontent')];
          task.sort((a,b)=>{
            return parseInt(a.innerText) - parseInt(b.innerText);  
          })
          divContainer.replaceChildren(...divContainer.children,...task)
          
        })
    }
})
