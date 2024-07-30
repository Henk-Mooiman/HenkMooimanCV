const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('shape')) {
                const delay = [...entry.target.parentNode.children].indexOf(entry.target) * 0.12; // Stagger by 0.2 seconds
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, delay * 1000);
            } else {
                entry.target.classList.add('show');
            }
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .shape');
hiddenElements.forEach((el) => observer.observe(el));
