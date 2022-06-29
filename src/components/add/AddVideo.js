import Form from "./Form";

export default function AddVideo() {
    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-0">
            <div className="w-full">
                <div className="px-4 sm:px-0 pb-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Add new video
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                        Please fillup the form to add new video
                    </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <Form />
                </div>
            </div>
        </div>
    );
}
