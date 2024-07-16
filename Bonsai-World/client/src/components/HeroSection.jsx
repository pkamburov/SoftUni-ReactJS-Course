export default function HeroSection() {
    return (
        <>
            <svg className="svg">
                <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M1.01,0.727 c-0.089,0.036,-0.163,0.039,-0.211,0.036 c-0.043,-0.002,-0.202,-0.014,-0.338,-0.157 c-0.032,-0.034,-0.053,-0.065,-0.068,-0.089 c-0.064,-0.098,-0.168,-0.264,-0.307,-0.517 c0.325,-0.347,0.754,-0.282,0.919,0 C1,0.188,1,0.475,1,0.727"></path>
                </clipPath>
            </svg>
            <div className="bg-[url('./src/assets/home.jpg')] absolute h-[890px] w-[1171px] bg-hero-pattern bg-no-repeat right-0 top-0 z-10 bg-[length:1180px_680px]" style={{ clipPath: 'url(#my-clip-path)' }}>
            </div>
            <div className="mx-auto max-w-7xl sm:px-6 sm:py-2 lg:px-2 z-20">
                <div className="relative isolate overflow-hidden bg-white px-6 pt-16 sm:rounded-3xl sm:px-6 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
                        <h2 className="font-normal tracking-tight text-gray-800 lg:text-7xl sm:text-4xl font-hero">
                            The living art of Bonsai
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-700">
                            Bonsai Empire is a community built by enthusiasts and experts from around the world. We introduce you to the fascinating and living art of Bonsai, and help you get started!
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a
                                href="#"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-slate-600">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}