//placec page read more process
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read_more');
    const moreContent = document.querySelector('.more_content');
  
    readMoreBtn.addEventListener('click', function() {
      // Toggle the visibility of more_content
      if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        readMoreBtn.textContent = 'Read less';
      } else {
        moreContent.style.display = 'none';
        readMoreBtn.textContent = 'Read more';
      }
    });
  });
  