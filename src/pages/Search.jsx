import React from 'react';
import Sidebar from '../components/Sidebar';
import SearchContainer from '../components/SearchContainer';
import { useParams } from 'react-router-dom';

const Search = () => {
    return (
        <main className="flex flex-row gap-6 max-h-[89vh] ">
            <Sidebar />
            <SearchContainer />
        </main>
    );
};

export default Search;
