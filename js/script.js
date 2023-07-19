const nameInput = document.getElementById("nama");
const emailInput = document.getElementById("Email");
const opsiInput = document.getElementById("opsi");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(event) {
    event.preventDefault()
    const namaVlue = nameInput.value
    const emailValue = emailInput.value
    const opsiValue = opsiInput.value
    nameValidation(namaVlue, emailValue, opsiValue)
})

function nameValidation(nama, email, opsi) {
    if (nama == "" || email == "" || opsi == "") {
        alert("Nama empty / email empty / opsi empty")
    } else {
        alert("sucses")
    }
}

const slideContainer = document.querySelector('.slide');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');

prevButton.textContent = 'Previous';
nextButton.textContent = 'Next';

prevButton.addEventListener('click', () => {
  slideContainer.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  slideContainer.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});

document.body.insertBefore(prevButton, slideContainer);
document.body.insertBefore(nextButton, slideContainer.nextSibling);