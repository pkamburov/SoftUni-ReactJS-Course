import { useEffect, useState } from "react";
import * as bonsaiAPI from '../api/bonsai-api';

import GuideItem from "./GuideItem";

export default function FeaturedSection() {

    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        bonsaiAPI.getFeatured()
            .then(result => setFeatured(result));
    }, []);


    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Most popular species</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {featured.map(item => <GuideItem {...item} key={item._id} />)}
                </div>
            </div>
        </div>
    )
}