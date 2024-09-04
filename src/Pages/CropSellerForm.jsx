import React, { useState } from 'react';
import useLocalStorage from '../lib/hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

function CropSellerForm() {
  const [market_products, setMarketProducts] = useLocalStorage("market_products")
  const [formData, setFormData] = useState({
    productId: uuidv4(),
    sellerId: uuidv4(),
    name: "",
    description: "",
    certification: "",
    harvestDate: new Date().toISOString(),
    price: "",
    negotiable: false,
    quantity: 0,
    status: "",
    isFrozen: false,
    farmFresh: false,
    flavor: "",
    variety: "",
    images: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
  const [location, setLocation] = useState({
    city: "",
    state: "",
    zip: ""
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedFile) {

      const reader = new FileReader();

      reader.onload = (e) => {
        const fileData = e.target.result;
        const fileMetadata = {
          name: selectedFile.name,
          type: selectedFile.type,
          data: fileData
        };

        localStorage.setItem(`images-${fileMetadata.name}`, JSON.stringify(fileMetadata));
        const images = [`images-${fileMetadata.name}`];
        const newData = {
          ...formData,
          images,
          location,
          productId: crypto.randomUUID(),
          sellerId: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          harvestDate: new Date().toISOString(),
        }
        setMarketProducts([...market_products, newData]);
      };

      reader.readAsDataURL(selectedFile);
    }

    alert('Form submitted!');
  };

  const handleLocation = (e) => {
    const { name, value } = e.target;
    setLocation({
      ...location,
      [name]: value
    })
  }

  return (
    <form className="max-w-[50rem] mx-auto bg-white p-6 rounded-lg shadow-md my-[3rem]" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-center">Crop Seller Form</h2>

      <Input label="Full Name" name="sellername" type="text" value={formData.sellerName} handleChange={handleChange} required={true} />

      <Input label="Contact Number" name="contactNumber" type="tel" value={formData.contactNumber} handleChange={handleChange} required={true} />

      <Input label="Email Address (Optional)" name="email" type="email" value={formData.email} handleChange={handleChange} required={false} />

      <Input label="City" name="city" type="text" value={location.city}
        handleChange={handleLocation} required={true} />

      <Input label="State" name="state" type="text" value={location.state}
        handleChange={handleLocation} required={true} />

      <Input label="Zip Code" name="zip" type="text" value={location.zip}
        handleChange={handleLocation} required={true} />


      <Input label="Crop Name" name="name" type="text" value={formData.name} handleChange={handleChange} required={true} />

      <Input label="Variety" name="variety" type="text" value={formData.variety} handleChange={handleChange} required={true} />

      <Input label="Quantity Available (in Quintals)" name="quantity" type="number" value={formData.quantity} handleChange={handleChange} required={true} />

      <Input label="Expected Price per Quintal (in INR)" name="price" type="number" value={formData.price} handleChange={handleChange} required={true} />

      <Input label="Harvest Date" name="harvestDate" type="date" value={formData.harvestDate} handleChange={handleChange} required={true} />


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

      <Radio label="Organic Certification" name="organic" value={formData.organic} handleChange={handleChange} required={true} />


      <Radio label="Pesticides Used" name="pesticidesUsed" value={formData.pesticidesUsed} handleChange={handleChange} required={true} />




      <Radio label="Transportation Availability" name="transportation" value={formData.transportation} handleChange={handleChange} required={true} />

      <div className="mb-4">
        <label className="block text-gray-700">Additional Notes or Special Instructions:</label>
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>

      <Input label="Upload Photos of Crop (Optional)" name="images" type="file" handleChange={handleFileChange} required={false} />

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


function Input({ label, name, type, value, handleChange, required }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
        className="w-full p-2 border border-gray-300 rounded mt-1"
      />
    </div>
  );
}

function Radio({ label, name, value, handleChange, required }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}:</label>
      <div className="flex items-center space-x-4 mt-1">
        <label>
          <input
            type="radio"
            name={name}
            value="Yes"
            checked={value === 'Yes'}
            onChange={handleChange}
            className="mr-2"
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name={name}
            value="No"
            checked={value === 'No'}
            onChange={handleChange}
            className="mr-2"
          />
          No
        </label>
      </div>
    </div>
  );
}

