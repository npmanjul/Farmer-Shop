import React, { useState } from 'react';

function BuyerRequirementForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    contactNumber: '',
    email: '',
    address: '',
    state: '',
    city: '',
    cropRequired: '',
    variety: '',
    quantity: '',
    budget: '',
    deliveryDate: '',
    marketPreference: 'Local Market',
    qualityGrade: 'A-Grade',
    organicPreference: 'No',
    specialInstructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <form className="max-w-[50rem] mx-auto bg-white p-6 rounded-lg shadow-md my-12" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-center">Buyer Requirement Form</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Contact Person:</label>
        <input
          type="text"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Contact Number:</label>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">City/District:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Crop Required:</label>
        <input
          type="text"
          name="cropRequired"
          value={formData.cropRequired}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Variety:</label>
        <input
          type="text"
          name="variety"
          value={formData.variety}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Quantity Required (in Quintals):</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Budget per Quintal (in INR):</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Preferred Delivery Date:</label>
        <input
          type="date"
          name="deliveryDate"
          value={formData.deliveryDate}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Preferred Buying Market:</label>
        <select
          name="marketPreference"
          value={formData.marketPreference}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        >
          <option value="Local Market">Local Market</option>
          <option value="Big Market">Big Market</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Required Quality Grade:</label>
        <select
          name="qualityGrade"
          value={formData.qualityGrade}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        >
          <option value="A-Grade">A-Grade</option>
          <option value="B-Grade">B-Grade</option>
          <option value="C-Grade">C-Grade</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Organic Preference:</label>
        <div className="flex items-center space-x-4 mt-1">
          <label>
            <input
              type="radio"
              name="organicPreference"
              value="Yes"
              checked={formData.organicPreference === 'Yes'}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="organicPreference"
              value="No"
              checked={formData.organicPreference === 'No'}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Special Instructions:</label>
        <textarea
          name="specialInstructions"
          value={formData.specialInstructions}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input type="checkbox" required className="mr-2" />
          I hereby declare that the information provided is true to the best of my knowledge.
        </label>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default BuyerRequirementForm;
