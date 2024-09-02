import React, { useState } from 'react';

function CropSellerForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    address: '',
    state: '',
    city: '',
    cropName: '',
    variety: '',
    quantity: '',
    price: '',
    harvestDate: '',
    saleFromDate: '',
    marketPreference: 'Local Market',
    organic: 'No',
    pesticidesUsed: 'No',
    cropCondition: 'A-Grade',
    transportation: 'No',
    additionalNotes: '',
    photos: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <form className="max-w-[50rem] mx-auto bg-white p-6 rounded-lg shadow-md my-[3rem]" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-center">Crop Seller Form</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
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
        <label className="block text-gray-700">Email Address (Optional):</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
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
        <label className="block text-gray-700">Crop Name:</label>
        <input
          type="text"
          name="cropName"
          value={formData.cropName}
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
        <label className="block text-gray-700">Quantity Available (in Quintals):</label>
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
        <label className="block text-gray-700">Expected Price per Quintal (in INR):</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Harvest Date:</label>
        <input
          type="date"
          name="harvestDate"
          value={formData.harvestDate}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Available for Sale From:</label>
        <input
          type="date"
          name="saleFromDate"
          value={formData.saleFromDate}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Preferred Selling Market:</label>
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
        <label className="block text-gray-700">Organic Certification:</label>
        <div className="flex items-center space-x-4 mt-1">
          <label>
            <input
              type="radio"
              name="organic"
              value="Yes"
              checked={formData.organic === 'Yes'}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="organic"
              value="No"
              checked={formData.organic === 'No'}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Any Pesticides Used:</label>
        <div className="flex items-center space-x-4 mt-1">
          <label>
            <input
              type="radio"
              name="pesticidesUsed"
              value="Yes"
              checked={formData.pesticidesUsed === 'Yes'}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="pesticidesUsed"
              value="No"
              checked={formData.pesticidesUsed === 'No'}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Crop Condition/Grade:</label>
        <select
          name="cropCondition"
          value={formData.cropCondition}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        >
          <option value="A-Grade">A-Grade</option>
          <option value="B-Grade">B-Grade</option>
          <option value="C-Grade">C-Grade</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Transportation Availability:</label>
        <div className="flex items-center space-x-4 mt-1">
          <label>
            <input
              type="radio"
              name="transportation"
              value="Yes"
              checked={formData.transportation === 'Yes'}
              onChange={handleChange}
              className="mr-2"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="transportation"
              value="No"
              checked={formData.transportation === 'No'}
              onChange={handleChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Additional Notes or Special Instructions:</label>
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Upload Photos of Crop (Optional):</label>
        <input
          type="file"
          name="photos"
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

export default CropSellerForm;
