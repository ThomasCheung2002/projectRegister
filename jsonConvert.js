function initialize() {
    if (navigator.onLine) {
        retrieveLevels();
    } else {
        const localStorage = window.localStorage;
        if (localStorage) {
            const levelArray = localStorage.getItem("levels");
            if (levelArray) {
                displayDetails(JSON.parse(levelArray));
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
    var row = document.createElement("tr");

    var levelCell = document.createElement("td");
    levelCell.setAttribute('data-label', "Level");
    levelCell.setAttribute('style', "text-align:center;");
    levelCell.innerHTML = aLevel.level;

    var nameCell = document.createElement("td");
    nameCell.setAttribute('data-label', "Name");
    nameCell.innerHTML = aLevel.name;

    var rpCell = document.createElement("td");
    rpCell.setAttribute('data-label', "RP");
    rpCell.setAttribute('style', "text-align:center;");
    rpCell.innerHTML = aLevel.rpRequired;

    row.appendChild(levelCell);
    row.appendChild(nameCell);
    row.appendChild(rpCell);

    levelTable.appendChild(row);
}
