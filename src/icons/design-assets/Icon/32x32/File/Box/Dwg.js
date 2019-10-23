// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from '../../../../../accessible-svg';

type SvgProps = {
    height?: number,
    title?: string | React.Element<any>,
    width?: number,
};

const Dwg = (props: SvgProps) => (
    <AccessibleSVG width={32} height={32} viewBox="0 0 32 32" {...props}>
        <g fill="none">
            <path
                fill="#009AED"
                d="M9 3h9.586a1 1 0 01.707.293l6.415 6.414a1 1 0 01.293.707V26A3 3 0 0123 29H9a3 3 0 01-3-3V6a3 3 0 013-3z"
            />
            <path
                fill="#FFF"
                fillOpacity={0.5}
                d="M19.286 3.286l5.01 5.009 1.412 1.412a1 1 0 01.203.293H21a2 2 0 01-2-2V3.09a1 1 0 01.286.196z"
            />
            <path fill="#FFF" d="M18 18v-2h-2v-4h-1v4h-2v2H9v1h4v2h2v4h1v-4h2v-2h4v-1h-4zm-1 2h-3v-3h3v3z" />
        </g>
    </AccessibleSVG>
);

export default Dwg;
