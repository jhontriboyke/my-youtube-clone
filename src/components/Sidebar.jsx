import {
    FlameIcon,
    GamepadIcon,
    HomeIcon,
    LibraryBigIcon,
    MusicIcon,
    TrophyIcon,
} from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Separator = () => {
    return <div className="w-full h-[1px] bg-neutral-50/50 my-4" />;
};

const Sidebar = () => {
    const location = useLocation();
    return (
        <aside className="hidden sm:block sm:min-w-[250px] sm:max-w-[250px] p-4 sm:overflow-y-auto sm:sticky">
            <div className="flex flex-col">
                <Link
                    to={'/home'}
                    className="flex flex-row gap-6 items-center hover:bg-neutral-800/60  p-2 rounded-md mb-2"
                >
                    <div>
                        <HomeIcon className="w-6" />
                    </div>
                    <span className="text-[14px]">Home</span>
                </Link>
                <Link className="flex flex-row gap-6 items-center  p-2 rounded-md hover:bg-neutral-800/60 mb-2">
                    <div>
                        <LibraryBigIcon className="w-6" />
                    </div>
                    <span className="text-[14px]">Subscription</span>
                </Link>
                <Link className="flex flex-row gap-6 items-center  p-2 rounded-md hover:bg-neutral-800/60 mb-2">
                    <div>
                        <FlameIcon className="w-6" />
                    </div>
                    <span className="text-[14px]">Trending</span>
                </Link>
                <Link className="flex flex-row gap-6 items-center  p-2 rounded-md hover:bg-neutral-800/60 mb-2">
                    <div>
                        <MusicIcon className="w-6" />
                    </div>
                    <span className="text-[14px]">Music</span>
                </Link>
                <Link className="flex flex-row gap-6 items-center  p-2 rounded-md hover:bg-neutral-800/60 mb-2">
                    <div>
                        <TrophyIcon className="w-6" />
                    </div>
                    <span className="text-[14px]">Sport</span>
                </Link>
                <Link className="flex flex-row gap-6 items-center  p-2 rounded-md hover:bg-neutral-800/60">
                    <div>
                        <GamepadIcon className="w-6" />
                    </div>
                    <span className="text-[14px]">Gaming</span>
                </Link>
            </div>
            <Separator />
            <div className="flex flex-col">
                <p className="mb-1">Subscription</p>
                <button className="flex flex-row gap-6 items-center p-2 rounded-md mb-2 hover:bg-neutral-800/60">
                    <div>
                        <div className="bg-rose-500 w-6 h-6 rounded-full" />
                    </div>
                    <span className="text-[14px]">Channel Name</span>
                </button>
                <button className="flex flex-row gap-6 items-center p-2 rounded-md mb-2 hover:bg-neutral-800/60">
                    <div>
                        <div className="bg-amber-500 w-6 h-6 rounded-full" />
                    </div>
                    <span className="text-[14px]">Channel Name</span>
                </button>
                <button className="flex flex-row gap-6 items-center p-2 rounded-md mb-2 hover:bg-neutral-800/60">
                    <div>
                        <div className="bg-indigo-500 w-6 h-6 rounded-full" />
                    </div>
                    <span className="text-[14px]">Channel Name</span>
                </button>
                <button className="flex flex-row gap-6 items-center p-2 rounded-md mb-2 hover:bg-neutral-800/60">
                    <div>
                        <div className="bg-indigo-500 w-6 h-6 rounded-full" />
                    </div>
                    <span className="text-[14px]">Channel Name</span>
                </button>
                <button className="flex flex-row gap-6 items-center p-2 rounded-md mb-2 hover:bg-neutral-800/60">
                    <div>
                        <div className="bg-indigo-500 w-6 h-6 rounded-full" />
                    </div>
                    <span className="text-[14px]">Channel Name</span>
                </button>
                <button className="flex flex-row gap-6 items-center p-2 rounded-md mb-2 hover:bg-neutral-800/60">
                    <div>
                        <div className="bg-indigo-500 w-6 h-6 rounded-full" />
                    </div>
                    <span className="text-[14px]">Channel Name</span>
                </button>
                <button className="flex flex-row gap-6 items-center p-2 rounded-md mb-2 hover:bg-neutral-800/60">
                    <div>
                        <div className="bg-indigo-500 w-6 h-6 rounded-full" />
                    </div>
                    <span className="text-[14px]">Channel Name</span>
                </button>
            </div>
            <Separator />
            <div className="flex flex-col text-[12px]">
                <span>
                    <span className="text-rose-800 font-bold">Youtube</span>{' '}
                    Clone | 2024
                </span>
                <span className="text-neutral-500">Made by Jhontri Boyke</span>
            </div>
        </aside>
    );
};

export default Sidebar;
