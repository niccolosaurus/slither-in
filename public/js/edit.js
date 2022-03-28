let currentImage

const editAnimalHandler = async (event) => {
    event.preventDefault();
    const id = document.getElementById('animal-id')
    const form = document.getElementById('editForm');
    const name = document.getElementById('name')
    const description = document.getElementById('description')
    const deceased = document.getElementById('deceased')
    const forSale = document.getElementById('sale')
    const gravid = document.getElementById('gravid')
    const breeding =document.getElementById('breeding')
    //still needds logic here
    const response = await fetch(`/api/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ 
            ...formValue,
        
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        const errors = await response.json();
        alert('Failed to create a new animal due to backend error: ' + JSON.stringify(errors, undefined, 4));
    }
}



// Event listener for the login button.
const editButton = document.getElementById('editForm');
editButton.addEventListener('submit', editAnimalHandler);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries








