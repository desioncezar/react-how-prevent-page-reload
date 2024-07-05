import React, { useRef } from 'react';
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import { Button } from 'primereact/button';


const Header = () => {

    const rootBtnRef = useRef(null);

    return (
        <>

            <div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                <img src="logo192.png" alt="hyper" height={50} />
                <StyleClass nodeRef={rootBtnRef} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                    <div ref={rootBtnRef} className="cursor-pointer block lg:hidden text-700" >
                        <i className="pi pi-bars text-4xl"></i>
                    </div>
                </StyleClass>
                <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
                    <section></section>
                    <ul className="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
                        <li>
                            <a href="/" className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                <span>Home</span>
                                <Ripple />
                            </a>
                        </li>                        
                    </ul>
                    <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                        <Button label="Login" className="p-button-text font-bold" />
                        <Button label="Register" className="ml-3 p-button-outlined font-bold" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default React.memo(Header);