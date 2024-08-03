document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enrollmentForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const courseTitle = document.getElementById('courseTitle').value;
        const name = document.getElementById('name').value;
        const thankYouContainer = document.getElementById('thankYouContainer');
        const thankYouMessage = document.getElementById('thankYouMessage');
        const countdownTimer = document.getElementById('countdown-timer');

        // Hide the form and show the thank you container
        form.style.display = 'none';
        thankYouContainer.style.display = 'block';
        thankYouMessage.innerText = `You are now enrolled in ${courseTitle}, We can't wait to see you ${name}!`;

        const courseStartDates = {
            "Higher Certificate": new Date("2024-09-01"),
            "Diploma in Technology": new Date("2024-10-01"),
            "Bachelor in Technology": new Date("2024-11-01"),
            "Bachelor of Computing": new Date("2024-12-01")
        };

        const startDate = courseStartDates[courseTitle];
        if (startDate) {
            const now = new Date();
            const timeDiff = startDate - now;
            const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            countdownTimer.innerText = `The course will start in ${daysLeft} days.`;
        } else {
            countdownTimer.innerText = `Course start date information not available.`;
        }
    });
});
