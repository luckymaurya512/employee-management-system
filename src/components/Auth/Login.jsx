import React from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const SubmitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="perspective-800">
        <div className="bg-gray-900 p-12 rounded-3xl shadow-2xl w-full sm:w-96 transform transition-all duration-500 hover:rotate-y-12">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">Login</h2>
          <form className="space-y-8" onSubmit={SubmitHandler}>
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border-2 border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Your Password"
                className="w-full p-4 rounded-lg border-2 border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-4 bg-purple-600 text-white rounded-lg shadow-lg transform hover:scale-105 hover:bg-purple-700 transition-all duration-300 ease-in-out"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login