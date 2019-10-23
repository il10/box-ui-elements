// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from 'box-ui-elements/es/icons/accessible-svg';

type SvgProps = {
    height?: number,
    title?: string | React.Element<any>,
    width?: number,
};

const Sheets = (props: SvgProps) => (
    <AccessibleSVG width={32} height={32} viewBox="0 0 32 32" {...props}>
        <g fill="none" fillRule="evenodd">
            <path
                fill="#21A464"
                fillRule="nonzero"
                d="M9 3h9.586a1 1 0 01.707.293l6.415 6.414a1 1 0 01.293.707V26A3 3 0 0123 29H9a3 3 0 01-3-3V6a3 3 0 013-3z"
            />
            <path
                fill="#FFF"
                fillOpacity={0.5}
                fillRule="nonzero"
                d="M19.286 3.286l5.01 5.009 1.412 1.412a1 1 0 01.203.293H21a2 2 0 01-2-2V3.09a1 1 0 01.286.196z"
            />
            <path
                stroke="#FFF"
                d="M10.5 14.51v8.98l.001.01H20.5c-.004 0 .001-.005.001-.01v-8.98l-.001-.01h-10c.004 0-.001.005-.001.01z"
            />
            <path fill="#FFF" d="M15 14h1v9h-1z" />
            <path fill="#FFF" d="M20 17v1h-9v-1zm0 3v1h-9v-1z" />
        </g>
    </AccessibleSVG>
);

export default Sheets;
