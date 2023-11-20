import React from 'react'
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSvg} from './delete.svg';

const iconTypes = {
    "check": <CheckSVG />,
    "delete": <DeleteSvg />
};

function TodoIcon ({ type }) {
    return (
    <span 
        className={`Icon Icon-svg Icon-${type}`}
    >
        {iconTypes[type]}
    </span>
    )
}

export { TodoIcon };