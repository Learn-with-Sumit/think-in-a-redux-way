export default function TextArea({ title, ...attributes }) {
    return (
        <>
            <label className="block text-sm font-medium text-gray-700">
                {title}
            </label>
            <div className="mt-1">
                <textarea
                    {...attributes}
                    rows="3"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                ></textarea>
            </div>
            <p className="mt-2 text-sm text-gray-500">
                Brief description for your video
            </p>
        </>
    );
}
