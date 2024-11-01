import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    return (
        <div>
            <header className="mb-16">
            <Banner/>
            </header>
            <main className="w-11/12">
                <Books></Books>
            </main>
        </div>
    );
};

export default Home;