import React, { memo } from 'react';
import VideoCard, { VideoCardSkeleton } from './VideoCard';

const VideoContainer = ({ videos }) => {
    return (
        <section className="p-4 grid grid-cols-auto auto-rows-[320px] gap-5 overflow-y-auto w-full">
            {videos.map((video, index) => (
                <VideoCard video={video} index={index} key={index} />
            ))}
        </section>
    );
};

export const VideoContainerSkeleton = () => {
    return (
        <section className="p-4 grid grid-cols-auto auto-rows-[320px] gap-5 overflow-y-auto w-full">
            {new Array(8).fill(0).map((_, index) => (
                <VideoCardSkeleton key={index} />
            ))}
        </section>
    );
};

export default memo(VideoContainer);
