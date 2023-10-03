
import React, { useState } from 'react';
import './post.scss';

function Post() {
  // State to store the post data
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    preference: '', // Changed the name to "preference"
    rateType: '', // New state for rate type
    rateAmount: '', // New state for rate amount
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the post data to your API or perform the necessary action here
    // You can use fetch or axios to make an API call
    // Example:
    // fetch('your_api_endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(postData),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle the response as needed
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
    // Reset the form fields after submission
    setPostData({
      title: '',
      content: '',
      preference: '',
      rateType: '',
      rateAmount: '',
    });
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  // Function to conditionally render high card rates fields
  const renderHighCardRatesFields = () => {
    if (postData.preference === 'Post high card rates') {
      return (
        <>
          <div className='InputFields'>
            <label htmlFor='rateType'>Type of Rate:</label>
            <select
            
              name='rateType'
              value={postData.rateType}
              onChange={handleInputChange}
              required
              className='Inputs'
            >
              <option value=''>Select Rate Type</option>
              <option value='Naira Rate'>Naira Rate</option>
            </select>
          </div>
          <div className='InputFields'>
            <label htmlFor='rateAmount'>Rate Amount:</label>
            <input
              type='number'
              id='rateAmount'
              name='rateAmount'
              value={postData.rateAmount}
              onChange={handleInputChange}
              required
              className='Inputs'
            />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className='mainContainer'>
      <div className='HeaderContainer'>
        <span className='PageTitle'>Create rate posts and notifications</span>
      </div>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <div className='InputFields'>
            {/* <label htmlFor='title'>Title:</label> */}
            <input
            placeholder='Enter your title here...'
              type='text'
              id='title'
              name='title'
              value={postData.title}
              onChange={handleInputChange}
              required
              className='TitleField'
            />
          </div>
          <div className='InputFields'>
            <label htmlFor='preference'>I want to:</label>
            <select
              name='preference'
              value={postData.preference}
              onChange={handleInputChange}
              required
              className='Inputs'
            >
              <option value=''>Select an option</option>
              <option value='Post Notification'>Post Notification</option>
              <option value='Post high card rates'>Post High Card Rates</option>
            </select>
          </div>
          {/* Conditional rendering of high card rates fields */}
          {renderHighCardRatesFields()}
          <div className='InputFields'>
            <label htmlFor='content'>Content:</label>
            <textarea
              id='content'
              name='content'
              value={postData.content}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='InputFields'>
            <button type='submit'>POST</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Post;





