import { Link } from "react-router-dom";
import authorImage from "../../assets/author.png";

export default function Video({ video }) {
    const { id, title, duration, author, views, date, thumbnail } = video;

    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
            <div className="w-full flex flex-col">
                <div className="relative">
                    <Link to={`/videos/${id}`}>
                        <img
                            src={thumbnail}
                            className="w-full h-auto"
                            alt={title}
                        />
                    </Link>

                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                        {duration}
                    </p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                    <img
                        src={authorImage}
                        className="rounded-full h-6 w-6 shrink-0"
                        alt={author}
                    />

                    <div clas="flex flex-col">
                        <Link to={`/videos/${id}`}>
                            <p className="text-slate-900 text-sm font-semibold">
                                {title}
                            </p>
                        </Link>
                        <span className="text-gray-400 text-xs hover:text-gray-600">
                            {author}
                        </span>
                        <p className="text-gray-400 text-xs">
                            {views} views . {date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
