import { useState, FormEvent } from 'react';

export default function CreateCategory() {
  // 1. Create a state to hold the exact value of the text input
  const [categoryName, setCategoryName] = useState<string>('');
  
  // States for UX
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  // 2. The function that intercepts the form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // CRITICAL: Stops the browser from refreshing the page!
    
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('http://localhost:8000/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Tells Laravel to expect JSON
          'Accept': 'application/json',       // Tells Laravel to return JSON validation errors
        },
        // 3. Package your React state into the JSON body
        body: JSON.stringify({ name: categoryName }) 
      });

      if (!response.ok) {
        // Handle Laravel validation errors (422 Unprocessable Entity)
        if (response.status === 422) {
          throw new Error('Validation failed. Name might be taken.');
        }
        throw new Error('Something went wrong on the server.');
      }

      setMessage('Category created successfully!');
      setCategoryName(''); // Clear the input field on success
      
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', padding: '20px' }}>
      <h3>Create New Category</h3>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="catName" style={{ display: 'block', marginBottom: '5px' }}>
            Category Name
          </label>
          
          {/* 4. The Controlled Input */}
          <input
            id="catName"
            type="text"
            value={categoryName} // Bind the value to state
            onChange={(e) => setCategoryName(e.target.value)} // Update state on every keystroke
            required
            disabled={isSubmitting}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ padding: '10px 15px', background: 'var(--primary)', color: 'white', border: 'none' }}
        >
          {isSubmitting ? 'Saving...' : 'Save Category'}
        </button>
      </form>

      {message && <p style={{ marginTop: '15px' }}>{message}</p>}
    </div>
  );
}