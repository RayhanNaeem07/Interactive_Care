import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-teal-100 to-teal-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-teal-600">ShopMate</h1>
          <p className="text-lg text-gray-600">Welcome back! Please login to continue.</p>
        </div>
        
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Do not have an account? 
            <a href="/signup" className="text-teal-600 hover:text-teal-700 font-medium transition duration-300">
              Sign up here
            </a>
          </p>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            <a href="/forgetPassword" className="text-teal-600 hover:text-teal-700 font-medium transition duration-300">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
