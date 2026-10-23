
import React from "react";

function Register() {
  return (
    <div className="register">
      <h2>Register</h2>

      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <br />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <br />
        <br />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          required
        />
        <br />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          required
        />
        <br />
        <br />

        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          required
        />
        <br />
        <br />

        <select name="gender" required>
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
