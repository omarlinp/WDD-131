const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]
// creating a const to determine the place where the HTML will be inserted
const main = document.getElementById('maincontent');

//creating the the elements 
let section = document.createElement('section');
let div = document.createElement('div');
let ul = document.createElement('ul');

let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');

let article = document.createElement('article');
let h2 = document.createElement('h2');
let img = document.createElement('img');
let p = document.createElement('p');


div.className ='article-details';

li1.className = 'date';

li1.textContent = articles[0].date;
li2.textContent = articles[0].ages;
li3.textContent = articles[0].genre;
li4.textContent = articles[0].stars;


h2.textContent = articles[0].title;

img.src =articles[0].imgSrc;
img.alt =articles[0].imgAlt;

p.textContent= articles[0].description;

// created the element in the location desired
main.appendChild(section);
section.appendChild(div);
section.appendChild(article);

div.appendChild(ul);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

article.appendChild(h2);
article.appendChild(img);
article.appendChild(p);

