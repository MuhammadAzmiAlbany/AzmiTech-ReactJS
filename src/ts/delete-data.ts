const baseUrl = import.meta.env.VITE_API_BASE_URL;


export const deleteDataRE = async (crudType: string, id_data: string): Promise<boolean> => {
    try {
        const response = await fetch(`${baseUrl}/${crudType}/${id_data}`, {
            method: 'DELETE'
        });

        return response.ok; // Returns true if the delete was successful
    } catch (error) {
        console.error("API Error:", error);
        return false;
    }
};
