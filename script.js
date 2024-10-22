function loadHTML(elementId, filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
      generateActiveLink();
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}
  
loadHTML('header', 'layouts/header.html');
loadHTML('footer', 'layouts/footer.html');

function generateActiveLink() {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.pathname.split("/").pop();

  console.log(navLinks);
  

  navLinks.forEach(link => {
    const linkUrl = link.getAttribute("href");

    if (linkUrl === currentUrl) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
  