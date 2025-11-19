document.addEventListener('DOMContentLoaded', function() {
  fetch('/assets/footer.txt')
    .then(r => r.text())
    .then(html => {
      const elEn = document.getElementById('footer');
      if (elEn) elEn.innerHTML = html;
    })
    .catch(err => console.error('Error loading English footer section:', err));
});
