// <!-- JavaScript -->
  
// Function to toggle visibility of sections and change button text
    function toggleSections() {
      const sections = document.querySelectorAll('section:not(.hero)');
      const button = document.getElementById('toggleButton');

      sections.forEach(section => {
        section.classList.toggle('hidden');
      });

      // Change the button text and scroll to the About section if "More" was clicked
      if (button.textContent === "More") {
        button.textContent = "Less";
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
      } else {
        button.textContent = "More";
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
      }
    }