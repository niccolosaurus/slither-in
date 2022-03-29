const editAnimalHandler = async (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value.trim()
    const breeding =document.getElementById('breeding').value.trim()
    //still needds logic here
    const gravidCheckbox = document.getElementById("gravid").checked;
    const deceasedCheckbox = document.getElementById("deceased").checked;
    const forSaleCheckbox = document.getElementById("sale").checked;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];


    const response = await fetch(`/api/animals/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ 
            name,
            description,
            breeding,
            gravidCheckbox,
            deceasedCheckbox,
            forSaleCheckbox,
        
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText)
    }
}



// Event listener for the login button.
const editButton = document.getElementById('editForm');
editButton.addEventListener('submit', editAnimalHandler);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries








