import { useLocation } from 'react-router-dom';
import ChannelContainer from '../components/ChannelContainer';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState([]);
    const [channelVideos, setChannelVideos] = useState([]);

    const location = useLocation();
    const channelId = location.pathname.split('/')[2];

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const detailResponse = await fetchData(
                    `channels?id=${channelId}&part=snippet,statistics`
                );
                const detailData = detailResponse.items[0];
                setChannelDetail(detailData);

                const videoResponse = await fetchData(
                    `search?channelId=${channelId}&part=snippet,id&order=date`
                );
                const videoData = videoResponse.items;
                setChannelVideos(videoData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAll();
    }, []);

    return (
        <main className="flex flex-row gap-6 max-h-[89vh] ">
            <Sidebar />
            <ChannelContainer detail={channelDetail} videos={channelVideos} />
        </main>
    );
};

export default ChannelDetail;
