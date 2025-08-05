const input=document.getElementById('nameInput');
const heading=document.getElementById('nameDisplay');

// Function to filter allowed characters (a-z,a-z, and space)

function filter(event){
    const inputvalue=event.target.value;
    // Regex
    const filteredvalue=inputvalue.replace(/[^a-zA-Z\s]/g,'');
    event.target.value=filteredvalue;
    heading.textContent=`Hello, ${filteredvalue}`;
}

// input event triggers when there is any change in input(basically realtime);
input.addEventListener('input',filter);