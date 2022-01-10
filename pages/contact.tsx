import React, { useState } from 'react';
import Nav from '../components/Nav';
import { home, about, code } from '../helpers/propVariables';

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });

  //   Form validation state
  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    subject: false,
    message: false
  });

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send');

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = (): boolean => {
    let tempErrors = {
      fullname: false,
      email: false,
      subject: false,
      message: false
    };
    let isValid = true;

    if (data.fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (data.email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (data.subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (data.message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => {
    const newData = { ...data, [e.currentTarget.name]: e.currentTarget.value };
    setData(newData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    const { error } = await res.json();
    if (error) {
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      setButtonText('Sorry');
      return;
    }
    setShowSuccessMessage(true);
    setShowFailureMessage(false);
    setButtonText('Sent');
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-50 relative font-Montserrat">
      <Nav top={home} middle={code} bottom={about} />
      <form
        onSubmit={handleSubmit}
        className="rounded-lg shadow-xl flex flex-col w-3/4 sm:w-1/2 px-4 py-8 bg-white"
      >
        <h1 className="text-2xl font-bold">Get in touch</h1>
        <label htmlFor="fullname" className="mt-8">
          Full name<span className="text-red-500">*</span>
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="fullname"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />
        {errors.fullname && (
          <p className="text-red-500">Fullname is required</p>
        )}

        <label htmlFor="email" className="mt-4">
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}

        <label htmlFor="subject" className="mt-4">
          Subject<span className="text-red-500">*</span>
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="subject"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />
        {errors.subject && <p className="text-red-500">Subject is required</p>}

        <label htmlFor="message" className=" mt-4">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          onChange={handleChange}
          name="message"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
        ></textarea>
        {errors.message && (
          <p className="text-red-500">A Message is required</p>
        )}
        <div className="flex flex-row items-center justify-start m-auto">
          <button className="px-10 mt-8 py-2 bg-green-600 text-white rounded-md text-lg flex flex-row items-center">
            {buttonText}
          </button>
        </div>
        {showSuccessMessage && (
          <p className="text-green-700 mt-4 text-center">
            Thanks for getting in touch
          </p>
        )}
        {showFailureMessage && (
          <p className="text-red-700 mt-4 text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
