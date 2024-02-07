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
  

  // Function to navigate to the next or previous page
function changePage(offset) {
  var currentPageIndex = getCurrentPageIndex();
  var nextPageIndex = currentPageIndex + offset;
  var pages = ['index.html', 'project_1.html', 'project_2.html', 'project_3.html'];

  // Ensure the next page index is within the bounds of the pages array
  if (nextPageIndex < 0) {
    nextPageIndex = pages.length - 1; // Loop back to the last page
  } else if (nextPageIndex >= pages.length) {
    nextPageIndex = 0; // Loop back to the first page
  }

  // Redirect to the next page
  window.location.href = pages[nextPageIndex];
}