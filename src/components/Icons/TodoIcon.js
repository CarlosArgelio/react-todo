import React from 'react'
import { assets } from "./../../assets";
import './TodoIcon.css';

const { check: CheckSVG, delete: DeleteSvg } = assets.icons;

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSvg className="Icon-svg" fill={color} />
};

function TodoIcon ({ type, color, onClick }) {
    return (
    <span 
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
    >
        {iconTypes[type](color)}
    </span>
    )
}

export { TodoIcon };