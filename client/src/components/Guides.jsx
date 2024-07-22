import { useEffect, useState } from "react";
import * as bonsaiAPI from '../api/bonsai-api';

import HeroSection from "./HeroSection";
import FeaturedSection from "./FeaturedSection";

export default function Guides() {
    const [page, setPage] = useState([]);

    useEffect(() => {
        bonsaiAPI.getPage('tree-species')
            .then(result => setPage(result));
    }, []);

    return (
        <>
            <HeroSection page={page} />
            <FeaturedSection />
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-8">Find your tree species</h2>
                <p>We categorized the tree species into Broadleaf evergreen (leaves year-round), Deciduous (sheds leaves in fall) and Conifers (with needles or scale-like foliage).</p>
            </div>
        </>
    )
}
