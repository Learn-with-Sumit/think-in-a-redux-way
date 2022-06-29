import { Link } from "react-router-dom";
import logo from "../assets/lws.svg";

export default function Navigation() {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
                <Link to="/">
                    <img className="h-10" src={logo} alt="Learn with Sumit" />
                </Link>
                <Link
                    to="/videos/add"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                >
                    + Add Video
                </Link>
            </div>
        </nav>
    );
}
