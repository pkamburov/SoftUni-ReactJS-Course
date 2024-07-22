import { useEffect, useState } from "react";
import * as bonsaiAPI from '../api/bonsai-api';

import HeroSection from "./HeroSection";

export default function Details(treeId) {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        bonsaiAPI.getTreeDetails(`/details/${treeId}`)
            .then(result => setDetails(result));
    }, []);

    return (
        <>
            <HeroSection page={page}/>
        </>
    )
}