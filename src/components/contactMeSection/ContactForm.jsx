import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_izv1jzq',
        'template_qup9oe8',
        form.current,
        '9UACDiSBmRvw0_nBR'
      )
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="flex flex-col gap-4 w-full px-2 sm:px-4">
      <p className="text-cyan-500 text-center text-sm sm:text-base">
        {success}
      </p>
      <form
        className="flex flex-col gap-4 p-4 sm:p-6 rounded-lg shadow-md w-full max-w-md mx-auto bg-[#1e1e1e]"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base resize-none"
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-cyan-500 text-white px-4 py-2 sm:py-3 rounded-lg hover:bg-cyan-600 transition text-sm sm:text-base"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
