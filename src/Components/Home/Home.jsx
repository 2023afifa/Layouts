import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-slate-300 min-h-screen">
            <div className="text-center pt-14 mb-10">
                <Link to="/nav">
                    <button className="btn bg-indigo-500 text-slate-200 normal-case hover:bg-indigo-400">Navbar</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;