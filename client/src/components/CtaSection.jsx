import { Link } from "react-router-dom";

export default function CtaSection() {
    return (
        <div id="cta-section" className="mx-auto py-[40px]">
            <div className="grid grid-cols-3 grid-flow-col max-w-6xl mx-auto py-4 gap-6">
                <div className="mx-auto text-center px-[22px] py-[57px] bg-slate-100 rounded-lg">
                    <p className="p-4 text-2xl font-normal text-gray-700 font-hero">Bonsai care</p>
                    <p className="w-[50%] mx-auto border-b-2 border-slate-300"></p>
                    <p className="p-4 text-lg">The basic techniques, including placement, watering, and repotting</p>
                    <Link to="/techniques" className="block mt-4 m-auto w-[50%] my-4 px-4 py-3 text-m font-semibold text-white bg-green-400  hover:bg-green-600 rounded-lg uppercase">
                        Bonsai care
                    </Link>              
                </div>
                <div className="mx-auto text-center px-[22px] py-[57px] bg-slate-100 rounded-lg">
                    <p className="p-4 text-2xl font-normal text-gray-700 font-hero">Bonsai styling</p>
                    <p className="w-[50%] mx-auto border-b-2 border-slate-300"></p>
                    <p className="p-4 text-lg">Styling techniques, including pruning, wiring, and defoliation</p>
                    <Link to="/tree-species" className="block mt-4 m-auto w-[50%] my-4 px-4 py-3 text-m font-semibold text-white bg-green-400 hover:bg-green-600 rounded-lg uppercase">
                        Bonsai styling
                    </Link>              
                </div>
                <div className="mx-auto text-center px-[22px] py-[57px] bg-green-400 rounded-lg">
                    <p className="p-4 text-2xl font-normal text-white font-hero">Tree species</p>
                    <p className="w-[50%] mx-auto border-b-2 border-slate-300"></p>
                    <p className="p-4 text-lg text-white">Care guidelines for the most popular tree species</p>
                    <Link to="/register" className="block mt-4 m-auto w-[50%] my-4 px-4 py-3 text-m font-semibold text-gray-700 bg-white hover:bg-slate-100 rounded-lg uppercase">
                        Tree species
                    </Link>     
                </div>
            </div>
        </div>
    )
}