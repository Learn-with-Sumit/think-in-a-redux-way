import { Link } from "react-router-dom";
import deleteImage from "../../assets/delete.svg";
import editImage from "../../assets/edit.svg";

export default function Description() {
    return (
        <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                Some video title
            </h1>
            <div className="pb-4 flex items-center space-between border-b gap-4">
                <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    Uploaded on 23 Nov 2022
                </h2>

                <div className="flex gap-6 w-full justify-end">
                    <div className="flex gap-1">
                        <div className="shrink-0">
                            <img
                                className="w-5 block"
                                src={editImage}
                                alt="Edit"
                            />
                        </div>
                        <Link to="/videos/edit/1">
                            <span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                                Edit
                            </span>
                        </Link>
                    </div>
                    <div className="flex gap-1">
                        <div className="shrink-0">
                            <img
                                className="w-5 block"
                                src={deleteImage}
                                alt="Delete"
                            />
                        </div>
                        <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                            Delete
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, ex. Facilis excepturi ratione magnam quia maiores
                architecto eaque fugiat sit quos ex quod quam praesentium optio
                eligendi, laborum cupiditate. Quidem.
            </div>
        </div>
    );
}
