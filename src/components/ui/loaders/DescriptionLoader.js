export default function DescriptionLoader() {
    return (
        <div className="animate-pulse">
            <h1 className="text-xs text-slate-200 bg-slate-200">Loading...</h1>
            <div className="mt-2 pb-4 flex items-center space-between border-b">
                <h2 className="text-[8px] w-[50%] bg-slate-200 text-slate-200 w-full">
                    Uploaded on 23 Nov 2022
                </h2>
            </div>

            <div className="mt-4 text-sm bg-slate-200 h-2"></div>
            <div className="mt-1 text-sm bg-slate-200 h-2"></div>
            <div className="mt-1 text-sm bg-slate-200 h-2"></div>
            <div className="mt-1 text-sm bg-slate-200 h-2"></div>
            <div className="mt-1 text-sm bg-slate-200 h-2 w-[70%]"></div>
        </div>
    );
}
