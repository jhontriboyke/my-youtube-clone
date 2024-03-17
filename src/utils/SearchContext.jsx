import { createContext } from 'react';

export const SearchContext = createContext('');

const SearchContextProvider = ({ value, children }) => {
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;
