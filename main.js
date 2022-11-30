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
        newParagraf.classList.add('.notePrg');
        newParagraf.innerText = input.value;

        let divContent = document.createElement('div');
        divContent.classList.add('divcontent');
        let i = document.createElement('i');
        i.className= 'bx bxs-x-circle';
        divContent.appendChild(i);
        divContent.append(newParagraf);
        divContainer.append(divContent);
        
        input.value = "";

        i.addEventListener("click", function(){
            this.parentElement.remove();
            if(divContainer.innerText == ""){
                divContainer.style.display = "none";
            }
        })
    }
})
