const delButtonHandler = async (event) => {
  
  
  if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      
      const response = await fetch(`/api/animals/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete card');
      }
    }
  };
  document
  .querySelector('.deletion')
  .addEventListener('click', delButtonHandler);