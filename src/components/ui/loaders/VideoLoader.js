export default function VideoLoader() {
    return (
        <div className="w-full col-span-12 sm:col-span-6 md:col-span-3 flex flex-col animate-pulse">
            <div className="relative">
                <div className="aspect-video bg-slate-200" />
            </div>

            <div className="flex flex-row mt-2 gap-2 items-center">
                <div className="bg-slate-200 rounded-full h-8 w-8 shrink-0" />

                <div className="flex flex-col space-y-1 grow">
                    <p className="bg-slate-200 text-slate-200 text-[8px]">
                        Loading...
                    </p>
                    <p className="bg-slate-200 text-slate-200 text-[8px]">
                        Loading...
                    </p>
                    <p className="bg-slate-200 text-slate-200 text-[8px]">
                        Loading...
                    </p>
                </div>
            </div>
        </div>
    );
}
