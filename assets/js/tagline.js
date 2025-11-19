document.addEventListener('DOMContentLoaded', function() {
  let taglineEn = '';
  let taglineFr = '';

  // Fetch English tagline
  fetch('/assets/tagline.en.txt')
    .then(response => response.text())
    .then(text => {
      taglineEn = text;
      const elEn = document.getElementById('tagline-en');
      if (elEn) elEn.innerHTML = taglineEn;
    })
    .catch(err => console.error('Error loading English tagline:', err));

  // Fetch French tagline
  fetch('/assets/tagline.fr.txt')
    .then(response => response.text())
    .then(text => {
      taglineFr = text;
      const elFr = document.getElementById('tagline-fr');
      if (elFr) elFr.innerHTML = taglineFr;
    })
    .catch(err => console.error('Error loading French tagline:', err));
});