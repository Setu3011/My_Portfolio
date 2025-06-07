document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hire-me-btn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevents default navigation

        const link = document.createElement('a');
        link.href = 'Setu_resume.pdf'; // File is in the root folder
        link.download = 'Setu_resume.pdf'; // Set the downloaded file name

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

