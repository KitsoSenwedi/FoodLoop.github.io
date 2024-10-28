// app.js

document.getElementById("donationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const donorName = document.getElementById("donorName").value;
    const foodType = document.getElementById("foodType").value;
    const quantity = document.getElementById("quantity").value;
    const location = document.getElementById("location").value;
  
    // Log donation details to the console (simulate API call)
    console.log("Donation scheduled:", {
      donorName,
      foodType,
      quantity,
      location,
    });
  
    // Provide feedback to the user
    alert("Thank you! Your donation has been scheduled.");
  
    // Clear the form
    document.getElementById("donationForm").reset();
  });
  