import { Link } from "react-router-dom";

export default function RelatedVideoListItem({ video }) {
    const { id, thumbnail, title, duration, author, views, date } = video || {};

    return (
        <div class="w-full flex flex-row gap-2 mb-4">
            <div class="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                <Link to={`/videos/${id}`}>
                    <img src={thumbnail} class="object-cover" alt={title} />
                </Link>
                <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    {duration}
                </p>
            </div>

            <div clas="flex flex-col w-full">
                <Link to={`/videos/${id}`}>
                    <p class="text-slate-900 text-sm font-semibold">{title}</p>
                </Link>
                <Link
                    class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    to={`/videos/${id}`}
                >
                    {author}
                </Link>
                <p class="text-gray-400 text-xs mt-1">
                    {views} views . {date}
                </p>
            </div>
        </div>
    );
}
