import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, tags, author, category, rating, image } = book
    return (
            <Link to={`books/${bookId}`} className="card bg-base-100 border-2 p-6">
                <figure className="py-7 bg-[#F3F3F3] rounded-2xl">
                    <img
                        src={image}
                        className="w-[124px] h-[166px]"
                        alt="Books" />
                </figure>
                <div className="card-body px-0 pb-0 pt-6 space-y-3">
                    <div className="flex gap-3">
                        {
                            tags.map((tag, idx) => <div
                                key={idx}
                                className="badge bg-green-50 px-4 py-3 text-[#23BE0A] font-medium">{tag}
                            </div>)
                        }
                    </div>
                    <h2 className="text-xl font-bold">
                        {bookName}
                    </h2>
                    <p className="">By : {author}</p>
                    <div className="border-b-2 border-dashed "></div>
                    <div className="flex justify-between items-center">
                        <p>{category}</p>
                        <div className="flex items-center gap-2">
                            <p>{rating}</p>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-9" className="mask mask-star-2" defaultChecked />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
    );
};

export default Book;