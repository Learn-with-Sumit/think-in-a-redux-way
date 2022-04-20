export default function Stats({ count }) {
    return (
        <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">Total count: {count}</div>
        </div>
    );
}
