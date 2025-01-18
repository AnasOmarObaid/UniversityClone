function updateTable(marks) {
  var marksBody = document.getElementById("marksBody");
  marksBody.innerHTML = "";

  marks.forEach(function (mark) {
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent = mark.name;
    row.appendChild(nameCell);

    var idCell = document.createElement("td");
    idCell.textContent = mark.id;
    row.appendChild(idCell);

    var subjectCell = document.createElement("td");
    subjectCell.textContent = mark.subject;
    row.appendChild(subjectCell);

    var markCell = document.createElement("td");
    markCell.textContent = mark.mark;
    row.appendChild(markCell);

    marksBody.appendChild(row);
  });
}

document
  .getElementById("addMarkForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var studentName = document.getElementById("student-name").value;
    var studentId = document.getElementById("student-id").value;
    var subject = document.getElementById("subject").value;
    var mark = document.getElementById("mark").value;

    var newMark = {
      name: studentName,
      id: studentId,
      subject: subject,
      mark: mark,
    };

    var existingMarks = JSON.parse(localStorage.getItem("marks")) || [];
    existingMarks.push(newMark);

    var updatedMarksJSON = JSON.stringify(existingMarks);
    localStorage.setItem("marks", updatedMarksJSON);

    document.getElementById("addMarkForm").reset();

    updateTable(existingMarks);
  });

// On page load, retrieve the marks from local storage and update the table
window.addEventListener("DOMContentLoaded", function () {
  var existingMarks = JSON.parse(localStorage.getItem("marks")) || [];
  updateTable(existingMarks);
});
