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

// Initial call to set correct colors on load
// This ensures the theme is applied correctly when the page first loads.
// If you want light mode by default, add 'light-mode' class to the <body> tag in index.html
// e.g., <body class="light-mode">
toggledarkmode();