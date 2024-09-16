import React,{useState} from "react";

const RegistrationForm = () => {

  const initialFormState = {
        username:'',
        email: '',
        password:'',
        confirmPassword:''
  }

    //state to manage form input

    const [formData, setFormData]= useState(initialFormState);

    // handle to update state on input change

    const handleChange = (e) => {setFormData({...formData,[e.target.name]:e.target.value,})};

    // Handle for form submission

    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
          alert("Invalid email address");
          return;
        }
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match");
          return;
        }
      
        try {
          const response = await fetch('http://localhost:3000/api/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          // const result = await response.json();
      
          if (!response.ok){
            throw new Error(`Http error! status: ${response.status}`)
          } 
          const data = await response.json();
          console.log('success: ', data); // check the data recieved
          alert("Success");
          setFormData(initialFormState);
        }
        catch (error) {
        console.error("Error submitting form", error);
        alert("Error submitting form");
        }
      };

    return(
        <form onSubmit={handleSubmit}>
        <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
      <button type="button" className="close-button">Close</button>
    </form>

    );
  }

export default RegistrationForm;