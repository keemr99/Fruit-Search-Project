// const suggestions = document.querySelector('.suggestions');
// input.addEventListener('keyup', searchHandler);
// suggestions.addEventListener('click', useSuggestion);

const keyTyped = document.addEventListener('keydown', function(event) {
   console.log('Key pressed:', event.key);

});


const fruitList = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(searched) {
	const searchedLowerCased = searched.toLowerCase();
	let results = [];

	for(let fruit of fruitList) { //iterating over each fruit
		const fruitLowerCased = fruit.toLowerCase(); //convert fruit name to lower case
	
		//checks if the searched term is present in any fruit
	if(fruitLowerCased.includes(searchedLowerCased)) {
	results.push(fruit) // add fruit to results
	}
	}
	return results;
}

//the terms below check the function above
// const userSearchTerm = 'ap'; 
// const searchResults = search(userSearchTerm);
// console.log('Search results:', searchResults);


function displayResults(results) {
const resultsList = document.getElementById(`resultsList`); //setting the results list to a variable

resultsList.innerHTML = ''; //clearing any previous results

if(results.length === 0) {
	resultsList.style.display = 'none';
	return;
}

for(let result of results) { // iterate over results 
	const listItem = document.createElement('li'); //creating list item
	listItem.textContent = result;

	listItem.addEventListener('mouseenter', highlightSuggestion)//attaching hover event to list Item
	
	listItem.addEventListener('click', useSuggestion);

	resultsList.appendChild(listItem);//attaching list item to unordered list
}	
resultsList.style.display = 'block';
}


document.getElementById(`fruit`).addEventListener('input', function(e){  
	const searchTerm = e.target.value; //grabbing user input from searchbox

	const results = search(searchTerm); 

	displayResults(results);
})

function highlightSuggestion(e) {
	const listItem = e.target; //saving the target to variable

	listItem.classList.add('highlight'); //adding highlight class to target

	listItem.addEventListener('mouseleave', function(){ //removes highlight once mouse moves away
		listItem.classList.remove('highlight');
	});

}



function useSuggestion(e) {
	const listItem = e.target; //assigning the clicked list item

	const suggestion = listItem.textContent; //assigning the text content of clicked suggestion 

	const searchBox = document.getElementById('fruit'); //getting seachbox element to variable

	searchBox.value = suggestion; //populate search box with clicked suggestion

	const resultsList = document.getElementById('resultsList');

	resultsList.innerHTML = '';

	resultsList.style.display = 'none';
}