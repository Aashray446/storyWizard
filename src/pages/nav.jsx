import React from "react";

export const Nav = () => {
    return (
        <nav className="flex justify-between items-center p-4 font-poiret_one">
            <div className="flex items-center">
                <a href="/"><h1 className="text-2xl text-white font-bold ml-2">Story Wizard</h1></a>
            </div>
        </nav>
    );
}