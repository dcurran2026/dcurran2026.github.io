const footerPath = window.location.pathname.split('/').length > 2 ? '../footer.html' : 'footer.html';

fetch(footerPath)
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
    document.getElementById('footer-year').textContent = new Date().getFullYear();
  });
