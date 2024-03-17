import { useParams } from 'react-router-dom';
import VideoCard, { VideoCardSkeleton } from './VideoCard';
import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

const SearchContainer = () => {
    const { searchTerm } = useParams();
    const [videos, setVideos] = useState([]);

    const fetchVideos = async (searchTerm) => {
        try {
            const response = await fetchData(
                `search?q=${searchTerm}&part=snippet,id&maxResults=8`
            );
            const data = response.items;
            setVideos(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchVideos(searchTerm);
    }, []);

    return (
        <main className="p-6 flex flex-col gap-6 overflow-y-auto w-full">
            {videos ? (
                videos.map((video, index) => (
                    <VideoCard key={index} index={index} video={video} row />
                ))
            ) : (
                <VideoCardSkeleton row />
            )}
        </main>
    );
};

export default SearchContainer;
