document.addEventListener('DOMContentLoaded', function() {
  fetch('/assets/contact.en.txt')
    .then(r => r.text())
    .then(html => {
      const elEn = document.getElementById('contact-en');
      if (elEn) elEn.innerHTML = html;
    })
    .catch(err => console.error('Error loading English contact section:', err));

  fetch('/assets/contact.fr.txt')
    .then(r => r.text())
    .then(html => {
      const elFr = document.getElementById('contact-fr');
      if (elFr) elFr.innerHTML = html;
    })
    .catch(err => console.error('Error loading French contact section:', err));
});
