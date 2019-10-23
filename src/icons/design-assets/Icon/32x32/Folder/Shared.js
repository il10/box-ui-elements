// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from '../../../../accessible-svg';

type SvgProps = {
    height?: number,
    title?: string | React.Element<any>,
    width?: number,
};

const Shared = (props: SvgProps) => (
    <AccessibleSVG width={32} height={32} viewBox="0 0 32 32" {...props}>
        <g fill="none" fillRule="evenodd">
            <path
                fill="#2687FC"
                d="M6 6h6c2 0 1.5 2 4 2h10a3 3 0 013 3v13a3 3 0 01-3 3H6a3 3 0 01-3-3V9a3 3 0 013-3z"
            />
            <path fill="#91C2FD" d="M6 11h20a3 3 0 013 3v10a3 3 0 01-3 3H6a3 3 0 01-3-3V14a3 3 0 013-3z" />
            <path
                fill="#2486FC"
                d="M19.001 19c1.364 0 2.278.808 2.73 2.01.117.308.203.642.259.996.08.512-.214.934-.844.988l-.14.006h-4.002a1.7 1.7 0 01-.193-.011c.168-.33.231-.718.165-1.138a6.024 6.024 0 00-.414-1.45c.506-.858 1.322-1.401 2.44-1.401zM13 19c1.363 0 2.277.808 2.73 2.01.117.308.203.642.258.996.086.548-.257.994-.983.994h-4.002c-.734 0-1.076-.452-.992-.992.02-.129.045-.255.073-.378.05-.216.11-.423.185-.62C10.722 19.81 11.636 19 13 19zm0-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6.001 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
            />
        </g>
    </AccessibleSVG>
);

export default Shared;
