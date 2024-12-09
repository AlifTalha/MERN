

// import React, { useState } from "react";
// import "./ContactUs.css";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [comments, setComments] = useState([]); // State to store comments

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add the new comment to the comments array
//     setComments([...comments, formData]);
//     setFormData({ name: "", email: "", message: "" }); // Reset the form
//   };

//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <div className="contact-content">
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <label htmlFor="name">Your Name *</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="email">Your Email ID *</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email ID"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="message">Your Message</label>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             rows="5"
//           ></textarea>

//           <button type="submit" className="submit-btn">
//             Submit
//           </button>
//         </form>

//         <div className="contact-image">
//           <img
//             src="https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/465002385_3589176247973993_4316489304948062107_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_tDxmMQh9oYQ7kNvgFMDg_y&_nc_zt=23&_nc_ht=scontent.fdac15-1.fna&_nc_gid=A9Uw04rFDFGl3b0yJobEnxd&oh=00_AYAvG6BPZVET_jElAAKsJ1FWdzvei_CiDpwG5kpV9Q-O-g&oe=675CF6A0"
//             alt="Contact Illustration"
//           />
//         </div>
//       </div>

//       {/* Comments Section */}
//       <div className="comments-section">
//         <h3>Comments</h3>
//         {comments.length === 0 ? (
//           <p>No comments yet. Be the first to comment!</p>
//         ) : (
//           <ul>
//             {comments.map((comment, index) => (
//               <li key={index} className="comment">
//                 <h4>{`#${index + 1} - ${comment.name}`}</h4>
//                 <p>{comment.message}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContactUs;




import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [comments, setComments] = useState([]); // State to store comments

  // Fetch comments from the backend
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/comments");
        setComments(response.data);
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };

    fetchComments();
  }, []); // Empty dependency array means this will run once when the component is mounted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the new comment to the backend
      await axios.post("http://localhost:5000/comments", formData);

      // Fetch the updated comments list
      const response = await axios.get("http://localhost:5000/comments");
      setComments(response.data);

      setFormData({ name: "", email: "", message: "" }); // Reset the form
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Delete the comment from the backend
      await axios.delete(`http://localhost:5000/comments/${id}`);

      // Fetch the updated comments list
      const response = await axios.get("http://localhost:5000/comments");
      setComments(response.data);
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email ID *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        <div className="contact-image">
          <img
            src="https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/465002385_3589176247973993_4316489304948062107_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_tDxmMQh9oYQ7kNvgFMDg_y&_nc_zt=23&_nc_ht=scontent.fdac15-1.fna&_nc_gid=A9Uw04rFDFGl3b0yJobEnxd&oh=00_AYAvG6BPZVET_jElAAKsJ1FWdzvei_CiDpwG5kpV9Q-O-g&oe=675CF6A0"
            alt="Contact Illustration"
          />
        </div>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <li key={comment._id} className="comment">
                <h4>{`${comment.name} - ${comment.email}`}</h4>
                <p>{comment.message}</p>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(comment._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
