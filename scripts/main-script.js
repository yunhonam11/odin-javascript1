let myLibrary = [
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

function Book()
{
    for (let i = 0; i < myLibrary.length; i++)
    {
      if (myLibrary[i].read)
      {
        document.getElementsByClassName("readList")[0].innerHTML 
        += "<div class='card' id='" + myLibrary[i].id +"'>" + 
        "<button class='delete-button'> <i class='fas fa-times'></i> </button>" +
            "<p class='title'>" + myLibrary[i].title + "</p>" + 
            "<p class='author'>" + myLibrary[i].author + "</p>" + 
            "<p class='pgNum'>" + myLibrary[i].pgNum + " pages </p>" +
            "<button class='read-button' id='move-right' data-hover='&#8594;'> <div> MOVE </div> </button><br>" +
            "</div>";
      } else {
        document.getElementsByClassName("notReadList")[0].innerHTML 
        += "<div class='card' id='" + myLibrary[i].id +"'>" + 
            "<button class='delete-button'> <i class='fas fa-times'></i> </button>" +
            "<p class='title'>" + myLibrary[i].title + "</p>" + 
            "<p class='author'>" + myLibrary[i].author + "</p>" + 
            "<p class='pgNum'>" + myLibrary[i].pgNum + " pages </p>" +
            "<button class='read-button' id='move-left' data-hover='&#8592;'> <div> MOVE </div> </button><br>" +
            "</div>";
      }
    }
}




