import React from "react";

const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl" key={i}>
                <figure>
                    <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.desc}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return (
        <div>
            Saat ini belum ada berita terbaru tambahkan berita anda dengan
            melakukan register terlebih dahulu heheh
        </div>
    );
};

const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsList;
