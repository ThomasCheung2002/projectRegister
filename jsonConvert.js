function initialize() {
    var status = "* Offline *";
    if (navigator.onLine) {
        status = "* Online *";
        retrieveLevels();
    } else {
        const localStorage = window.localStorage;
        if (localStorage) {
            const levels = localStorage.getItem("levels");
            if (levels) {
                displayDetails(JSON.parse(levels));
            }
        }
    }

    document.getElementById("status").innerHTML = status;

    document.body.addEventListener(
        "online",
        function() {
            document.getElementById("status").innerHTML = "Online";
        },
        false
    );
    document.body.addEventListener(
        "offline",
        function() {
            document.getElementById("status").innerHTML = "Offline";
        },
        false
    );
}

function retrieveLevels() {
    const xhr = new XMLHttpRequest();
    const url = "passLevel.json";

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var levels = JSON.parse(xhr.response).levels;
            displayContacts(levels);

            // Store contact data to localstorage
            const localStorage = window.localStorage;
            if (localStorage) {
                localStorage.setItem("levels", JSON.stringify(levels));
            }
        }
    };

    xhr.open("get", url);
    xhr.send();
}

function displayLevels(levels) {
    levels.forEach(addRow);
}

function addRow(aLevel) {
    var tcontent = document.getElementById("tcontent");
    var row = tcontent.insertRow();

    var nameCell = row.insertCell();
    nameCell.setAttribute('data-label', "Name");
    nameCell.innerHTML = aLevel.level;

    var addressCell = row.insertCell();
    addressCell.setAttribute('data-label', "Address");
    addressCell.innerHTML = aLevel.name;

    var mobileCell = row.insertCell();
    mobileCell.setAttribute('data-label', "Mobile");
    mobileCell.innerHTML = aLevel.rpRequired;
}
