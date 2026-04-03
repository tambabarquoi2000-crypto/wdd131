const ulList = document.querySelector("#list");
const addButton = document.querySelector("#addbtt");
const favChap = document.querySelector("#favchap");

let chapterArray = getChapterList() ?? [];

chapterArray.forEach(chapter => {displayList(chapter)})


addButton.addEventListener("click", () => {
    if (favChap.value !== "") {
        displayList(favChap.value);
        chapterArray.push(favChap.value);
        setChapterList();
        favChap.value = "";
        favChap.focus;

    }
});



function displayList (item) {
    function toSentenceCase (str) {
        if(!str) {return ""}
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const li = document.createElement("li");

    console.log(li);

    // create delete button for list attempt//

    const delButton = document.createElement("button");
    delButton.textContent = "❌";

    delButton.addEventListener ("click", () => {
    ulList.removeChild(li);

    })

    li.appendChild(document.createTextNode(toSentenceCase(item)));
    li.appendChild(delButton);

    ulList.appendChild(li);
  }

  function setChapterList () {
    localStorage.setItem("myFavChap", JSON.stringify(chapterArray));
  }

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavChap"));
}

function deleteChapter (chapter) {
        chapter.slice(0, chapter.length - 1);
        chapterArray = chapterArray.filter(item => item !== chapter);
        setChapterList();
}