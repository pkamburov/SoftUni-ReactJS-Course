'use client'

import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
    pages: [
        { name: 'Bonsai care', href: '/tree-care'},
        { name: 'Bonsai styling', href: '/styling'},
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
                                    {navigation.pages.map((page) => (
                                        <Link
                                            key={page.name}
                                            to={page.href}
                                            className="flex items-center text-m font-medium text-gray-600 hover:text-gray-800 border-b-2 border-transparent focus:border-emerald-600"
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
