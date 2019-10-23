// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from '../../../../../accessible-svg';

type SvgProps = {
    height?: number,
    title?: string | React.Element<any>,
    width?: number,
};

const Docs = (props: SvgProps) => (
    <AccessibleSVG width={32} height={32} viewBox="0 0 32 32" {...props}>
        <defs>
            <path
                id="prefix__a"
                d="M9 3h9.586a1 1 0 01.707.293l6.415 6.414a1 1 0 01.293.707V26A3 3 0 0123 29H9a3 3 0 01-3-3V6a3 3 0 013-3z"
            />
        </defs>
        <g fill="none" fillRule="evenodd">
            <mask id="prefix__b" fill="#fff">
                <use xlinkHref="#prefix__a" />
            </mask>
            <use fill="#4083F7" fillRule="nonzero" xlinkHref="#prefix__a" />
            <path
                fill="#FFF"
                fillOpacity={0.5}
                fillRule="nonzero"
                d="M19.286 3.286l5.01 5.009 1.412 1.412a1 1 0 01.203.293H21a2 2 0 01-2-2V3.09a1 1 0 01.286.196z"
                mask="url(#prefix__b)"
            />
            <path fill="#FFF" d="M16 23v1h-6v-1h6zm5-3v1H10v-1h11zm0-3v1H10v-1h11zm0-3v1H10v-1h11z" />
        </g>
    </AccessibleSVG>
);

export default Docs;
