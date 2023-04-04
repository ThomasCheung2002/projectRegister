function initialize() {
    if (navigator.onLine) {
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
            var allLevels = JSON.parse(xhr.response).levels;
            displayLevels(allLevels);

            // Store contact data to localstorage
            const localStorage = window.localStorage;
            if (localStorage) {
                localStorage.setItem("levels", JSON.stringify(allLevels));
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
    var levelTable = document.getElementById("levelTable");
    var row = levelTable.createElement("tr");

    var levelCell = row.insertCell();
    levelCell.setAttribute('data-label', "Level");
    levelCell.innerHTML = aLevel.level;

    var nameCell = row.insertCell();
    nameCell.setAttribute('data-label', "Name");
    nameCell.innerHTML = aLevel.name;

    var rpCell = row.insertCell();
    rpCell.setAttribute('data-label', "RP");
    rpCell.innerHTML = aLevel.rpRequired;
}
