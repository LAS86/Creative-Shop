
// JS for section 3
document.querySelectorAll('.story-btn').forEach(btn =>  {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change');
        btn.nextElementSibling.classList.toggle('change');
    });
});
// End JS for Section 3

