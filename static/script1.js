// const projectForm = document.getElementById('projectForm');
// const projectsList = document.getElementById('projects');
// const githubLinkCheckbox = document.getElementById('githubLinkCheckbox');
// const githubLinkContainer = document.getElementById('githubLinkContainer');

githubLinkCheckbox.addEventListener('change', () => {
  githubLinkContainer.style.display = githubLinkCheckbox.checked ? 'block' : 'none';
});

// projectForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const studentName = document.getElementById('studentName').value;
//   const projectTitle = document.getElementById('projectTitle').value;
//   const projectDescription = document.getElementById('projectDescription').value;
//   const projectFile = document.getElementById('projectFile').files[0];
//   const githubLink = githubLinkCheckbox.checked ? document.getElementById('githubLink').value : '';

//   const projectItem = document.createElement('li');
//   projectItem.innerHTML = `
//     <strong>${studentName}</strong>: ${projectTitle} - ${projectDescription} - File: ${projectFile.name} - GitHub Link: ${githubLink}
//   `;

//   projectsList.appendChild(projectItem);
//   alert("Confirm Submit ? Press Ok");

//   // Clear the form after submission
//   projectForm.reset();
// });


// function submitProject(event) {
//     event.preventDefault();
  
//     const studentName = document.getElementById('studentName').value;
//     const projectTitle = document.getElementById('projectTitle').value;
//     const projectDescription = document.getElementById('projectDescription').value;
//     const projectFile = document.getElementById('projectFile').files[0];
//     const githubLink = document.getElementById('githubLink').value;
    
//     const formData = new FormData();
//     formData.append('studentName', studentName);
//     formData.append('projectTitle', projectTitle);
//     formData.append('projectDescription', projectDescription);
//     formData.append('projectFile', projectFile);
//     formData.append('githubLink', githubLink);
  
//     fetch('http://localhost:5000/projects', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Project saved:', data);
//     })
//     .catch(error => {
//       console.error('Error saving project:', error);
//     });
//   }
  