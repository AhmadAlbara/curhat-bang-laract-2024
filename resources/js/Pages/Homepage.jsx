import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Homepage(props) {
    return (
        <div className=" min-h-screen max-w-7xl mx-auto">
            <Head title="Curhat Bang" />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <NewsList news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta}/>
            </div>
        </div>
    );
}
