import React from "react";
import "./Searching.css";
import { FaPaperPlane } from 'react-icons/fa';
import { Search } from 'lucide-react';

const Searching = () => {
    return (
        <div className="searching">
            <Search size={20} />
            <input
                type="text"
                placeholder="Find community or post"
                className="search-bar"
            />
            <button className="search_button" ><FaPaperPlane size={20} /></button>
        </div>
    );
}
export default Searching;   