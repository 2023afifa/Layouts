import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-slate-300 min-h-screen">
            <h1 className="text-center text-3xl font-bold py-10">All My Layouts</h1>
            <div className="text-center mb-10">
                <Link to="/nav">
                    <button className="px-20 py-10 rounded bg-indigo-500 text-slate-200 text-2xl font-semibold normal-case hover:bg-indigo-600">Navbar</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;