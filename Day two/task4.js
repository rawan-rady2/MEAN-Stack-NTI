let name, phone, email;
let nameValid = false;
let phoneValid = false;
let emailValid = false;

// Regular Expressions
const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/; 
const phoneRegex = /^\d{10,15}$/;          
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

do {
  name = prompt("Enter your full name (first and last name):");
  if (name && nameRegex.test(name)) {
    nameValid = true;
  } else {
    alert("Invalid name. Please enter your first and last name using letters only, separated by a space.");
  }
} while (!nameValid);


do {
  phone = prompt("Enter your phone number (10-15 digits):");
  if (phone && phoneRegex.test(phone)) {
    phoneValid = true;
  } else {
    alert("Invalid phone number. It must be 10 to 15 digits.");
  }
} while (!phoneValid);


do {
  email = prompt("Enter your email:");
  if (email && emailRegex.test(email)) {
    emailValid = true;
  } else {
    alert("Invalid email. Please enter a valid email address.");
  }
} while (!emailValid);


alert(`Welcome, ${name}!\nYour phone: ${phone}\nYour email: ${email}`);
