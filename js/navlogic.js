const isInSubfolder = window.location.pathname.split('/').length > 2;
const navPath = isInSubfolder ? '../navbar.html' : 'navbar.html';

fetch(navPath)
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;

    const currentPath = window.location.pathname;

    // Define the current active page based on the path
    let activePage = '/index.html';

    if (currentPath === '/' || currentPath.endsWith('/index.html')) {
      activePage = '/index.html';
    } else if (
      currentPath.includes('/portfolio.html') ||
      currentPath.includes('/portfolio/')
    ) {
      activePage = '/portfolio.html';
    } else if (currentPath.includes('/resume.html')) {
      activePage = '/resume.html';
    } else if (currentPath.includes('/contact.html')) {
      activePage = '/contact.html';
    }

    // Highlight the matching nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === activePage) {
        link.classList.add('active');
      }
    });
  });
