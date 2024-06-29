var pos = document.documentElement;

// Set initial values for the custom properties
pos.style.setProperty('--x', '105%');
pos.style.setProperty('--y', '-15%');

// Add mousemove event listener
pos.addEventListener("mousemove", e => {
    pos.style.setProperty('--x', e.clientX + 'px');
    pos.style.setProperty('--y', e.clientY + 'px');
    document.body.style.cursor = 'none';
    document.querySelector('.light').classList.add('show-light');
});
