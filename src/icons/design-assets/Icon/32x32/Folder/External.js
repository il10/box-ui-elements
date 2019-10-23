// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from '../../../../accessible-svg';

type SvgProps = {
    height?: number,
    title?: string | React.Element<any>,
    width?: number,
};

const External = (props: SvgProps) => (
    <AccessibleSVG width={32} height={32} viewBox="0 0 32 32" {...props}>
        <g fill="none" fillRule="evenodd">
            <path
                fill="#737E88"
                d="M6 6h6c2 0 1.5 2 4 2h10a3 3 0 013 3v13a3 3 0 01-3 3H6a3 3 0 01-3-3V9a3 3 0 013-3z"
            />
            <path fill="#B8BEC3" d="M6 11h20a3 3 0 013 3v10a3 3 0 01-3 3H6a3 3 0 01-3-3V14a3 3 0 013-3z" />
            <path
                fill="#737E88"
                d="M11 19c0 2.77 2.23 5 5 5s5-2.23 5-5-2.23-5-5-5-5 2.23-5 5zm4.462 4C13.538 22.692 12 21.077 12 19c0-.308.077-.615.077-.923l2.385 2.385V21c0 .538.461 1 1 1v1zm3.461-1.308C18.77 21.308 18.385 21 18 21h-.538v-1.538c0-.231-.154-.462-.462-.462h-3v-1h1c.308 0 .538-.23.538-.538v-.924h1c.539 0 1-.461 1-1v-.23C19 15.923 20 17.308 20 19c0 1.077-.385 2-1.077 2.692z"
            />
        </g>
    </AccessibleSVG>
);

export default External;
