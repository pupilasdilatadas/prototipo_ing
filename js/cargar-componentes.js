function loadComponent(url, containerId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById(containerId).innerHTML += this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function loadComponent(url, containerId, elementId, className) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var container = document.getElementById(containerId);
            container.innerHTML += this.responseText;
            var element = document.getElementById(elementId);
            if (element) {
                element.classList.add(className);
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

