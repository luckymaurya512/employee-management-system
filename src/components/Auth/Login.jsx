import React from 'react';

const Login = ({handleLogin}) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const SubmitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        // console.log('Form Submitted')
        // console.log("email is : ", email)
        // console.log("password is : ", password)
        setEmail('')
        setPassword('')
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
        <form className="space-y-6" 
        onSubmit={(e)=>{
            SubmitHandler(e)
        }}>
          <div>
            <input
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <input
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-purple-400 focus:outline-none transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
