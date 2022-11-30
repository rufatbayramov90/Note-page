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
        divContent.append(newParagraf);
        divContainer.append(divContent);
    }
})
