const markList = document.getElementsByTagName("mark");
const show = () => {
    checkbox = document.getElementById("show");
    for (let elm of markList) {
        if(checkbox.checked) {
            elm.classList.add("mark-show");
        } else {
            elm.classList.remove("mark-show");
        }
    }
}

for (let elm of markList) {
    elm.addEventListener("click", () => {
        elm.classList.toggle("mark-show");
    });
}

const print_noanswer = document.getElementById("print-noanswer");
print_noanswer.innerText = "解答無しで印刷する"
print_noanswer.addEventListener("click", () => {
    for(let elm of markList) {
        elm.classList.remove("mark-show");
    }
    window.print();
});

const print_answer = document.getElementById("print-answer");
print_answer.innerText = "解答有りで印刷する"
print_answer.addEventListener("click", () => {
    for(let elm of markList) {
        elm.classList.add("mark-show");
    }
    window.print();
});


window.onload = () => {
    history.replaceState(null, '', "index.html");
}


// insert head links (favicon, css)
const head = document.getElementsByTagName('head')[0];

const favicon_link = document.createElement('link');
favicon_link.rel = 'shortcut icon';
favicon_link.href = './favicon.ico';
favicon_link.type = 'image/x-icon';
head.appendChild(favicon_link);

const css_link = document.createElement('link');
css_link.rel = 'stylesheet';
css_link.type = 'text/css';
css_link.href = 'main.css';
head.appendChild(css_link);