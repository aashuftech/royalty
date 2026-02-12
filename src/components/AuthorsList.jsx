import { useEffect, useState } from "react";

// const API = "http://localhost:2000";
const API = "https://royalty-backend-hnba.onrender.com";

function AuthorList() {
    
    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
        fetch(`${API}/authors`).then(res => res.json())
        .then(data => setAuthors(data));

    },[]);

    return(
        <div>
            <h1>Authors</h1>

            {authors.map(a => (
                <div key={a.id}>
                    <h3>{a.name}</h3>
                    <p>Total Earnings: ₹{a.total_earnings}</p>
                    <p>Balance: ₹{a.current_balance}</p>
                </div>
            ))}
        </div>
    );
};

export default AuthorList;