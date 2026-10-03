import { useState } from "react";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  //Create a simple login form with Email, Password, and Login button. Use React state. Real authentication is not
  // required for this assignment. Show an appropriate submission message
  const handleSubmit = (e) => {
    e.preventDefault();

    // required field checks if the values are empty
    // add basic form related validation and give appropriate response
    const newErrors = {};
    if (!form.email.endsWith("@gmail.com")) {
      newErrors.emailError = "Please enter a valid Gmail address";
    }
    if (form.password.length < 6) {
      newErrors.passwordError = "Password must be at least 6 characters";
    }

    setErrors(newErrors); // won't update until the next render
    setMessage("");

    // terminate submission if there are errors,
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    setMessage("Login submitted successfully.");
    console.log("Form Submitted: ", form);
  };

  const handleChange = (e) => {
    const formData = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(formData);

    setErrors({ ...errors, [e.target.name]: "" });
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Login to continue to Prodexa</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg outline-none transition ${errors.emailError ? "border-red-500 focus:ring-2 focus:ring-red-200 " : "border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100"}`}
            />
            {errors.emailError && (
              <p className="text-red-500 text-sm mt-1">{errors.emailError}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg outline-none transition ${errors.passwordError ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100"}`}
            />
            {errors.passwordError && (
              <p className="text-sm text-red-500 mt-1">
                {" "}
                {errors.passwordError}{" "}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Login
          </button>

          {message && (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-3 text-sm">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
