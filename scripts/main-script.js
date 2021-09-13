document.getElementsByClassName("addBook-title")[0].addEventListener("click", function() {
    if (document.getElementsByClassName("addBook-title")[0].value == "TITLE")
    {
      document.getElementsByClassName("addBook-title")[0].value = "";
    }
});

document.getElementsByClassName("addBook-title")[0].addEventListener("blur", function() {
    if (document.getElementsByClassName("addBook-title")[0].value == "")
    {
      document.getElementsByClassName("addBook-title")[0].value = "TITLE";
    }
});

document.getElementsByClassName("addBook-author")[0].addEventListener("click", function() {
  if (document.getElementsByClassName("addBook-author")[0].value == "AUTHOR")
  {
    document.getElementsByClassName("addBook-author")[0].value = "";
  }
});

document.getElementsByClassName("addBook-author")[0].addEventListener("blur", function() {
  if (document.getElementsByClassName("addBook-author")[0].value == "")
  {
    document.getElementsByClassName("addBook-author")[0].value = "AUTHOR";
  }
});

var myLibrary = [
    { id: 1,
      title: "Harry Potter and the Sorceror's Stone",
      author: "J. K. Rowling",
      pgNum: 300,
      read: true
    },
    { id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      author: "J. K. Rowling",
      pgNum: 350,
      read: true
    },
    { id: 3,
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "J. K. Rowling",
      pgNum: 400,
      read: true
    },
    { id: 4,
      title: "Harry Potter and the Goblet of Fire",
      author: "J. K. Rowling",
      pgNum: 500,
      read: false
    },
    { id: 5,
      title: "Harry Potter and the Order of the Phoenix",
      author: "J. K. Rowling",
      pgNum: 600,
      read: false
    },
    { id: 6,
        title: "Harry Potter and the Half-Blood Prince",
        author: "J. K. Rowling",
        pgNum: 700,
        read: false
    },
    { id: 7,
        title: "Harry Potter and the Deathly Hallows",
        author: "J. K. Rowling",
        pgNum: 1000,
        read: false
    },
];

function Book(flag)
{
    let myLocalLib = JSON.parse(window.localStorage.getItem("myLibrary"));
    if (myLocalLib == null || flag)
    {
      window.localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    } else {  // case of when localStorage was modified prior to loading the page
      myLibrary = myLocalLib;
    }
    document.getElementsByClassName("readList")[0].innerHTML = "<h1> Books You've Read </h1>";
    document.getElementsByClassName("notReadList")[0].innerHTML = "<h1> Books You Haven't Read </h1>";
    for (let i = 0; i < myLibrary.length; i++)
    {
      if (myLibrary[i].read)
      {
        document.getElementsByClassName("readList")[0].innerHTML 
        += "<div class='card' id='" + myLibrary[i].id +"'>" + 
           "<button class='delete-button' onclick='deleteBook(" + myLibrary[i].id + ")'>" + 
              "<i class='fas fa-times'></i>" +  
            "</button>" +
            "<p class='title'>" + myLibrary[i].title + "</p>" + 
            "<p class='author'>" + myLibrary[i].author + "</p>" + 
            "<p class='pgNum'>" + myLibrary[i].pgNum + " pages </p>" +
            "<button class='read-button' id='move-right' data-hover='&#8594;' onclick='move(\"right\"," + myLibrary[i].id + ")'>" +
                "<div> MOVE </div> </button><br>" +
            "</div>";
      } else {
        document.getElementsByClassName("notReadList")[0].innerHTML 
        += "<div class='card' id='" + myLibrary[i].id +"'>" + 
           "<button class='delete-button' onclick='deleteBook(" + myLibrary[i].id + ")'>" + 
              "<i class='fas fa-times'></i>" +  
           "</button>" +
            "<p class='title'>" + myLibrary[i].title + "</p>" + 
            "<p class='author'>" + myLibrary[i].author + "</p>" + 
            "<p class='pgNum'>" + myLibrary[i].pgNum + " pages </p>" +
            "<button class='read-button' id='move-left' data-hover='&#8592;' onclick='move(\"left\"," + myLibrary[i].id + ")'>" +
            "<div> MOVE </div> </button><br>" +
            "</div>";
      }
    }
}

function closeAddBook()
{
    document.getElementsByClassName("addBook")[0].style.display = "none";
}

function openAddBook()
{
    document.getElementsByClassName("addBook")[0].style.display = "block";
}

function addBook()
{
    let abTitle = document.getElementsByClassName("addBook-title")[0];
    let abAuthor = document.getElementsByClassName("addBook-author")[0];
    let abpgNum = document.getElementsByClassName("addBook-pgNum")[0];
    let abYes = document.getElementsByClassName("arYes")[0];
    let abNo = document.getElementsByClassName("arNo")[0];
    if (abTitle.value == "TITLE" || abAuthor.value == "AUTHOR" || abpgNum.value == "")
    {
        alert("Please fill in the blanks.");
    } else if (abTitle.value.trim().length == 0 || abAuthor.value.trim().length == 0) {
        alert("Please fill in the blanks with characters.");
    } else if (abpgNum.value < 10) {
        alert("Your book has less than 10 pages? Then pick another one!");
    } else {
        if (abYes.checked)
        {
            myLibrary.push(
              { id: myLibrary.length + 1,
                title: abTitle.value,
                author: abAuthor.value,
                pgNum: abpgNum.value,
                read: true
              }
            );
        }
        if (abNo.checked)
        {
            myLibrary.push(
              { id: myLibrary.length + 1,
                title: abTitle.value,
                author: abAuthor.value,
                pgNum: abpgNum.value,
                read: false
              }
            );
        }
        Book(true);
    }
}

function deleteBook(id)
{
    myLibrary = JSON.parse(window.localStorage.getItem("myLibrary"));
    myLibrary.splice(id - 1, 1);

    for (let i = id - 1; i < myLibrary.length; i++)
    {
        myLibrary[i].id = id;
        id++;
    }
    Book(true);
}

function move(direction, id)
{
    if (direction == "left")
    {
        myLibrary[id - 1].read = true;
    }

    if (direction == "right")
    {
        myLibrary[id - 1].read = false;
    }

    Book(true);
}


