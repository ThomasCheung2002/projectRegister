// form
function setRegister() {
    memberIDs[0] = document.getElementById("memberID1");
    memberNames[0] = document.getElementById("memberName1");
    orderList[0] = numOfMember;
}

function addMember() {
    numOfMember++;
    orderList[numOfMember - 1] = numOfMember;
    if (numOfMember <= 100) {
        var tableRow = document.getElementById("teamInfo2");
        var row = document.createElement("tr");
        var numberCell = document.createElement("td");
        var idCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var removeCell = document.createElement("td");
        removeCell.className = "middle";

        var form = document.getElementById("register");

        memberIDs[numOfMember - 1] = document.createElement("input");
        memberIDs[numOfMember - 1].setAttribute("type", "text");
        memberIDs[numOfMember - 1].setAttribute("size", "20");
        memberIDs[numOfMember - 1].setAttribute("id", "memberID" + numOfMember);
        memberIDs[numOfMember - 1].className = "memberIDs";
        form.appendChild(memberIDs[numOfMember - 1]);

        memberNames[numOfMember - 1] = document.createElement("input");
        memberNames[numOfMember - 1].setAttribute("type", "text");
        memberNames[numOfMember - 1].setAttribute("size", "67");
        memberNames[numOfMember - 1].setAttribute("id", "memberName" + numOfMember);
        memberNames[numOfMember - 1].className = "memberNames";
        form.appendChild(memberNames[numOfMember - 1]);

        var removeButton = document.createElement("button");
        removeButton.setAttribute("onclick", "removeMember(this)");
        removeButton.setAttribute("type", "button");
        removeButton.innerText = "-";

        numberCell.innerHTML = orderList[numOfMember - 1] = numOfMember;
        idCell.appendChild(memberIDs[numOfMember - 1]);
        nameCell.appendChild(memberNames[numOfMember - 1]);
        removeCell.appendChild(removeButton);
        row.appendChild(numberCell);
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(removeCell);
        tableRow.appendChild(row);
    } else {
        window.alert("Maximum number of team members is 100.");
    }
}

function removeMember(target) {
    if (document.getElementById("teamInfo2").rows.length > 2) {
        var table = target.parentNode.parentNode.parentNode;
        var row = target.parentNode.parentNode.rowIndex;
        var rowCount = table.rows.length;
        memberIDs.splice(row - 1, 1);
        memberNames.splice(row - 1, 1);

        table.deleteRow(row);
        numOfMember--;
        var deleted = orderList.splice((row - 1), 1);

        for (i in orderList) {
            if (orderList[i] > deleted) {
                orderList[i]--;
                document.getElementById("teamInfo2").rows[orderList[i]].cells[0].innerText = orderList[i];
            }
        }
    } else {
        window.alert("There MUST be at least 1 member in the team.");
    }
}

function checkSubProject() {
    var isSubProject = document.getElementById("isSubProject");
    if (isSubProject.checked) {
        document.getElementById("belongingProjectID").disabled = false;
    } else {
        document.getElementById("belongingProjectID").disabled = true;
        document.getElementById("belongingProjectID").value = "";
    }
}

var numOfMember = 1;
var memberIDs = new Array();
var memberNames = new Array();
var orderList = new Array();

var teamMemberIDs = new Array();
var teamMemberNames = new Array();


// submit action
var projectManagerID;
var projectManagerName;

function projectManager() {
    projectManagerID = document.getElementById("projectManagerID").value;
    projectManagerName = document.getElementById("projectManagerName").value;
}

var projectTeamID;
var projectTeamName;

function projectTeam() {
    projectTeamID = document.getElementById("teamID").value;
    projectTeamName = document.getElementById("teamName").value;

    for (var index = 0; index < numOfMember; index++) {
        var idOfMember = memberIDs[index].value;
        teamMemberIDs.push(idOfMember);

        var nameOfMember = memberNames[index].value;
        teamMemberNames.push(nameOfMember);
    }
}

var projectName;
var subProjectIndicator;
var belongingProjectID;
var projectTypes = new Array();
var projectDescription;

function projectInfo() {
    projectName = document.getElementById("projectName").value;
    subProjectIndicator = document.getElementById("isSubProject").checked;
    if (subProjectIndicator) {
        belongingProjectID = document.getElementById("belongingProjectID").value;
    } else {
        belongingProjectID = "N/A";
    }
    projectTypes = document.getElementById("typesOfProject").value.split("|");
    projectDescription = document.getElementById("projectDescription").value;
}

function submitAction() {
    if (confirm('Are you sure to submit?')) {
        projectManager();
        projectTeam();
        projectInfo();

        var resultHTML = `result.html?${projectName}|${subProjectIndicator}|${belongingProjectID}|${projectTypes}|${projectDescription}|${projectTeamID}|${projectTeamName}|${projectManagerID}|${projectManagerName}|${numOfMember}|${teamMemberIDs}|${teamMemberNames}`;
        window.location.replace(resultHTML);
    } else {
        return;
    }
}


// debug
function debugging() {
    var debugWindow = open('url', 'windowName', 'height=500, width=1000');
    debugWindow.document.write('orderList = ' + orderList + '<br><br>' + 'memberIDs = ' + memberIDs + '<br><br>' + 'memberNames =' + memberNames + '<br><br>');
    debugWindow.document.body.style.backgroundColor = "white";
    for (var i = 0; i < numOfMember; i++) {
        var teamMemberID = memberIDs[i].value;
        var teamMemberName = memberNames[i].value;
        teamMembers.set(teamMemberID, teamMemberName);
        debugWindow.document.write('<table>');
        debugWindow.document.write('<tr>');
        debugWindow.document.write('<td width="40">' + (i + 1) + '.&nbsp;</td>');
        debugWindow.document.write('<td width="30">' + teamMemberID + '</td>');
        debugWindow.document.write('<td>' + teamMembers.get(teamMemberID) + '</td>');
        debugWindow.document.write('</tr>');
        debugWindow.document.write('</table>');

    }
}

function fillWithMembers1() {
    var dummyMembers = [
        "Valhein", "Krixi", "Thame", "Lu Bu", "Zanis", "Toro", "Zephys", "Yorn", "Mina", "Azzen'Ka",
        "Veera", "Alice", "Butterfly", "Kahlii", "Omega", "Gildur", "Ormarr", "Mganga", "Taara", "Chaugnar",
        "Violet", "Diaochan", "Nakroth", "Grakk", "Fennik", "Aleister", "Lumburr", "Cresht", "Natalya", "Jinnar",
        "Peura", "Maloch", "Wukong", "Ilumia", "Arthur", "Kriknak", "Airi", "Preyta", "Batman", "Slimz",
        "Raz", "Skud", "Lauriel", "Zuka", "Ignis", "Murad", "Joker", "Zill", "Tel'Annas", "Kil'Groth",
        "Arduin", "Astrid", "Ryoma", "Moren", "Xeniel", "Superman", "Wonder Woman", "Lindis", "Tulen", "TeeMee",
        "Omen", "Max", "Liliana", "Wisp", "Flash", "Rourke", "Arum", "Marja", "Baldum", "Roxie",
        "Amily", "Annette", "Y'bneth", "Riktor", "Wiro", "Elsu", "Quillen", "Sephera", "Veres", "D'Arcy",
        "Capheny", "Florentino", "Hayate", "Errol", "Yena", "Enzo", "Zip", "Qi", "Brunhilda", "Ishar",
        "Volkath", "Krizzix", "Eland'orr", "Dirak", "Keera", "Ata", "Paine", "Laville", "Rouie", "Zata"
    ];
    //var members = new Array();
    //var debugWindow = open('url', 'windowName', 'height=500, width=1000');

    for (var a = 0; a < dummyMembers.length; a++) {
        if ((a + 1) < 10) {
            teamMemberIDs.push("00" + (a + 1));
        } else if ((a + 1) < 100) {
            teamMemberIDs.push("0" + (a + 1));
        } else {
            teamMemberIDs.push(a + 1);
        }
    }

    for (member of dummyMembers) {
        teamMemberNames.push(member);
    }

    /*for (var c = 0; c < dummyMembers.length; c++) {
        members.push("The ID of " + teamMemberNames[c] + " is " + teamMemberIDs[c]);
    }*/

    //debugWindow.document.write('teamMemberIDs = ' + teamMemberIDs + '<br><br>' + 'teamMemberNames = ' + teamMemberNames + '<br><br>');
    /*for (member of members) {
        debugWindow.document.write(member + '<br>');
    }
    debugWindow.document.body.style.backgroundColor = "white";*/

    for (var d = 0; d < dummyMembers.length; d++) {
        if ((d + 1) < document.getElementById("teamInfo2").rows.length) {
            document.getElementById("memberID" + (d + 1)).value = teamMemberIDs[d];
            document.getElementById("memberName" + (d + 1)).value = teamMemberNames[d];
        } else {
            addMember();
            document.getElementById("memberID" + (d + 1)).value = teamMemberIDs[d];
            document.getElementById("memberName" + (d + 1)).value = teamMemberNames[d];
        }
    }
}

function fillWithMembers2() {
    var counting = 101;
    var dummyMembers = [
        "Allain", "Thorne", "Sinestrea", "Dextra"
    ];
    //var members = new Array();
    //var debugWindow = open('url', 'windowName', 'height=500, width=1000');

    for (var a = 0; a < dummyMembers.length; a++) {
        teamMemberIDs.push(counting);
        counting++;
    }

    for (member of dummyMembers) {
        teamMemberNames.push(member);
    }

    /*for (var c = 0; c < dummyMembers.length; c++) {
        members.push("The ID of " + teamMemberNames[c] + " is " + teamMemberIDs[c]);
    }*/

    //debugWindow.document.write('teamMemberIDs = ' + teamMemberIDs + '<br><br>' + 'teamMemberNames = ' + teamMemberNames + '<br><br>');
    /*for (member of members) {
        debugWindow.document.write(member + '<br>');
    }
    debugWindow.document.body.style.backgroundColor = "white";*/

    for (var d = 0; d < dummyMembers.length; d++) {
        if ((d + 1) < document.getElementById("teamInfo2").rows.length) {
            document.getElementById("memberID" + (d + 1)).value = teamMemberIDs[d];
            document.getElementById("memberName" + (d + 1)).value = teamMemberNames[d];
        } else {
            addMember();
            document.getElementById("memberID" + (d + 1)).value = teamMemberIDs[d];
            document.getElementById("memberName" + (d + 1)).value = teamMemberNames[d];
        }
    }
}

function notification() {
    var notificationWindow = open('url', 'windowName', 'height=750, width=1000');
    notificationWindow.document.write('<h3>Your regislation is submitted.</h3>');
    notificationWindow.document.write('<table id="projectInfoTable" border="1">');
    notificationWindow.document.write('<tr>');
    notificationWindow.document.write('<td width="175">Project Name:</td>');
    notificationWindow.document.write('<td width="700">' + projectName + '</td>');
    notificationWindow.document.write('</tr>');
    notificationWindow.document.write('<tr>');
    notificationWindow.document.write('<td colspan="2">');
    if (subProjectIndicator) {
        notificationWindow.document.write('This is a sub-project (ID of Parent Project: ' + belongingProjectID + ').');
    } else {
        notificationWindow.document.write('&nbsp;');
    }
    notificationWindow.document.write('</td>');
    notificationWindow.document.write('</tr>');
    notificationWindow.document.write('<tr>');
    notificationWindow.document.write('<td>Project Type(s):</td>');
    notificationWindow.document.write('<td>');
    for (var temp1 = 0; temp1 < projectTypes.length; temp1++) {
        if (temp1 < (projectTypes.length - 1)) {
            notificationWindow.document.write(projectTypes[temp1] + ', ');
        } else {
            notificationWindow.document.write(projectTypes[temp1]);
        }
    }
    notificationWindow.document.write('</td>');
    notificationWindow.document.write('</tr>');
    notificationWindow.document.write('<tr>');
    notificationWindow.document.write('<td colspan="2">Project Description:<br><br>' + projectDescription + '</td>');
    notificationWindow.document.write('</tr>');
    notificationWindow.document.write('</table>');
    notificationWindow.document.write('<br>');
    notificationWindow.document.write('<table id="projectTeamTable" border="1"');
    notificationWindow.document.write('<tr>');
    notificationWindow.document.write('<td>Team ID</td>');
    notificationWindow.document.write('<td>' + projectTeamID + '</td>');
    notificationWindow.document.write('</tr>');
    notificationWindow.document.write('<tr>');
    notificationWindow.document.write('<td>Team Name:</td>');
    notificationWindow.document.write('<td>' + projectTeamName + '</td>');
    notificationWindow.document.write('</tr>');
    notificationWindow.document.write('<tr><td colspan="2"></td></tr>');
    notificationWindow.document.write('<tr>');
    notificationWindow.document.write('<td width="175">Project Manager ID:</td>');
    notificationWindow.document.write('<td width="700">' + projectManagerID + '</td>');
    notificationWindow.document.write('</tr>');
    notificationWindow.document.write('<tr>');
    notificationWindow.document.write('<td>Project Manager Name:</td>');
    notificationWindow.document.write('<td>' + projectManagerName + '</td>');
    notificationWindow.document.write('</tr>');
    notificationWindow.document.write('<tr><td colspan="2"></td></tr>');
    notificationWindow.document.write('<tr>');
    notificationWindow.document.write('<td>Team Member(s):</td>');
    notificationWindow.document.write('<td>There is(are) ' + numOfMember + ' member(s) in the team.</td>');
    notificationWindow.document.write('</tr>');
    notificationWindow.document.write('<tr>');
    notificationWindow.document.write('<td><b>(#)&emsp;Team Member ID</b></td>');
    notificationWindow.document.write('<th>Team Member Name</th>');
    notificationWindow.document.write('</tr>');
    for (var temp2 = 0; temp2 < numOfMember; temp2++) {
        notificationWindow.document.write('<tr>');
        notificationWindow.document.write('<td>(' + (temp2 + 1) + ')&nbsp;' + teamMemberIDs[temp2] + '</td>');
        notificationWindow.document.write('<td>' + teamMembers.get(teamMemberIDs[temp2]) + '</td>');
        notificationWindow.document.write('</tr>');
    }
    notificationWindow.document.write('</table>');

    notificationWindow.document.body.style.backgroundColor = "white";
}


function sample() {
    let sampleOption = prompt("Select a sample:\nAvaliable Sample: 1 / 2", "");
    if (sampleOption === null) {
        return;
    }
    switch (sampleOption) {
        case "1":
            sampleForm1();
            break;
        case "2":
            sampleForm2();
            break;
        default:
            window.alert("Invalid input, please enter again.");
            sample();
            break;
    }
}

function sampleForm1() {
    document.getElementById("projectManagerID").value = "12002400";
    document.getElementById("projectManagerName").value = "Chan Siu Ming";
    document.getElementById("teamID").value = "T-9487";
    document.getElementById("teamName").value = "AOV Heroes";
    fillWithMembers1();
    document.getElementById("projectName").value = "Sample Project 1-preproject";
    document.getElementById("isSubProject").checked = true;
    checkSubProject();
    document.getElementById("belongingProjectID").value = "MP-2023-0123-4567-8910-1112-A";
    document.getElementById("typesOfProject").value = "Alpha|Bravo|Charlie|Delta|Echo|Foxtrot|Golf|Hotel|India|Juliett";
    document.getElementById("projectDescription").value = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
}

function sampleForm2() {
    document.getElementById("projectManagerID").value = "12003600";
    document.getElementById("projectManagerName").value = "Lee Sau Pei";
    document.getElementById("teamID").value = "T-0487";
    document.getElementById("teamName").value = "AOV Heroes";
    fillWithMembers2();
    document.getElementById("projectName").value = "Sample Project 2";
    document.getElementById("typesOfProject").value = "Mike November|Lima Kilo|Papa";
    document.getElementById("projectDescription").value = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.";
}