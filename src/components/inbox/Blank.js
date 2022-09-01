import blankImage from "../../assets/images/blank.svg";

export default function Blank() {
    return (
        <div className="h-[calc(100vh_-_129px)] flex md:flex-col md:space-y-4 items-center justify-center text-gray-700">
            <img
                src={blankImage}
                alt="No messages"
                className="w-10 hidden md:block"
            />
            <div className="-rotate-90 md:rotate-0 min-w-[130px] md:min-w-0">
                No messages yet
            </div>
        </div>
    );
}
