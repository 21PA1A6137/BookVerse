const url = 'https://books-api7.p.rapidapi.com/books/find/genres?genres%5B%5D=fantasy&genres%5B%5D=fiction&genres%5B%5D=Classics';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd3c695a1e2msha96c4d0f5677195p1bde92jsn539564891ab9',
		'X-RapidAPI-Host': 'books-api7.p.rapidapi.com'
	}
};

const main = document.querySelector("main");

async function getBooks() {
  const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);



  result.map((book) => {
    const bookEl = document.createElement("div");
    bookEl.classList.add("book");

    const fullStars = Math.floor(book?.rating);


  let starHTML = '';
  for (let i = 0; i < fullStars; i++) {
      starHTML += '⭐';
  }
    bookEl.innerHTML = `
      <div class="book">
        <a href="${book?.url}" target="_blank" ><img src="${book?.cover}" style="width:300px;height:350px" /></a>
          <div class="book-info">
            <div style="">
              <h2>${book?.title}</h2>
              <h5>${book?.plot.slice(0,200)}...</h5>
              <span>Rating : ${starHTML}</span>
            </div>
          </div>
      
      </div>`;

    main.appendChild(bookEl);
  });


}

getBooks();
