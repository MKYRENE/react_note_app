import { useState } from 'react'; // hook function 'useState' this is one of the function in the react package.


// COMPONENTS IMPORTS
function Contact() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    message: ''
  });

//  const [userName, setUserName] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = event => {
    const stateProp = event.target.name;
    const value = event.target.value;
//  setUserName(value);
    setFormData({
      ...formData,
      [stateProp]: value // [stateProp] is a computed property name
    });
  };

  //    Function handleSubmit(event) 
  const handleSubmit = event => {
    event.preventDefault();

    const url = 'https://api.web3forms.com/submit';
    const access_key = '3e29efc5-7501-4ee3-8dbb-d222bf3ef957';

    //  const formData = {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        access_key
      })
    }).then(res => res.json())
      .then(data => {
        setFormData({
          userName: '',
          email: '',
          message: ''
        });
        setShowConfirmation(true);

        setTimeout(() => setShowConfirmation(false), 3500);
      })
      .catch(err => console.log(err));
  }

  return (
    <main>
      <h1 className="text-center">Contact Me</h1>
      {/* ternary operator this means if its true then show the confirmation message */}
      {showConfirmation && <p className="text-center confirmation">Thanks for your message! I'll get back to you soon.</p>} 

      {/* FORM INPUT   */}
      <form
        onSubmit={handleSubmit}
        className="column">
        <input
          name="userName"
          onChange={handleInputChange} //onChange is a function that is called when the input value changes
          value={formData.userName}
          type="text"
          placeholder="Enter your name" />
        <input
          name="email"
          onChange={handleInputChange}
          value={formData.email}
          type="email"
          placeholder="Enter your email address" />
        <textarea
          name="message"
          onChange={handleInputChange}
          value={formData.message}
          cols="30"
          rows="10"
          placeholder="Enter your message"></textarea>
        <button>Submit</button>
      </form>
    </main>
  )
}

export default Contact;