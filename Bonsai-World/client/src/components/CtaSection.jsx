import { Link, NavLink } from "react-router-dom";

export default function CtaSection() {
    return (
        <div id="cta-section" className="mx-auto">
            <div className="grid grid-cols-3 grid-flow-col max-w-6xl mx-auto py-4 gap-6">
                <div className="mx-auto text-center px-[22px] py-[57px] bg-slate-100">
                    <p className="p-4 text-2xl font-normal text-gray-700 font-hero">Bonsai care</p>
                    <p className="w-[50%] mx-auto border-b-2 border-slate-300"></p>
                    <p className="p-4 text-lg">Bonsai tree placement, watering and other maintenance</p>
                    <Link to="/bonsai-care" className="block mt-4 m-auto w-[50%] my-4 px-4 py-3 text-m font-semibold text-white bg-green-400  hover:bg-green-600 rounded-lg uppercase">
                        Bonsai care
                    </Link>              
                </div>
                <div className="mx-auto text-center px-[22px] py-[57px] bg-slate-100">
                    <p className="p-4 text-2xl font-normal text-gray-700 font-hero">Bonsai styling</p>
                    <p className="w-[50%] mx-auto border-b-2 border-slate-300"></p>
                    <p className="p-4 text-lg">Wiring, pruning and general styling of Bonsai trees</p>
                    <Link to="/bonsai-styling" className="block mt-4 m-auto w-[50%] my-4 px-4 py-3 text-m font-semibold text-white bg-green-400 hover:bg-green-600 rounded-lg uppercase">
                        Bonsai styling
                    </Link>              
                </div>
                <div className="mx-auto text-center px-[22px] py-[57px] bg-green-400">
                    <p className="p-4 text-2xl font-normal text-white font-hero">Tree species</p>
                    <p className="w-[50%] mx-auto border-b-2 border-slate-300"></p>
                    <p className="p-4 text-lg text-white">Check out our catalogue of tree species</p>
                    <Link to="/tree-species" className="block mt-4 m-auto w-[50%] my-4 px-4 py-3 text-m font-semibold text-gray-700 bg-white hover:bg-slate-100 rounded-lg uppercase">
                        Tree species
                    </Link>     
                </div>
            </div>
        </div>
    )
}