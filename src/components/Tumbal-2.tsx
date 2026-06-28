// src/pages/EditUser.tsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditUser() {
  // 1. Extract the 'id' from the URL
  // TypeScript Tip: useParams always returns strings, so we type it as a string
  const { id } = useParams<{ id: string }>(); 
  
  // 2. useNavigate allows us to programmatically redirect the user after saving
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 3. Fetch the data for this specific ID when the page loads
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/users/${id}`);
        const data = await response.json();
        
        // Populate the form state with the database data
        setUserName(data.name);
      } catch (error) {
        console.error("Failed to fetch user");
      } finally {
        setIsLoading(false);
      }
    };

    // Ensure we actually have an ID before fetching
    if (id) fetchUserData();
  }, [id]); // Add 'id' to the dependency array

  // 4. Handle the form submission
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // (Your fetch PUT/PATCH request goes here using the 'id')
    console.log(`Updating user ${id} to name: ${userName}`);

    // Redirect back to the user table after a successful update
    navigate('/users');
  };

  if (isLoading) return <p>Loading user data...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Edit User #{id}</h2>
      
      <form onSubmit={handleUpdate}>
        <input 
          type="text" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)} 
          className="form-input"
        />
        <button type="submit" className="btn btn-success mt-3">
          Save Changes
        </button>
      </form>
    </div>
  );
}