import { useEffect, useMemo, useState } from 'react';
import Sidebar from '../components/Sidebar';
import VideoContainer, {
    VideoContainerSkeleton,
} from '../components/VideoContainer';
import { fetchData } from '../utils/fetchData';

const Home = () => {
    const [videos, setVideos] = useState([]);

    const fetchAll = useMemo(
        () => async () => {
            console.log('Being called');
            try {
                const response = await fetchData(
                    `videos?chart=mostPopular&part=snippet,id&maxResults=6`
                );
                const videosData = await response.items;
                setVideos(videosData);
            } catch (error) {
                console.log(error);
            }
        },
        []
    );

    useEffect(() => {
        fetchAll();
    }, []);

    return (
        <main className="flex flex-row gap-6 max-h-[89vh] ">
            <Sidebar />
            {videos.length === 0 ? (
                <VideoContainerSkeleton />
            ) : (
                <VideoContainer videos={videos} />
            )}
        </main>
    );
};

export default Home;
