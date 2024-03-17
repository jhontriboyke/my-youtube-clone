import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import moment from 'moment';
import numeral from 'numeral';

export const VideoCardSkeleton = ({ row }) => {
    if (row) {
        return (
            <div className="flex flex-row">
                <div className=" bg-neutral-500 flex-1 h-[280px] rounded-lg overflow-hidden">
                    <img src="" alt="" />
                </div>
                <div className="flex flex-row p-2 gap-3 flex-auto">
                    <div className="flex flex-col gap-2 text-[12px] text-neutral-400 w-full">
                        <p className="w-full flex flex-col gap-2">
                            <span className="block bg-neutral-500 w-full h-8"></span>
                        </p>
                        <span className="bg-neutral-500 w-1/2 h-2"></span>
                        <span className="bg-neutral-500 w-2/3 h-2"></span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <div className="w-full bg-neutral-500 min-h-[200px] rounded-lg overflow-hidden">
                <img src="" alt="" />
            </div>
            <div className="flex flex-row p-2 gap-3">
                <div>
                    <div className="w-12 h-12 rounded-full bg-neutral-500" />
                </div>
                <div className="flex flex-col gap-2 text-[12px] text-neutral-400 w-full">
                    <p className="w-full flex flex-col gap-2">
                        <span className="block bg-neutral-500 w-full h-8"></span>
                    </p>
                    <span className="bg-neutral-500 w-1/2 h-2"></span>
                    <span className="bg-neutral-500 w-2/3 h-2"></span>
                </div>
            </div>
        </div>
    );
};

const VideoCard = ({ video, index, row }) => {
    const { id, snippet } = video;
    const [videoDetail, setVideoDetail] = useState([]);
    const [channelDetail, setChannelDetail] = useState([]);

    console.log(video, videoDetail, channelDetail);

    function getTime(time) {
        const publishedAt = time;
        const now = moment();
        const differenceInMilliseconds = now.diff(publishedAt);
        const formattedDifference1 = moment
            .duration(differenceInMilliseconds)
            .humanize();

        return formattedDifference1;
    }

    const fetchVideoDetail = async () => {
        const response = await fetchData(`videos?id=${id}&part=statistics`);
        const data = response.items[0];
        setVideoDetail(data);
    };

    const fetchChannelDetail = async () => {
        const response = await fetchData(
            `channels?id=${snippet.channelId}&part=snippet`
        );
        const data = response.items[0];
        setChannelDetail(data);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchChannelDetail();
            fetchVideoDetail();
        }, 500 * index);

        return () => clearTimeout(timeout);
    }, []);

    if (row) {
        return (
            <div className="flex flex-row">
                <Link
                    to={`/video/${id}`}
                    className="block  bg-neutral-200 min-w-[400px] min-h-[250px] rounded-lg overflow-hidden"
                >
                    <img
                        className="w-full h-full block object-cover"
                        src={snippet.thumbnails.high.url}
                        alt={snippet.title}
                    />
                </Link>
                <div className="flex flex-row p-2 gap-3 min-w-full">
                    <div>
                        <Link to={`/channel/${snippet.channelId}`}>
                            <div className="w-12 h-12 rounded-full bg-neutral-500 overflow-hidden">
                                <img
                                    src={
                                        channelDetail?.snippet?.thumbnails.high
                                            .url ||
                                        channelDetail?.snippet?.thumbnails
                                            .default.url
                                    }
                                    className="w-full h-full block object-cover"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col text-[13px] text-neutral-400 max-w-full overflow-hidden">
                        <Link
                            to={`/video/${id}`}
                            className="line-clamp-2 text-[14px] font-meidum text-[#f1f1f1]"
                        >
                            {snippet.title}
                        </Link>
                        <Link to={`/channel/${snippet.channelId}`}>
                            {snippet.channelTitle}
                        </Link>
                        <div className="flex flex-row gap-2 items-center">
                            <span>
                                {numeral(
                                    videoDetail?.statistics?.viewCount
                                ).format('0.0a')}
                            </span>
                            <span>•</span>
                            <span>{getTime(snippet.publishedAt)} ago </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col">
                <Link
                    to={`/video/${id}`}
                    className="w-full bg-neutral-200 max-h-[180px] rounded-lg overflow-hidden"
                >
                    <img
                        className="w-full h-full block object-cover"
                        src={snippet.thumbnails.high.url}
                        alt={snippet.title}
                    />
                </Link>
                <div className="flex flex-row p-2 gap-3">
                    <div>
                        <Link to={`/channel/${snippet.channelId}`}>
                            <div className="w-12 h-12 rounded-full bg-neutral-500 overflow-hidden">
                                <img
                                    src={
                                        channelDetail?.snippet?.thumbnails.high
                                            .url ||
                                        channelDetail?.snippet?.thumbnails
                                            .default.url
                                    }
                                    className="w-full h-full block object-cover"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col text-[13px] text-neutral-400 max-w-full overflow-hidden">
                        <Link
                            to={`/video/${id}`}
                            className="line-clamp-2 text-[14px] font-meidum text-[#f1f1f1]"
                        >
                            {snippet.title}
                        </Link>
                        <Link to={`/channel/${snippet.channelId}`}>
                            {snippet.channelTitle}
                        </Link>
                        <div className="flex flex-row gap-2 items-center">
                            <span>
                                {numeral(
                                    videoDetail?.statistics?.viewCount
                                ).format('0.0a')}
                            </span>
                            <span>•</span>
                            <span>{getTime(snippet.publishedAt)} ago </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default VideoCard;
