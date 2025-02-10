"use client";

import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

export default function Prompt() {
  const router = useRouter();

  const sendEmailAndNavigate = () => {
    const emailDetails = {
      to_name: 'Glide',
      from_name: 'User',
      subject: 'Event Details - February 14, 2025',
      message: 'Here are the details for the event:\n\nDate: February 14, 2025\nTime: 1PM',
    };

    emailjs
      .send('service_x1a0k44', 'template_bmsan1l', emailDetails, '9mCe0yApcK1N2Ye6M')
      .then(
        (response) => {
          console.log('Email sent successfully', response);
          alert('Saving Responses! Redirecting...');
          router.push('/screens/thanks');  // Navigate to /screens/thanks after success
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send email: ' + error.text);
        }
      );
  };

  const navigateToPage = () => {
    router.push('/screens/change');  // Navigate to /screens/change
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 font-weight-bold text-primary">Let's Go on a Date!</h1>
        <p className="lead">Here are the details:</p>
      </div>

      <div className="card p-4 shadow-lg mb-5" style={{ width: '100%', maxWidth: '500px' }}>
        <ul className="list-unstyled">
          <li><strong>Date:</strong> February 14, 2025</li>
          <li><strong>Place:</strong> Tuloy na natin yung sa Binondo hehe</li>
          <li><strong>Time:</strong> 1PM start?</li>
        </ul>
      </div>

      <div className="d-flex flex-column align-items-center gap-3">
        <button
          onClick={sendEmailAndNavigate}
          className="btn btn-primary btn-lg w-75 rounded-pill"
        >
          Sure!
        </button>
        <button
          onClick={navigateToPage}  // Navigate to the Change page when clicked
          className="btn btn-danger btn-lg w-75 rounded-pill"
        >
          hmmmm...
        </button>
      </div>
    </div>
  );
}