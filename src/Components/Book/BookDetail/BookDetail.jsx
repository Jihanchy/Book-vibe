import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredList } from "../../../utility/addtoDb";
import { addWishlist } from "../../../utility/addToWishList";

const BookDetail = () => {

    // params
    const { bookId } = useParams()
    const bookIdInt = parseInt(bookId)
    // load data
    const data = useLoaderData()
    // search book id
    const singleData = data?.find(bok => parseInt(bok.bookId) === bookIdInt)
    // read list btn
    const handleMarkIsRead = (id) => {
        addToStoredList(id)
    }
    const handleWishList = id => {
        addWishlist(id)
    }
    if (!Array.isArray(data)) {
        return <div>Error: Data is not available</div>;
    }
    const { bookName, tags, author, category, rating, image, totalPages, yearOfPublishing, publisher, review } = singleData
    return (
        <div>
            <div className="hero ">
                <div className="hero-content p-0 flex-col lg:flex-row gap-12">
                    <figure className="p-20 bg-base-200 w-4/5 rounded-xl ">
                        <img
                            src={image}
                            className="w-[405px] h-[510px]  rounded-lg shadow-2xl" />
                    </figure>
                    <div className="space-y-1 w-full">
                        <h1 className="text-3xl font-bold">{bookName}</h1>
                        <p>By : {author}</p>
                        <div className="divider"></div>
                        <p>{category}</p>
                        <div className="divider"></div>
                        <p className="py-2">
                            <span className="font-semibold">Review:</span> {review}
                        </p>
                        <div className="flex gap-4">
                            <p className="font-bold">Tag</p>
                            {
                                tags.map((tag, idx) => <div
                                    key={idx}
                                    className="badge bg-green-50 px-4 py-3 text-[#23BE0A] font-medium">{tag}
                                </div>)
                            }
                        </div>
                        <div className="divider"></div>
                        <p className="flex">
                            <span className="mr-16">Number of pages</span>
                            <span>{totalPages}</span>
                        </p>
                        <p className="flex gap-32">
                            <span>Publisher</span>
                            <span>{publisher}</span>
                        </p>
                        <p className="flex gap-16">
                            <span>Year of publishing</span>
                            <span>{yearOfPublishing}</span>
                        </p>
                        <p className="flex gap-36">
                            <span>Rating</span>
                            <span>{rating}</span>
                        </p>
                        <div className="mt-5">
                            <button onClick={() => handleMarkIsRead(bookId)} className="btn bg-white hover:bg-[#50B1C9] px-6 hover:text-white shadow-none mr-4">Read</button>
                            <button onClick={()=> handleWishList(bookId)} className="btn bg-[#50B1C9] text-white">WishList</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;