const li = document.createElement("li");
const deleteButton = document.createElement("button");
li.textContent = input.value;
deleteButton.textContent = "❌";
li.append(deleteButton);
list.append(li);

const addChapter = document.querySelector("button");

addChapter.addEventListener("click", function (){ if (input.value.trim != "") {
    // execute this code
}});

deleteButton.addEventListener("click", () => {
    list.removeChild(li);
    input.focus();
});

input.value = "";
input.focus();