// Script for Naqaa Foundation Website

document.addEventListener('DOMContentLoaded', () => {
    console.log('Naqaa Foundation Website Loaded');
    
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your enquiry! We will get back to you soon.');
            form.reset();
        });
    }
});
