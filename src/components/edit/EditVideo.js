import Form from "./Form";

export default function EditVideo() {
    return (
        <div class="max-w-7xl mx-auto px-5 lg:px-0">
            <div class="w-full">
                <div class="px-4 sm:px-0 pb-4">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">
                        Edit video
                    </h3>
                    <p class="mt-1 text-sm text-gray-600">
                        Please fillup the form to edit video
                    </p>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <Form />
                </div>
            </div>
        </div>
    );
}
