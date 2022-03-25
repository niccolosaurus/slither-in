const newAnimalHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const type = document.querySelector('type').value.trim();
    const species = document.querySelector('species').value.trim();
    const sex = document.querySelector("sex")
    const age = docuemnt.querySelector('age')
    const pattern = document.querySelector('pattern')
    const description = document.querySelector('description').value.trim
    const gravid = document.querySelector('gravid')
    const forSale = document.querySelector('forSale')
    const deceased = document.querySelector('deceased')
    const breeding = document.querySelector('breeding')

    if (name && type && species && sex && age && pattern && description && gravid && forSale && deceased && breeding) {
        const response = await fetch('/api/animals', {
            method: 'POST',
            body: JSON.stringify({ name, type, species, sex, age, pattern, description, gravid, forSale, deceased, breeding }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create project');
        }
    }
}
