
let i;
let tabcontent;
let tablinks;


function openProject(evt, projectName) {
    


// Get all elements with class=tabcontent and hide them

tabcontent = document.getElementsByClassName("tabcontent");

for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
};

// Get all elements with class=tablinks and remove the class "active"

tablinks = document.getElementsByClassName('tablinks');
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
};

// show the current tab, and add an "active" class to the button that opened the tab

document.getElementById(projectName).style.display = 'block';
evt.currentTarget.className += "active";

}

document.addEventListener("DOMContentLoaded", function() {
    openProject({ currentTarget: document.querySelector(".tablinks") }, 'sashaDoor');
});


