import { Link, NavLink } from "react-router-dom";

export default function CtaSection() {
    return (
        <div id="cta-section" className="mx-auto">
            <div className="grid grid-cols-3 grid-flow-col max-w-6xl mx-auto py-4 gap-6">
                <div className="mx-auto text-center px-[22px] py-[57px] bg-slate-100">
                    <p className="p-4 text-2xl font-normal text-gray-700 font-hero">Techniques</p>
                    <p className="w-[50%] mx-auto border-b-2 border-slate-300"></p>
                    <p className="p-4 text-lg">The basic techniques, including pruning, watering, and repotting</p>
                    <Link to="/techniques" className="block mt-4 m-auto w-[50%] my-4 px-4 py-3 text-m font-semibold text-white bg-green-400  hover:bg-green-600 rounded-lg uppercase">
                        Techniques
                    </Link>              
                </div>
                <div className="mx-auto text-center px-[22px] py-[57px] bg-slate-100">
                    <p className="p-4 text-2xl font-normal text-gray-700 font-hero">Tree species</p>
                    <p className="w-[50%] mx-auto border-b-2 border-slate-300"></p>
                    <p className="p-4 text-lg">Care guidelines for the most popular Bonsai tree species</p>
                    <Link to="/tree-species" className="block mt-4 m-auto w-[50%] my-4 px-4 py-3 text-m font-semibold text-white bg-green-400 hover:bg-green-600 rounded-lg uppercase">
                        Tree species
                    </Link>              
                </div>
                <div className="mx-auto text-center px-[22px] py-[57px] bg-green-400">
                    <p className="p-4 text-2xl font-normal text-white font-hero">Ask the community</p>
                    <p className="w-[50%] mx-auto border-b-2 border-slate-300"></p>
                    <p className="p-4 text-lg text-white">Join the community of experts on our online forum.</p>
                    <Link to="/forum" className="block mt-4 m-auto w-[50%] my-4 px-4 py-3 text-m font-semibold text-gray-700 bg-white hover:bg-slate-100 rounded-lg uppercase">
                        Forum
                    </Link>     
                </div>
            </div>
        </div>
    )
}