
const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
  output.textContent = salary.value;
});

document.getElementById("submitButton").onclick = function () {
    let Name = document.getElementById("name").value;
    let Picture = document.querySelector("input[name = profile]:checked").value;
    let Gender = document.querySelector("input[name = gender]:checked").value;
    let Department = document.querySelector(
      "input[name = department]:checked"
    ).value;
    let salary = document.getElementById("salary").value;
    let notes = document.getElementById("notes").value;
    let startDate = new Date(
      parseInt(document.getElementById("year").value),
      parseInt(document.getElementById("month").value),
      parseInt(document.getElementById("day").value)
    );
    let employee = new EmployeeInfo(
      Name,
      Picture,
      Gender,
      Department,
      Salary,
      Notes,
      StartDate
    );
    alert(employee.toString());
  };