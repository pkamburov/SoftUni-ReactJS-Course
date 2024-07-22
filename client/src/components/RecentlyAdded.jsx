import { useState, useEffect } from "react"

import * as bonsaiAPI from '../api/bonsai-api';
import GuideItem from "./GuideItem";

export default function RecentlyAdded() {

    const [recentlyAdded, setRecentlyAdded] = useState([]);

    useEffect(() => {
        bonsaiAPI.getAll()
            .then(result => setRecentlyAdded(result));
    }, []);

    return (
        <div className="w-[80%] max-w-6xl py-[40px] m-auto">
            <div className="font-body font-bold mb-[17px] text-2xl">
                <h3>Recently added</h3>
            </div>
            <div className="columns-4 w-[1051px] flex gap-4">
                {recentlyAdded.map(item => <GuideItem {...item} key={item._id} />)}
            </div>
        </div>
    )
}