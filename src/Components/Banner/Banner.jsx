import bannerImg from '../../assets/books (1).jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 lg:px-24 md:px-10 px-2 py-2 md:py-8 rounded-xl">
            <div className="hero-content flex-col md:flex-row-reverse ">
                <img
                    src={bannerImg}
                    className="rounded-lg  flex-1 md:w-[318px]  md:h-[394px]" />
                <div className=" flex-1 space-y-7 md:space-y-12">
                    <h1 className="text-4xl md:text-5xl leading-tight font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A]">View the list</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;