
    function f() {
    // Get input values
    let name = document.querySelector(".t1 input[placeholder='Your full name']").value;
    let age = document.querySelector(".t1 input[placeholder='ex:20']").value;
    let email = document.querySelector(".t1 input[placeholder=\"ex: 'xxxx@gmail.com'\"]").value;
    let course = document.getElementById("in").value;
    let gender = document.querySelector(".t1 input[name='Gender']:checked");

    // Validation check
    if (name === "" || age === "" || email === "" || !gender) {
        alert("Please fill in all fields.");
        return;
    }

    // Get gender value
    gender = gender.nextSibling.textContent.trim();

    // Get table reference
    let table = document.querySelector(".t2");

    // Insert a new row
    let newRow = table.insertRow(-1);

    // Insert new cells with values
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = age;
    newRow.insertCell(2).innerText = gender;
    newRow.insertCell(3).innerText = course;
    newRow.insertCell(4).innerText = email;

    // Create delete button
    let deleteCell = newRow.insertCell(5);
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "DELETE";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.onclick = function () {
        table.deleteRow(newRow.rowIndex);
    };
    deleteCell.appendChild(deleteBtn);

    // Clear form fields after submission
    document.querySelector(".t1 input[placeholder='Your full name']").value = "";
    document.querySelector(".t1 input[placeholder='ex:20']").value = "";
    document.querySelector(".t1 input[placeholder=\"ex: 'xxxx@gmail.com'\"]").value = "";
    document.querySelectorAll(".t1 input[name='Gender']").forEach(radio => radio.checked = false);
}
