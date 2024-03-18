import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head,useForm } from "@inertiajs/react";

export default function EditNews(props) {
    const { data, setData, post } = useForm({
        id: props.myNews.id,
        title: props.myNews.title,
        desc: props.myNews.desc,
        category: props.myNews.category,
    });
    function submit(e) {
        e.preventDefault();
        post("/news/update")
    }
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit Curhatan
                </h2>
            }
        >
            <Head title="Edit" />
            <form
                onSubmit={submit}
                className="p-6 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
            >
                <input
                    type="text"
                    placeholder="Judul"
                    className="input input-bordered w-full m-2"
                    defaultValue={props.myNews.title}
                    onChange={(e) => setData("title", e.target.value)}
                    required
                />
                <input
                    type="text"
                    required
                    placeholder="Deskripsi"
                    defaultValue={props.myNews.desc}
                    className="input input-bordered w-full m-2"
                    onChange={(e) => setData("desc", e.target.value)}
                />
                <input
                    type="text"
                    required
                    placeholder="Kategori"
                    defaultValue={props.myNews.category}
                    className="input input-bordered w-full m-2"
                    onChange={(e) => setData("category", e.target.value)}
                />
                <button
                    type="submit"
                    className="btn bg-indigo-500 text-white hover:bg-indigo-800 m-2"
                >
                    Submit
                </button>
            </form>
        </AuthenticatedLayout>
    );
}