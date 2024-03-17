import {
    BellIcon,
    ChevronDownIcon,
    DownloadIcon,
    ForwardIcon,
    MoreHorizontalIcon,
    ThumbsDownIcon,
    ThumbsUpIcon,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useLocation } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import moment from 'moment';
import numeral from 'numeral';

const VideoCard = () => {
    return (
        <div className="flex flex-row gap-2 max-w-[500px] ">
            <Link to={'/video/123'}>
                <div className="w-[170px] h-[100px] bg-neutral-100 rounded-lg" />
            </Link>
            <div className="text-[13px] text-neutral-300/90">
                <Link to={'/video/123'}>
                    <span className="line-clamp-2 text-[14px] font-semibold text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos consectetur perspiciatis, architecto fugit
                        sapiente deleniti molestias ut, cum repudiandae
                        consequatur voluptate, illo in vitae. Nulla quibusdam
                        maiores est autem possimus.
                    </span>
                </Link>
                <Link to={'/channel/123'}>
                    <span>PewDiePie</span>
                </Link>
                <div className="flex flex-row gap-1">
                    <span>96K views</span>
                    <span>•</span>
                    <span>13 days ago</span>
                </div>
            </div>
        </div>
    );
};

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState([]);
    const [channelDetail, setChannelDetail] = useState([]);

    const location = useLocation();
    const videoId = location.pathname.split('/')[2];

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const videoResponse = await fetchData(
                    `videos?id=${videoId}&part=contentDetails,snippet,statistics`
                );
                const videoData = videoResponse.items[0];
                setVideoDetail(videoData);

                if (videoData?.snippet?.channelId) {
                    const channelResponse = await fetchData(
                        `channels?id=${videoData?.snippet?.channelId}&part=snippet,statistics`
                    );
                    const channelData = channelResponse.items[0];
                    setChannelDetail(channelData);
                }
            } catch (error) {
                console.error(`Error fetching`, +error);
            }
        };
        fetchAll();
    }, []);

    const videoDate = moment(videoDetail.snippet?.publishedAt);

    if (videoDetail.length <= 0 && channelDetail.length <= 0)
        return <p>Loading...</p>;

    return (
        <main className="flex">
            <div className="flex flex-row w-full min-h-screen px-4">
                <div className=" p-4 flex flex-col w-full">
                    <ReactPlayer
                        url={`www.youtube.com/watch?v=${videoId}`}
                        controls={true}
                        width={'100%'}
                        height={'480px'}
                    />
                    <div className="flex flex-col gap-3 my-3">
                        <span className="text-2xl font-semibold">
                            {videoDetail?.snippet?.title}
                        </span>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-row gap-2">
                                    <Link to={'/channel/123'}>
                                        <div className="w-10 h-10 overflow-hidden rounded-full">
                                            <img
                                                src={
                                                    channelDetail?.snippet
                                                        ?.thumbnails?.high?.url
                                                }
                                                alt=""
                                            />
                                        </div>
                                    </Link>
                                    <div className="flex flex-col">
                                        <Link to={'/channel/123'}>
                                            <span className="font-semibold">
                                                {
                                                    videoDetail?.snippet
                                                        ?.channelTitle
                                                }
                                            </span>
                                        </Link>
                                        <span className="text-neutral-400 text-[12px]">
                                            {numeral(
                                                channelDetail?.statistics
                                                    ?.subscriberCount
                                            ).format('0.0a')}{' '}
                                            subscribers
                                        </span>
                                    </div>
                                </div>
                                <button className="flex flex-row gap-1 bg-transparent border border-slate-100/50 rounded-full p-2 px-4">
                                    <span className="font-semibold text-[15px]">
                                        Join
                                    </span>
                                </button>
                                <button className="flex flex-row gap-1.5 bg-neutral-800 hover:bg-neutral-700/80 rounded-full p-2 px-4">
                                    <BellIcon className="w-5 fill-white" />
                                    <span className="font-semibold text-[15px]">
                                        Subscribed
                                    </span>
                                    <ChevronDownIcon className="w-5" />
                                </button>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-row">
                                    <button className="flex flex-row gap-1.5 items-center bg-neutral-800 hover:bg-neutral-700/80 rounded-l-full p-2 px-4">
                                        <ThumbsUpIcon className="w-5 " />
                                        <span className="font-semibold text-[15px]">
                                            {videoDetail?.statistics?.likeCount}
                                        </span>
                                    </button>
                                    <button className="flex flex-row gap-1.5 bg-neutral-800 hover:bg-neutral-700/80 rounded-r-full p-2 px-4">
                                        <ThumbsDownIcon className="w-5 " />
                                    </button>
                                </div>
                                <button className="flex flex-row gap-1.5 bg-neutral-800 hover:bg-neutral-700/80 rounded-full p-2 px-4">
                                    <ForwardIcon className="w-5 " />
                                    <span className="font-semibold text-[15px]">
                                        Share
                                    </span>
                                </button>
                                <button className="flex flex-row gap-1.5 bg-neutral-800 hover:bg-neutral-700/80 rounded-full p-2 px-4">
                                    <DownloadIcon className="w-5 " />
                                    <span className="font-semibold text-[15px]">
                                        Download
                                    </span>
                                </button>
                                <button className="flex flex-row gap-1.5 bg-neutral-800 hover:bg-neutral-700/80 rounded-full p-2 px-3">
                                    <MoreHorizontalIcon className="w-5" />
                                </button>
                            </div>
                        </div>
                        <div className="p-3 bg-neutral-700 rounded-md">
                            <div className="flex flex-row gap-3 text-[14px] font-bold">
                                <span>
                                    {parseInt(
                                        videoDetail.statistics?.viewCount
                                    ).toLocaleString('id-ID')}{' '}
                                    views
                                </span>
                                <span>{videoDate.format('Do MMMM YYYY')}</span>
                            </div>
                            <div className="text-[14px] flex flex-col gap-4">
                                <p>{videoDetail.snippet?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-3">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
            </div>
        </main>
    );
};

export default VideoDetail;
