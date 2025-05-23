import { useLocation } from "react-router-dom";
import { useState } from "react";

import { disablePageScroll, enablePageScroll } from "scroll-lock";

import sfcoach_colored from "../assets/sfcoach_colored.png"
import { navigation } from "../constants";

import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
    const pathName = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            enablePageScroll();
            setOpenNavigation(false);
        }else {
            disablePageScroll();
            setOpenNavigation(true);
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    }

    return (
        <div className={`fixed top-0 left-0 w-full z-50
        border-b border-n-6
        ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}
        >
            <div className="flex items-center px-5 lg:px-7 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] my-2 xl:mr-8" href="#hero">
                    <img src={sfcoach_colored} width={100} height={40} alt="SFCoach" />
                </a>

                <nav className={`${openNavigation ? "flex" : "hidden"}
                fixed top-[5rem] left-0 right-0 bottom-0
                bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center 
                    justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl
                                uppercase text-n-1 transition-colors
                                hover:text-color-1
                                ${item.onlyMobile ? "lg:hidden" : ""}
                                px-6 py-4 md:px-8 lg:-mr-0.25 lg:text-xs
                                lg:font-semibold lg:leading-5 lg:hover:text-n-1
                                xl:px-12 ${pathName.hash === item.url ?
                                        'z-2 lg:text-n-1' : 'lg:text-n-1/50'}`}
                            >
                                {item.title}
                            </a>
                        ))}

                    </div>
                        <HamburgerMenu />
                </nav>

                <a href="#signup" className="button hidden mr-8 text-n-1/50
                    transition-colors hover:text-n-1 lg:block">
                    New account
                </a>
                <Button className='hidden lg:flex' href='#login'>
                    Sign in
                </Button>
                <Button className="ml-auto lg:hidden" px="px-3" 
                onClick={toggleNavigation}>
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    )
}

export default Header