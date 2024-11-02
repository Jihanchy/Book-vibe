import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
    const books = useLoaderData()
    return (
        <div className="">
            <h1 className="text-2xl mb-8 font-bold text-center">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;