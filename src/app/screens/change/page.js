"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

export default function Change() {
  const router = useRouter();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isSending, setIsSending] = useState(false); // Add a loading state

  const handleDateChange = (event) => setDate(event.target.value);
  const handleTimeChange = (event) => setTime(event.target.value);

  const sendEmail = () => {
    if (!date || !time) {
      alert('Please select both date and time before sending the email.');
      return;
    }

    setIsSending(true); // Set the loading state to true
    const emailDetails = {
      to_name: 'Glide',
      from_name: 'Denie',
      subject: 'Updated Event Details',
      message: `Here are the details for the event:\n\n- Date: ${date}\n- Time: ${time}\n\nThis email was sent from a Next.js application.`,
    };

    emailjs
      .send('service_x1a0k44', 'template_bmsan1l', emailDetails, '9mCe0yApcK1N2Ye6M')
      .then(
        (response) => {
          console.log('Email sent successfully', response);
          alert('Responses Saved! Redirecting...');
          router.push('/screens/thanks'); // Navigate to /screens/thanks after successful email
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Failed to send email: ' + error.text);
        }
      )
      .finally(() => setIsSending(false)); // Reset the loading state
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 font-weight-bold text-primary">When thou?</h1>
        <p className="lead">Select a date and time for the event</p>
      </div>

      <div className="card p-4 shadow-lg mb-5" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="mb-3">
          <label htmlFor="datePicker" className="form-label">Select Date:</label>
          <input
            type="date"
            id="datePicker"
            className="form-control"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="timePicker" className="form-label">Select Start Time:</label>
          <input
            type="time"
            id="timePicker"
            className="form-control"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
      </div>

      <div className="d-flex flex-column align-items-center gap-3">
        <button
          onClick={sendEmail}
          className="btn btn-primary btn-lg w-75 rounded-pill"
          disabled={isSending} // Disable button while email is sending
        >
          {isSending ? 'Saving...' : 'This One!'}
        </button>
      </div>
    </div>
  );
}