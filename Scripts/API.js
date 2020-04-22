url = "http://dummy.restapiexample.com/api/v1/employees";

async function getEmployees(url) {
  var response = await fetch(url);
  var data = await response.json();
  return data;
}
document.getElementById("root").innerHTML = data;
