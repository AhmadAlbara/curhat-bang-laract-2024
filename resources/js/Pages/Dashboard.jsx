import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Dashboard(props) {
    const [isSucces, setisSucces] = useState(false);
    const { data, setData, post } = useForm({
        title: "",
        desc: "",
        category: "",
    });
    function submit(e) {
        e.preventDefault();
        post("/news", {
            onSuccess: () =>
                setData({
                    title: "",
                    desc: "",
                    category: "",
                }),
        });
        setisSucces(true);
    }

    useEffect(() => {
        if (!props.myNews) {
            router.get("/news");
        }
        return;
    }, []);

    return (
        <AuthenticatedLayout user={props.auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form
                        onSubmit={submit}
                        className="p-6 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
                    >
                        {!isSucces ? (
                            ""
                        ) : (
                            <>
                                <div
                                    role="alert"
                                    className="alert shadow-sm sm:rounded-lg bg-white mb-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <div>
                                        <h3 className="font-bold">
                                            Berhasil 👋
                                        </h3>
                                        <div className="text-xs">
                                            {props.flash.message}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <input
                            type="text"
                            placeholder="Judul"
                            className="input input-bordered w-full m-2"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            required
                            placeholder="Deskripsi"
                            value={data.desc}
                            className="input input-bordered w-full m-2"
                            onChange={(e) => setData("desc", e.target.value)}
                        />
                        <input
                            type="text"
                            required
                            placeholder="Kategori"
                            value={data.category}
                            className="input input-bordered w-full m-2"
                            onChange={(e) =>
                                setData("category", e.target.value)
                            }
                        />
                        <button
                            type="submit"
                            className="btn bg-indigo-500 text-white hover:bg-indigo-800 m-2"
                        >
                            Submit
                        </button>
                    </form>

                    <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                        {props.myNews && props.myNews.length > 0
                            ? props.myNews.map((news, i) => {
                                  return (
                                      <div
                                          className="card w-full lg:w-96 bg-base-100 shadow-xl mt-3"
                                          key={i}
                                      >
                                          <div className="card-body">
                                              <h2 className="card-title">
                                                  {news.title}
                                              </h2>
                                              <p>{news.desc}</p>
                                              <p>
                                                  <span className="font-bold">
                                                      Kategori :{" "}
                                                  </span>
                                                  {news.category}
                                              </p>
                                              <div className="card-actions justify-end">
                                                  <div className="badge badge-outline">
                                                      <Link
                                                          href={route(
                                                              "edit.news"
                                                          )}
                                                          method="get"
                                                          data={{ id: news.id }}
                                                          as="button"
                                                      >
                                                          Edit
                                                      </Link>
                                                  </div>
                                                  <div className="badge badge-outline">
                                                  <Link
                                                          href={route(
                                                              "delete.news"
                                                          )}
                                                          method="post"
                                                          data={{ id: news.id }}
                                                          as="button"
                                                      >
                                                          Hapus
                                                      </Link>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  );
                              })
                            : ""}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
