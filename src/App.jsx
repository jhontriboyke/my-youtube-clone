import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import ChannelDetail from './pages/ChannelDetail';
import VideoDetail from './pages/VideoDetail';
import SearchContextProvider from './utils/SearchContext';
import { useState } from 'react';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <BrowserRouter>
                <SearchContextProvider value={[searchTerm, setSearchTerm]}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Navigate to={'/home'} />} />
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="/search/:searchTerm"
                            element={<Search />}
                        />
                        <Route
                            path="/channel/:channelDetail"
                            element={<ChannelDetail />}
                        />
                        <Route
                            path="/video/:channelDetail"
                            element={<VideoDetail />}
                        />
                    </Routes>
                </SearchContextProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
