import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';




const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors: { [key: string]: string } = {};
    if (!formData.username) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Submit form
      console.log('Form is valid');
    }
  };

  return (
    <div className="w-auto max-w-md mx-auto">
      <div className="text-left mt-8">
        <h3><em><strong>SCI</strong></em></h3>
      </div>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-5 pt-6 pb-6 mb-4">
        <h2 className="text-2xl mb-6 text-center font-bold">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="2211298213"
          />
          {errors.username && <p className="text-blue-500 text-xs italic">{errors.username}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="******************"
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-900 hover:bg-green-700 text-white font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <Link to="/forgot-password" className="inline-block align-baseline font-bold text-sm text-green-900 hover:text-green-700">
            Forgot Password?
          </Link>
        </div>
      </form>

      <div className="text-center mt-4">
        <span className="text-gray-600">Don't have an account? </span>
        <Link to="/register" className="font-bold text-green-900 hover:text-green-700">
          Register here
        </Link>
        
            {/* Social Media Icons */}
            <div className="flex justify-center mt-6 space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-green-900 w-4 h-4" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-green-900 w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-green-900 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
    
  );
};

export default Login;
