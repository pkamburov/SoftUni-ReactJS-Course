import { useEffect, useState } from "react";
import * as bonsaiAPI from '../api/bonsai-api';

import CtaSection from "./CtaSection";
import HeroSection from "./HeroSection";

export default function Home() {
    const [page, setPage] = useState([]);

    useEffect(() => {
        bonsaiAPI.getPage('home')
            .then(result => setPage(result));
    }, []);

    return (
        <>
            <HeroSection
                page={page}
            />
            <CtaSection />
        </>
    )
}

