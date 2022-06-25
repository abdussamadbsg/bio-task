alert('Abdulsamad Arowosaiye\nI\'m 6 feet in height\nI\'m a citizen of Nigeria');
        
console.log('Abdulsamad Arowosaiye');
console.log('I\'m 6 feet in height');
console.log('I\'m a citizen of Nigeria');

let nameEl = document.createElement('h3');
nameEl.innerText = 'Abdulsamad Arowosaiye';

let heightEl = document.createElement('h3');
heightEl.innerText = 'I\'m 6 feet in height';

let countryEl = document.createElement('h3');
countryEl.innerText = 'I\'m a citizen of Nigeria';

let addedDiv = document.getElementById('added');
addedDiv.appendChild(nameEl);
addedDiv.appendChild(heightEl);
addedDiv.appendChild(countryEl);

