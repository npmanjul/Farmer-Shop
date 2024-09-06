import { useState, useEffect } from 'react';


const dummy = {
    productId: "dd8c598c-7c73-4027-8aa9-3e043a73c4fa",
    sellerId: "0793a238-4ffe-4375-a715-0b0fae090b41",
    name: "Fresh Apples",
    description: "Juicy and crisp apples.",
    certification: "Organic",
    harvestDate: "2024-09-03",
    price: "1.99",
    negotiable: true,
    quantity: 100,
    status: "available",
    location: {
      city: "New York",
      state: "NY"
    },
    isFrozen: false,
    farmFresh: true,
    flavor: "Sweet",
    variety: "Fuji",
    images: [
    ],
    createdAt: "2024-09-03 13:11:52.286",
    updatedAt: "2024-09-03 13:11:52.286"
  }

function useLocalStorage(key) {
    const [storedValue, setStoredValue] = useState(() => {
        const defaultValue = [
            dummy
        ];
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error("Error reading from localStorage", error);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            if (storedValue !== undefined && storedValue !== null) {
                window.localStorage.setItem(key, JSON.stringify(storedValue));
            } else {
                window.localStorage.removeItem(key);
            }
        } catch (error) {
            console.error("Error writing to localStorage", error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default useLocalStorage;
