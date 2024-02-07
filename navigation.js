// Function to navigate to a specific page based on the index
function goToPage(index) {
    var pages = ['index.html', 'project_1.html', 'project_2.html', 'project_3.html'];
    window.location.href = pages[index - 1];
  }
  
  // Helper function to get the current page index
  function getCurrentPageIndex() {
    var pages = ['index.html', 'project_1.html', 'project_2.html', 'project_3.html'];
    var currentPage = window.location.pathname.split('/').pop();
    return pages.indexOf(currentPage); 
  }
  
  //Highlight the current page dot
  function highlightCurrentPageDot() {
    var currentPageIndex = getCurrentPageIndex();
    var dots = document.querySelectorAll('.dot');
    dots.forEach(function(dot, index) {
      dot.classList.remove('active');
      if (index === currentPageIndex) {
        dot.classList.add('active');
      }
    });
  }
  
  //Add event listeners to the dots
  document.addEventListener('DOMContentLoaded', function() {
    var dots = document.querySelectorAll('.dot');
    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        goToPage(index + 1);
      });
    });
  
    // Highlight the current page dot
    highlightCurrentPageDot();
  });
  