import React, { useState } from 'react';
import axios from 'axios';

const ClaimForm = () => {
  const [form, setForm] = useState({
    name: '',
    policy_number: '',
    claim_amount: '',
    reason: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.post('http://localhost:8000/submit-claim', {
      ...form,
      claim_amount: parseFloat(form.claim_amount)
    });
    setResult(response.data.status);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {["name", "policy_number", "claim_amount", "reason"].map(field => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field.replace("_", " ")}
          value={form[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      {result && <p className="mt-4">Decision: <strong>{result}</strong></p>}
    </form>
  );
};

export default ClaimForm;
