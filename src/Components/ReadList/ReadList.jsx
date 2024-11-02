
const ReadList = ({ read }) => {
    const { bookName, tags, author, category, rating, image, totalPages, yearOfPublishing, publisher, review } = read

    return (
        <div className="card card-side bg-base-100 rounded-md border-2 p-5 gap-6 flex-col md:flex-row">
            <figure className="py-7 px-12 bg-[#F3F3F3] rounded-md">
                <img
                    src={image}
                    className="w-[124px] h-[166px]"
                    alt="Books" />
            </figure>
            <div className="p-0 space-y-3 ">
                <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                <p className="text-lg mb-0 font-medium">By : {author}</p>
                <div className="flex flex-wrap items-center gap-2 lg:gap-5">
                    <span><p className="font-semibold">Tags</p></span>
                    <span className="gap-3 flex items-center">
                        {
                            tags.map((tag, idx) => <p
                                key={idx}
                                className="badge bg-green-50 text-[#23BE0A] font-medium">{tag}
                            </p>)
                        }
                    </span>
                    <span className="font-semibold">
                        Year of publishing: {yearOfPublishing}
                    </span>
                </div>
                <div className="flex gap-10">
                    <p><span className="font-semibold">Publisher : </span><span>{publisher}</span></p>
                    <p><span className="font-semibold">Pages : </span><span>{totalPages}</span></p>
                </div>
                <div className="divider"></div>
                <div className="card-actions items-center gap-3">
                    <p className="px-5 py-2 rounded-3xl bg-blue-200 text-[#328EFF]">Category: {category}</p>
                    <p className="px-5 py-2 rounded-3xl bg-orange-200 text-[#FFAC33]">Rating: {rating}</p>
                    <button className="hover:bg-slate-300 px-5 py-2 rounded-3xl bg-[#23BE0A] text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ReadList;