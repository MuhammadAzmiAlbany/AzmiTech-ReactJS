import { useState, useEffect } from 'react';

// 1. Define your data model
interface User {
    id: number;
    name: string;
    email: string;
}

// 2. Define the shape of Laravel's default paginate() JSON response
interface LaravelPagination {
    data: User[];
    current_page: number;
    last_page: number;
    total: number;
}

export default function UserTable() {
    // --- STATE ---
    const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [lastPage, setLastPage] = useState<number>(1);

    // This is your localized "loading thingy"
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // --- FETCH LOGIC ---
    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true); // Turn on the spinner

            try {
                // Fetch from Laravel, passing the current page dynamically
                const response = await fetch(`http://localhost:8000/api/users?page=${currentPage}`);
                if (!response.ok) throw new Error('Network response was not ok');

                const result: LaravelPagination = await response.json();

                // Update states with Laravel's paginated data
                setUsers(result.data);
                setCurrentPage(result.current_page);
                setLastPage(result.last_page);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            } finally {
                setIsLoading(false); // Turn off the spinner
            }
        };

        fetchUsers();
    }, [currentPage]); // Dependency array: Re-run this effect WHENEVER currentPage changes

    // --- RENDER ---
    return (
        <div className="table-container" style={{ padding: '20px', background: '#fff', borderRadius: '8px' }}>
            <h2>User Management</h2>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
                <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
                        <th style={{ padding: '10px' }}>ID</th>
                        <th style={{ padding: '10px' }}>Name</th>
                        <th style={{ padding: '10px' }}>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {/* 3. CONDITIONAL RENDERING: The Localized Loading State */}
                    {isLoading ? (
                        <tr>
                            <td colSpan={3} style={{ textAlign: 'center', padding: '40px', color: 'var(--text-lo)' }}>
                                {/* You can replace this text with a CSS spinner or SVG icon */}
                                ⏳ Loading users...
                            </td>
                        </tr>
                    ) : users.length === 0 ? (
                        <tr>
                            <td colSpan={3} style={{ textAlign: 'center', padding: '40px' }}>
                                No users found.
                            </td>
                        </tr>
                    ) : (
                        // 4. THE FOREACH LOOP: Mapping the data to table rows
                        users.map((user) => (
                            <tr key={user.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                <td style={{ padding: '10px' }}>{user.id}</td>
                                <td style={{ padding: '10px' }}>{user.name}</td>
                                <td style={{ padding: '10px' }}>{user.email}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* 5. PAGINATION CONTROLS */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <button
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    disabled={currentPage === 1 || isLoading}
                    className="btn"
                >
                    &laquo; Previous
                </button>

                <span style={{ color: 'var(--text-lo)' }}>
                    Page {currentPage} of {lastPage}
                </span>

                <button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={currentPage === lastPage || isLoading}
                    className="btn"
                >
                    Next &raquo;
                </button>
            </div>
        </div>
    );
}