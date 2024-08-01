// Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;

  if (name.trim() === '') {
    alert('Please enter your name');
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (gender === '') {
    alert('Please select an option');
    return;
  }

  console.log('Form submitted:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`What do you need?: ${gender}`);
});

//slideShow

let indexSlide = 1;
showSlide();

function nextSlide(n) {
  showSlide((indexSlide += n));
}

function showSlide(n) {
  let listImage = document.getElementsByClassName('main-content-banner');
  console.log(listImage);

  if (n > listImage.length) indexSlide = 1;

  //algoritm image removal
  let index = 0;
  while (index < listImage.length) {
    listImage[index].style.display = 'none';
    index++;
  }

  //algoritm generate image
  listImage[indexSlide - 1].style.display = 'block';
}

setInterval(() => nextSlide(1), 1800);
