const cafeList = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");

function renderCafe(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let symbol = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  symbol.textContent = doc.data().symbol;
  cross.textContent = "x";

  li.appendChild(name);
  li.appendChild(symbol);
  li.appendChild(cross);
  cafeList.appendChild(li);

  //Delete data
  cross.addEventListener("click", (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection("allStocks").doc(id).delete();
  });
}

//Getting data
// db.collection("allStocks")
//   .get()
//   .then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       renderCafe(doc);
//     });
//   });

//saving data

form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("allStocks").add({
    name: form.name.value,
    symbol: form.symbol.value,
  });
  form.name.value = "";
  form.symbol.value = "";
});

//Realtime listener
db.collection("allStocks").onSnapshot((snapshot) => {
  let changes = snapshot.docChanges();
  changes.forEach((change) => {
    if (change.type == "added") {
      renderCafe(change.doc);
    } else if (change.type == "removed") {
      let li = cafeList.querySelector("[data-id=" + change.doc.id + "]");
      cafeList.removeChild(li);
    }
  });
});
