function toggledarkmode() {
  document.body.classList.toggle('light-mode');

  // Set CSS variables based on light-mode class
  if (document.body.classList.contains('light-mode')) {
    document.documentElement.style.setProperty('--dark-bg', '#f0f0f0'); /* Light gray background */
    document.documentElement.style.setProperty('--light-text', '#333333'); /* Dark gray text */
    document.documentElement.style.setProperty('--green-accent', '#006400'); /* Dark green for accents in light mode */
    document.documentElement.style.setProperty('--gray', '#bbbbbb'); /* Lighter gray for cards/secondary elements */
    document.documentElement.style.setProperty('--blue', '#306998'); /* Keep original blue for light mode placeholders */
    document.documentElement.style.setProperty('--input-bg', '#e0e0e0'); /* Light gray for inputs in light mode */
    document.documentElement.style.setProperty('--input-text', '#333333'); /* Dark gray for input text in light mode */
  } else {
    document.documentElement.style.setProperty('--dark-bg', '#282828'); /* Darker gray background */
    document.documentElement.style.setProperty('--light-text', '#FFFFFF'); /* Text is white */
    document.documentElement.style.setProperty('--green-accent', '#00C853'); /* Accents are green */
    document.documentElement.style.setProperty('--gray', '#383838'); /* Darker gray for cards */
    document.documentElement.style.setProperty('--blue', '#6090c0');
    document.documentElement.style.setProperty('--input-bg', '#555555'); /* Medium gray for inputs in dark mode */
    document.documentElement.style.setProperty('--input-text', '#FFFFFF'); /* White for input text in dark mode */
  }
}
document.getElementById("contact-form").addEventListener("submit",function(event){
  event.preventDefault();

  let parms ={
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value
  }

  console.log(parms.name);
  console.log(parms.email);
  console.log(parms.message);
  
  const serviceID = "service_98c96gb";
  const templateID ="contact_form";

  emailjs.send(serviceID,templateID,parms).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);

});

function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') { // Check if it's currently displayed
        openDropdown.style.display = 'none';
      }
    }
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') { // Check if it's currently displayed
        openDropdown.style.display = 'none';
      }
    }
  }

  // Close the hamburger menu if clicked outside
  const navLinks = document.getElementById("nav-links");
  const hamburger = document.querySelector(".hamburger");

  // Check if the clicked target is NOT the nav-links itself or a descendant, AND NOT the hamburger button
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target) && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
  }
}

// Toggle dropdown on button click for better mobile usability
document.addEventListener('DOMContentLoaded', (event) => {
    const dropbtn = document.querySelector('.dropbtn');
    if (dropbtn) {
        dropbtn.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });
    }
});