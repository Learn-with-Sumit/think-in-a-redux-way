import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

export default function Form() {
    return (
        <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput title="Video Title" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput title="Author" />
                        </div>

                        <div className="col-span-6">
                            <TextArea title="Description" />
                        </div>

                        <div className="col-span-6">
                            <TextInput title="YouTube Video link" />
                        </div>

                        <div className="col-span-6">
                            <TextInput title="Thumbnail link" />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput title="Upload Date" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput title="Video Duration" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput title="Video no of views" />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}
