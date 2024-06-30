document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('survey-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
      const address = document.getElementById('address').value;
      const pincode = document.getElementById('pincode').value;
      const gender = document.getElementById('gender').value;
  
      const foodChoices = [];
      document.querySelectorAll('input[name="food"]:checked').forEach(checkbox => {
        foodChoices.push(checkbox.value);
      });
  
      if (foodChoices.length < 2) {
        alert('Please select at least two food options.');
        return;
      }
  
      const state = document.getElementById('state').value;
      const country = document.getElementById('country').value;
      const comments = document.getElementById('comments').value;
  
      const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
      const timeOfDay = document.querySelector('input[name="timeOfDay"]:checked').value;
  
      const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
      const newRow = table.insertRow();
  
      const firstNameCell = newRow.insertCell(0);
      const lastNameCell = newRow.insertCell(1);
      const emailCell = newRow.insertCell(2);
      const addressCell = newRow.insertCell(3);
      const pincodeCell = newRow.insertCell(4);
      const genderCell = newRow.insertCell(5);
      const foodChoicesCell = newRow.insertCell(6);
      const stateCell = newRow.insertCell(7);
      const countryCell = newRow.insertCell(8);
      const commentsCell = newRow.insertCell(9);
      const contactMethodCell = newRow.insertCell(10);
      const timeOfDayCell = newRow.insertCell(11);
  
      firstNameCell.textContent = firstName;
      lastNameCell.textContent = lastName;
      emailCell.textContent = email;
      addressCell.textContent = address;
      pincodeCell.textContent = pincode;
      genderCell.textContent = gender;
      foodChoicesCell.textContent = foodChoices.join(', ');
      stateCell.textContent = state;
      countryCell.textContent = country;
      commentsCell.textContent = comments;
      contactMethodCell.textContent = contactMethod;
      timeOfDayCell.textContent = timeOfDay;
    });
  });
  
