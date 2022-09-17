import React from "react";
import AddVideo from "./components/AddVideo";
import AllVideos from "./components/Allvideos";
import Filters from "./components/Filters";
import UnWatchedVideos from "./components/UnwatchedVideos";
import WatchedVideos from "./components/WatchedVideos";

function App() {
    return (
        <div className="w-screen h-screen p-20">
            <div className="flex w-full">
                <div className="w-full border border-slate-400 p-6 space-y-8">
                    <div className="border-b py-2 border-slate-400 flex justify-between items-center">
                        <span className="font-bold">All Videos</span>
                        <Filters />
                    </div>
                    <AllVideos />
                    <AddVideo />
                </div>
                <div className="w-full border border-slate-400 p-6 space-y-8">
                    <div className="border-b py-2 border-slate-400">
                        <span className="font-bold">Watched Videos</span>
                    </div>
                    <WatchedVideos />
                </div>
            </div>

            <div className="flex w-full">
                <div className="w-full border border-slate-400 p-6 space-y-8">
                    <div className="border-b py-2 border-slate-400">
                        <span className="font-bold">Un Watched Videos</span>
                    </div>
                    <UnWatchedVideos />
                </div>
            </div>
        </div>
    );
}

export default App;
