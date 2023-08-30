import React from "react";
import { Icon } from '@iconify/react';
const Modal = ({ onClose, children, title }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header pt-5 pe-5">
                        <a href="#" onClick={handleCloseClick}>
                            <Icon icon="maki:cross" />
                        </a>
                    </div>
                    {title && <h1 className="">{title}</h1>}
                    <div className="modal-body italic rany text-[30px] font-medium ss:text-[50px] lg:text-7xl partners-title text-black px-10">{children}</div>
                    <div className="mt-10 flex lg:flex-row sm:flex-col flex-col">
                        <div className="basis-1/2 px-10">
                            <div className="mb-5">
                                <label className="text-black required">Name </label>
                                <input id="name" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none" />
                            </div>
                            <div className="mb-5">
                                <label className="text-black required">Email</label>
                                <input id="name" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none" />
                            </div>
                            <div className="mb-5">
                                <label className="text-black required">Phone</label>
                                <input id="name" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none" />
                            </div>
                            <div className="mb-5">
                                <label className="text-black required">Message</label>
                                <input id="name" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none" />
                            </div>




                        </div>
                        <div className="basis-1/2 px-10">
                            <div className="mb-5">
                                <label className="text-black required">Company Name</label>
                                <input id="name" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none" />
                            </div>
                            <div className="mb-5">
                                <label className="text-black required">Type of Business</label>
                                <input id="name" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none" />
                            </div>
                            <div className="mb-5">
                                <label className="text-black required">Address</label>
                                <input id="name" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none" />
                            </div>
                            <div className="mb-5">
                                <label className="text-black required">Website Link</label>
                                <input id="name" className="placeholder-black text-black font-medium text-[15px] w-full border-b-2 border-black pb-[5px]  outline-none" />
                            </div>




                        </div>


                    </div>
                    <div className="flex justify-center mt-[25px] sm:mb-[48px] pb-10">
                        <button
                            className="flex items-center gap-1 border border-solid border-black hover:bg-black hover:text-white rounded-full px-2 py-1 text-black"
                            type="submit"
                        >
                            send to us <Icon icon="quill:send" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );


};

export default Modal