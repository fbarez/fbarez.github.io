var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

const linkElements = document.querySelectorAll(".nav-link");
const sections = [];
for (let section of document.querySelectorAll(".section")) sections.push(section);
sections.reverse();
const heights = [];

for (let navLink of linkElements) {
    let href = navLink.getAttribute("href");
    if (href.startsWith("#")) {
        let target = document.querySelector(href);
        let height = target.offsetTop;
        heights.push({
            link: navLink,
            top: height
        });
        navLink.classList.remove("active");

        navLink.addEventListener("click", (evt) => {
            console.log("click");
            window.scroll(0, Math.max(0, height-200)); // built-in link click hides heading
            evt.preventDefault();
        });
    }
}

let onscroll = (evt) => {
    let scroll = window.scrollY;
    if (document.querySelector(".active")) document.querySelector(".active").classList.remove("active");
    if (scroll === 0) {
        document.querySelector(`[href="#${sections[sections.length-1].id}"]`).classList.add("active");
        return;
    }
    for (let section of sections) {
        if (window.innerHeight/3 > section.getBoundingClientRect().top && window.innerHeight/3 < section.getBoundingClientRect().bottom) {
            document.querySelector("[href=\"#"+section.id+"\"]").classList.add("active");
            return;
        }
    }
}

window.addEventListener("scroll", onscroll)

onscroll()

/*const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
        // verify the element is intersecting
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            // remove old active class
            document.querySelector(".active").classList.remove("active");
            // get id of the intersecting section
            let id = entry.target.getAttribute("id");
            // find matching link & add appropriate class
            document.querySelector('[href="#'+id+'"]').classList.add('active');
        }
    });
};*/

/*// init the observer
const options = {
    threshold: 0.50,
};

const observer = new IntersectionObserver(changeNav, options);

// target the elements to be observed
const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
    observer.observe(section);
});*/