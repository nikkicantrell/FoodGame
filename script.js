var date = new Date();
var id = prompt("Please enter your participant id");
var startDate = 0;
if(id != null) {
    if(confirm("Are you ready?")) {
        date = new Date();
        startDate = date.getTime();
        var food = document.getElementById("food");
        food.innerHTML = '<input type="image" src="images/cheetos-puffs.png" width="276"' +
        'height="400" alt="Cheetos Puffs" onclick="chose()" title="Cheetos"/>'
        food.innerHTML += '<input type="image" src="images/cookies.jpg" width="400"' +
        'height="400" alt="Cookies" onclick="chose()" title="Cookies"/>'
        food.innerHTML += '<input type="image" src="images/spk.jpeg" width="440"' +
        'height="400" alt="Sour Patch" onclick="chose()" title="Sour Patch"/>'
    }
}
function chose() {
    date = new Date();
    var endDate = date.getTime();
    var content = id + "," + startDate + "," + endDate + "\n";
    console.log(content);
    download("results" + id + ".csv", content);
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
