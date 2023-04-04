var queryString = location.search.substring(1);
var regislationData = queryString.split("|");

function dataHandling() {
    //checkInput();
    document.getElementById("projectNameField").innerHTML = decodeURIComponent(regislationData[0]);
    if (decodeURIComponent(regislationData[1]) === 'true') {
        document.getElementById("subProjectNotice").innerHTML = decodeURIComponent("This is a sub-project (ID of Parent Project: " + regislationData[2] + ").");

    } else {
        document.getElementById("subProjectNotice").innerHTML = "&nbsp;";
    }
    var projectTypes = regislationData[3].split(",");
    for (var index = 0; index < projectTypes.length; index++) {
        if (index < (projectTypes.length - 1)) {
            document.getElementById("projectTypesField").innerHTML += decodeURIComponent(projectTypes[index]) + ", ";
        } else {
            document.getElementById("projectTypesField").innerHTML += decodeURIComponent(projectTypes[index]);
        }
    }
    document.getElementById("projectDescriptionField").innerHTML = decodeURIComponent(regislationData[4]);
    document.getElementById("teamIDField").innerHTML = decodeURIComponent(regislationData[5]);
    document.getElementById("teamNameField").innerHTML = decodeURIComponent(regislationData[6]);
    document.getElementById("projectManagerIDField").innerHTML = decodeURIComponent(regislationData[7]);
    document.getElementById("projectManagerNameField").innerHTML = decodeURIComponent(regislationData[8]);

    var count = 1;
    var amount = decodeURIComponent(regislationData[9]);
    var memberIDs = regislationData[10].split(",");
    var memberNames = regislationData[11].split(",");
    var number = memberNames.length;
    var table = document.getElementById("projectTeamTable2");
    for (var index = 0; index < amount; index++) {
        var aRow = document.createElement("tr");
        var countCell = document.createElement("td");
        var memberIDCell = document.createElement("td");
        var memberNameCell = document.createElement("td");

        var countCellContent = "(" + count + ")";
        count++;

        var memberIDCellContent = decodeURIComponent(memberIDs[index]);
        var memberNameCellContent = decodeURIComponent(memberNames[index]);

        countCell.innerHTML = countCellContent;
        memberIDCell.innerHTML = memberIDCellContent;
        memberNameCell.innerHTML = memberNameCellContent;

        aRow.appendChild(countCell);
        aRow.appendChild(memberIDCell);
        aRow.appendChild(memberNameCell);
        table.appendChild(aRow);
    }
    document.getElementById("numberOfMembers").innerHTML = amount;
}

function checkInput() {
    for (var temp = 0; temp < regislationData.length; temp++) {
        document.getElementById("debugSpan").innerHTML += regislationData[temp];
    }
}