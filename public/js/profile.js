const delButtonHandler = async (event) => {
  
  console.log("clicked")
  
  if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      
      const response = await fetch(`/api/animals/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  document
  .querySelector('.deletion')
  .addEventListener('click', delButtonHandler);