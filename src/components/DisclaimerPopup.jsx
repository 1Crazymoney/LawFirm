
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";

function DisclaimerPopup() {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    // Handle user's acceptance logic (e.g., store in local storage)
    setShowPopup(false);
  };
  const handleReject = () => {
    // navigate = useNavigate();
    // Handle user's acceptance logic (e.g., store in local storage)
    setShowPopup(false);
    // navigate("/about")
  };

  return (
    <div className={`fixed inset-0 z-50 ${showPopup ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-md mb-32 mt-32">
          <p className='text-blue mb-4' >Disclaimer: </p>
          <p className="text-gray-800 mb-4">
          As per the rules of the Bar Council of India, law firms are not permitted to solicit work and advertise.
          
          By clicking the “Agree” button and accessing the website www.burgeon.co.in, the visitor fully understands and accepts that the contents herein are solely for informational purposes and should not be interpreted as solicitation or advertisement. The firm is not liable, in any manner, for the consequences of any action taken by a visitor relying on materials/ information provided on the website. The firm urges visitors to seek independent legal advice for any legal issues.
          </p>
          <button 
            className="mt-4 m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleAccept}
          >
            Agree
          </button>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleReject}
          >
            Disagree
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisclaimerPopup;