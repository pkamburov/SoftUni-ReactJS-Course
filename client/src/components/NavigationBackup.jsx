'use client'

import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
    // categories: [
    //     {
    //         id: 'techniques',
    //         name: 'Techniques',
    //         featured: [
    //             {
    //                 name: 'DIY: Ficus Bonsai',
    //                 href: '#',
    //                 imageSrc: './src/assets/ficus-bonsai-thumb.jpg',
    //                 imageAlt: 'DIY: Ficus Bonsai',
    //             },
    //             {
    //                 name: 'DIY: Juniper Bonsai',
    //                 href: '#',
    //                 imageSrc: './src/assets/juniper-thumb.jpg',
    //                 imageAlt: 'DIY: Juniper Bonsai',
    //             },
    //         ],
    //         sections: [
    //             {
    //                 id: 'bonsai-care',
    //                 name: 'Bonsai tree care',
    //                 href: '/bonsai-care',
    //                 items: [
    //                     { name: 'Placement', href: '/techniques/placement' },
    //                     { name: 'Watering', href: '/techniques/watering' },
    //                     { name: 'Fertilizing', href: '/techniques/fertilizing' },
    //                     { name: 'Repotting', href: '/techniques/repotting' },
    //                     { name: 'Soil', href: '/techniques/soil' },
    //                     { name: 'Pot selection', href: '/techniques/pot-selection' },
    //                 ],
    //             },
    //             {
    //                 id: 'bonsai-styling',
    //                 name: 'Bonsai styling',
    //                 href: '/bonsai-styling',
    //                 items: [
    //                     { name: 'Pruning', href: '#' },
    //                     { name: 'Wiring', href: '#' },
    //                     { name: 'Defoliation', href: '#' },
    //                     { name: 'Deadwood', href: '#' },
    //                     { name: 'Surface roots', href: '#' },
    //                     { name: 'Trunk', href: '#' },
    //                 ],
    //             },
    //         ],
    //     },
        // {
        //     id: 'tree-species',
        //     name: 'Tree species',
        //     featured: [
        //         {
        //             name: 'Jade Bonsai',
        //             href: '#',
        //             imageSrc: './src/assets/jade-bonsai.jpg',
        //             imageAlt: 'Jade Bonsai',
        //         },
        //         {
        //             name: 'Carmona Bonsai',
        //             href: '#',
        //             imageSrc: './src/assets/carmona-bonsai.jpg',
        //             imageAlt:
        //                 'Carmona Bonsai',
        //         },
        //     ],
        //     sections: [
        //         {
        //             id: 'care-guides',
        //             name: 'Care guides',
        //             href: '/tree-species',
        //             backgroundImg: "./src/assets/bonsai-species",
        //             items: [
        //                 { name: 'Ficus Bonsai', href: '#' },
        //                 { name: 'Juniper Bonsai', href: '#' },
        //                 { name: 'Carmona (Fukien tea)', href: '#' },
        //                 { name: 'Chinese elm', href: '#' },
        //                 { name: 'Japanese maple', href: '#' },
        //                 { name: 'Jade Bonsai', href: '#' },
        //                 { name: 'Pines', href: '#' },
        //                 { name: 'Azalea', href: '#' },
        //                 { name: 'Spruce', href: '#' },
        //                 { name: 'All Guides', href: '/tree-species' },
        //             ],
        //         },
        //         {
        //             id: 'identification',
        //             name: 'Identification',
        //             href: '/identification',
        //             items: [
        //                 { name: 'Identify my Bonsai', href: '#' },
        //                 { name: 'Indoor Bonsai', href: '#' },
        //                 { name: 'Outdoor Bonsai', href: '#' },
        //             ],
        //         },
        //     ],
        // },
    // ],
    pages: [
        { name: 'Tree care', href: '/tree-care'},
        { name: 'Styling', href: '/styling'},
        { name: 'Tree species', href: '/tree-species'},
        { name: 'About us', href: '/about-us' },
        { name: 'Contacts', href: '/contacts' },
    ],
}

export default function Navigation() {
    const [open, setOpen] = useState(false)

    return (
        <div className="navigation z-50">
            {/* Mobile menu */}
            <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Links */}
                        <TabGroup className="mt-2">
                            <div className="border-b border-gray-200">
                                <TabList className="-mb-px flex space-x-8 px-4">
                                    {navigation.categories.map((category) => (
                                        <Tab
                                            key={category.name}
                                            className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-emerald-600 data-[selected]:text-emerald-600"
                                        >
                                            {category.name}
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                            <TabPanels as={Fragment}>
                                {navigation.categories.map((category) => (
                                    <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                        <div className="grid grid-cols-2 gap-x-4">
                                            {category.featured.map((item) => (
                                                <div key={item.name} className="group relative text-sm">
                                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                        <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
                                                    </div>
                                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                        <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                        {item.name}
                                                    </a>
                                                    <p aria-hidden="true" className="mt-1">
                                                        Read more
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        {category.sections.map((section) => (
                                            <div key={section.name}>
                                                <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                                    {section.name}
                                                </p>
                                                <ul
                                                    role="list"
                                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                    className="mt-6 flex flex-col space-y-6"
                                                >
                                                    {section.items.map((item) => (
                                                        <li key={item.name} className="flow-root">
                                                            <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </TabGroup>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    <Link to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                        {page.name}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            <div className="flow-root">
                                <Link to="/login" className="-m-2 block p-2 font-medium text-gray-900">
                                    Log in
                                </Link>
                            </div>
                            <div className="flow-root">
                                <a href="/register" className="-m-2 block p-2 font-medium text-white bg-emerald-600">
                                    Register
                                </a>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <header className="header-menu z-50 mt-10 relative">

                <nav aria-label="Top" className="bg-white rounded top-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 shadow-md">
                    <div className="p-2">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <a href="/">
                                    <span className="sr-only">Bonsai World</span>
                                    <img
                                        alt=""
                                        src="./src/assets/logo.webp"
                                        className="h-16 w-auto"
                                    />
                                </a>
                            </div>

                            {/* Flyout menus */}
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            <div className="relative flex">
                                                <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-m font-medium text-gray-600 transition-colors duration-200 ease-out hover:text-gray-800 focus:outline-none data-[open]:border-emerald-600 data-[open]:text-emerald-600">
                                                    {category.name}
                                                </PopoverButton>
                                            </div>

                                            <PopoverPanel
                                                transition
                                                className="absolute shadow-md mx-auto max-w-7xl inset-x-0 top-full text-m text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                            >
                                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

                                                <div className="relative bg-white">
                                                    <div className="mx-auto max-w-7xl px-8">
                                                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                {category.featured.map((item) => (
                                                                    <div key={item.name} className="group relative text-base sm:text-m">
                                                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                            <img
                                                                                alt={item.imageAlt}
                                                                                src={item.imageSrc}
                                                                                className="object-cover object-center"
                                                                            />
                                                                        </div>
                                                                        <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                                                                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                                            {item.name}
                                                                        </Link>
                                                                        <p aria-hidden="true" className="mt-1">
                                                                            Read more
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="row-start-1 grid grid-cols-2 gap-x-8 gap-y-10 text-m">
                                                                {category.sections.map((section) => (
                                                                    <div key={section.name}>
                                                                        {/* <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                            {section.name}
                                                                        </p> */}
                                                                        <Link to={section.href} className="font-medium text-gray-900">
                                                                            {section.name}
                                                                        </Link>
                                                                        <ul
                                                                            role="list"
                                                                            aria-labelledby={`${section.name}-heading`}
                                                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                        >
                                                                            {section.items.map((item) => (
                                                                                <li key={item.name} className="flex">
                                                                                    <Link to={item.href} className="hover:text-gray-800">
                                                                                        {item.name}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </PopoverPanel>
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <Link
                                            key={page.name}
                                            to={page.href}
                                            className="flex items-center text-m font-medium text-gray-600 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </Link>
                                    ))}
                                </div>
                            </PopoverGroup>

                            {/* Search */}

                            <div className="ml-auto flex items-center">
                                <div className="mr-2 flex lg:ml-6">
                                    <a href="#" className="p-2 text-gray-500 hover:text-gray-600">
                                        <span className="sr-only">Search</span>
                                        <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                                    </a>
                                </div>
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <Link to="/login" className="px-4 py-2 text-m font-medium border-2 border-slate-400 text-gray-700 hover:bg-slate-100 rounded-lg uppercase">
                                        Log in
                                    </Link>
                                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                                    <a href="#" className="px-4 py-2 text-m font-medium bg-green-400 text-white hover:bg-green-600 rounded-lg uppercase">
                                        Register
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
