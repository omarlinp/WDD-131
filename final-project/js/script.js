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

