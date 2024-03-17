import { BellIcon, ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
import React from 'react';
import VideoCard from './VideoCard';

const ChannelContainer = ({ detail, videos }) => {
    if (detail.length === 0 && videos.length === 0) return <p>Loading....</p>;

    return (
        <main className="w-full pr-6 overflow-y-auto">
            <div className="flex flex-col">
                <div className="w-full h-40 bg-indigo-500 rounded-lg">
                    <img
                        src={detail.brandingSettings.image.bannerExternalUrl}
                        className="block w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-row gap-5 items-center py-6">
                    <div>
                        <div className="h-36 w-36 rounded-full bg-rose-500 overflow-hidden">
                            <img src={detail.snippet.thumbnails.high.url} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold">
                            {detail.snippet.title}
                        </span>
                        <div className="flex flex-col gap-2 my-2">
                            <div className="flex flex-row gap-1 text-[14px] text-neutral-400/90 ">
                                <span>{detail.snippet.customUrl}</span>
                                <span aria-hidden>•</span>
                                <span>
                                    {detail.statistics.subscriberCount}{' '}
                                    subscribers
                                </span>
                                <span aria-hidden>•</span>
                                <span>
                                    {detail.statistics.videoCount} videos
                                </span>
                            </div>
                            <span className="text-neutral-400/90 text-[14px] flex flex-row items-center gap-1">
                                <span className="line-clamp-1 max-w-[600px]">
                                    {detail.snippet.description}
                                </span>
                                <ChevronRightIcon className="w-6" />
                            </span>
                            {/* <span className="text-[14px]">
                                <a href="#" className="text-blue-500">
                                    instagram.com/pewdiepie
                                </a>{' '}
                                <span className="font-semibold">
                                    and 2 more links
                                </span>
                            </span> */}
                        </div>
                        <div className="flex flex-row gap-2">
                            <button className="flex flex-row gap-1.5 bg-neutral-800 rounded-full p-2 px-4">
                                <BellIcon className="w-5 fill-white" />
                                <span className="font-semibold text-[15px]">
                                    Subscribed
                                </span>
                                <ChevronDownIcon className="w-5" />
                            </button>
                            <button className="flex flex-row gap-1 bg-transparent border border-slate-100/50 rounded-full p-2 px-4">
                                <span className="font-semibold text-[15px]">
                                    Join
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-b border-neutral-100 pb-[1px] flex flex-row gap-5 text-neutral-200/80 font-[500]">
                    <button className="px-1 pb-3 border-b-[2px] border-transparent hover:border-white">
                        Home
                    </button>
                    <button className="px-1 pb-3 border-b-[2px]  border-white text-neutral-200">
                        Videos
                    </button>
                    <button className="px-1 pb-3 border-b-[2px] border-transparent hover:border-white">
                        Live
                    </button>
                    <button className="px-1 pb-3 border-b-[2px] border-transparent hover:border-white">
                        Playlist
                    </button>
                    <button className="px-1 pb-3 border-b-[2px] border-transparent hover:border-white">
                        Community
                    </button>
                </div>
                <section className="py-4 flex flex-col gap-4">
                    <div className="flex flex-row items-center gap-3">
                        <button className="py-1 px-3 rounded-md bg-white text-neutral-900 text-[14px] font-semibold">
                            Latest
                        </button>
                        <button className="py-1 px-3 rounded-md text-[#f1f1f1] bg-neutral-800 text-[14px] font-semibold">
                            Popular
                        </button>
                        <button className="py-1 px-3 rounded-md text-[#f1f1f1] bg-neutral-800 text-[14px] font-semibold">
                            Oldest
                        </button>
                    </div>
                    <div className="grid grid-cols-auto gap-4">
                        {videos.map((video, index) => (
                            <VideoCard key={index} video={video} detail />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ChannelContainer;
