function scaffold_slider(checkbox_label) {
    var input = checkbox_label.firstElementChild;
    var label_text = checkbox_label.innerText;
    var title = document.createElement('span');
    var slider = document.createElement('span');

    checkbox_label.innerText = "";

    title.classList.add('title');
    title.innerText = label_text;
    slider.classList.add('slider');

    checkbox_label.appendChild(input);
    checkbox_label.appendChild(slider);
    checkbox_label.appendChild(title);
}

document
    .querySelectorAll('.field label.form-check-label')
    .forEach(scaffold_slider);

const observer = new MutationObserver(function(mutations_list) {
    var check_labels = document.querySelectorAll('.field label.form-check-label');
    check_labels.forEach(scaffold_slider);
});

observer.observe(
    document.querySelector(".cms-container"),
    {
        subtree: false,
        childList: true
    }
);