document.addEventListener('DOMContentLoaded', function() {
    var hireButtons = document.querySelectorAll('.hireBtn');
    var popupForm = document.getElementById('popupForm');
    var closeBtn = document.getElementsByClassName('close-btn')[0];
    var hireForm = document.getElementById('hireForm');

    hireButtons.forEach(function(button) {
        button.onclick = function() {
            var guideName = this.getAttribute('data-guide');
            document.getElementById('specialMessage').value = 'Hiring guide: ' + guideName;
            popupForm.style.display = 'block';
        }
    });

    closeBtn.onclick = function() {
        popupForm.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popupForm) {
            popupForm.style.display = 'none';
        }
    }

    hireForm.onsubmit = function(event) {
        event.preventDefault();
        alert('Hire request submitted!');
        popupForm.style.display = 'none';
    }
});
