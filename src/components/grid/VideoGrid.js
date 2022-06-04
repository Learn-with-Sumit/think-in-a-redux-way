import VideoGridItem from "./VideoGridItem";

export default function VideGrid() {
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    <VideoGridItem />

                    {/* <div className="col-span-12">some error happened</div> */}
                </div>
            </section>
        </section>
    );
}
