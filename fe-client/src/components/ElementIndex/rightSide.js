import React, { useState } from "react";
import 'animate.css';
import AboutBox from "./Client/aboutBox";
import AboutButton from "./Client/aboutButton";
import FacebookButton from "./Client/facebookButton";
import TwitterButton from "./Client/twitterButton";
import InstagramButton from "./Client/instagramButton";


const RightSide = () => {

    const [showAbout, setShowAbout] = useState(false)
    const [hideLeft, setHideLeft] = useState(false)
    const [hideAbout, setHideAbout] = useState(false)
    const [hideLeft2, setHideLeft2] = useState(false)


    const handleAbout = () => {
        setShowAbout(!showAbout)
        setHideLeft(true)
        setHideAbout(false)
        setHideLeft2(false)
    }

    const handleAnimationEnd = () => {
        if (hideAbout) {
            setShowAbout(false);
        }
    }

    const handleCloseAbout = () => {
        setShowAbout(false)
        setHideLeft(false)
        setHideAbout(true)
        setHideLeft2(true)
    }

    return (
        <React.Fragment>
            <div className="inline-block w-2/5 h-full">
                <div className="flex justify-between w-full h-3/4 ">
                    <div className="w-9/10 flex items-center">
                        <div className="w-96 h-96">
                            <img src="/ez.png" alt="" fill />
                        </div>
                    </div>
                    <div className="w-10/10 h-1/3 mr-5 flex justify-center items-center">
                        <div className="block">
                            <div className="flex justify-center my-6">
                                <FacebookButton />
                            </div>
                            <div className="my-6">
                                <TwitterButton />
                            </div>
                            <div className="my-6">
                                <InstagramButton />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-20 flex justify-end">
                    <div className="flex justify-end items-center mb-5">
                        {!showAbout ?
                            (
                                <AboutButton
                                    hideLeft={hideLeft}
                                    handleAbout={handleAbout}
                                />
                            )
                            :
                            (
                                <AboutBox
                                    hideAbout={hideAbout}
                                    handleAnimationEnd={handleAnimationEnd}
                                    hideLeft2={hideLeft2}
                                    handleCloseAbout={handleCloseAbout}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
};

export default RightSide;
