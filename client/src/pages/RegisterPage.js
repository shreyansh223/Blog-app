import React from 'react';
import { useState } from 'react';

export default function RegisterPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();

    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }
  //
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="UserName"
        value={userName}
        onChange={(ev) => {
          setUserName(ev.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
      />
      <button>Register</button>
    </form>
  );
}
