// glass card
import React from 'react';

const GlassCard = ({ children, className}) => {
    return (
        <div className={`h-full w-full bg-royal-blue rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 ${className}`} >
        {children}
        </div>
    );
    }

export default GlassCard;
