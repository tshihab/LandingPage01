// entire progress-bar section
// every element will be animated for this part except the progress bar
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
        
        // this else part will be used to remove content when the div is not active
        else {
            reveals[i].classList.remove("active");
        }
    }

}


// individual progress bars
function reveal_progress() {
    var reveals_progress = document.querySelectorAll(".reveal_progress");

    for (var i = 0; i < reveals_progress.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals_progress[i].getBoundingClientRect().top;
        var elementVisible = -30;

        if (elementTop < windowHeight - elementVisible) {
            reveals_progress[i].classList.add("active");
        }
        
        // this else part will be used to remove content when the div is not active
        else {
            reveals_progress[i].classList.remove("active");
        }
    }

}



window.addEventListener("scroll", reveal, true);
window.addEventListener("scroll", reveal_progress, true);