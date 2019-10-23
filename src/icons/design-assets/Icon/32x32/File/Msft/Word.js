// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from 'box-ui-elements/es/icons/accessible-svg';

type SvgProps = {
    height?: number,
    title?: string | React.Element<any>,
    width?: number,
};

const Word = (props: SvgProps) => (
    <AccessibleSVG width={32} height={32} viewBox="0 0 32 32" {...props}>
        <g fill="none" fillRule="evenodd">
            <path
                fill="#2B579A"
                fillRule="nonzero"
                d="M9 3h9.586a1 1 0 01.707.293l6.415 6.414a1 1 0 01.293.707V26A3 3 0 0123 29H9a3 3 0 01-3-3V6a3 3 0 013-3z"
            />
            <path
                fill="#FFF"
                fillOpacity={0.5}
                fillRule="nonzero"
                d="M19.286 3.286l5.01 5.009 1.412 1.412a1 1 0 01.203.293H21a2 2 0 01-2-2V3.09a1 1 0 01.286.196z"
            />
            <g transform="translate(10 12)">
                <rect width={6.75} height={9.75} x={4.875} y={1.125} fill="#2B579A" fillRule="nonzero" rx={0.375} />
                <path
                    fill="#FFF"
                    fillRule="nonzero"
                    d="M11.25 1.5v9h-6v-9h6zm0-.75h-6a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75z"
                />
                <path
                    fill="#FFF"
                    fillRule="nonzero"
                    d="M6 3h3.75v.75H6V3zm0 2.25h3.75V4.5H6v.75zm0 1.5h3.75V6H6v.75zm0 1.5h3.75V7.5H6v.75z"
                />
                <path fill="#FFF" d="M7.5 0L0 1.313v9.374L7.5 12z" />
                <path
                    fill="#2B579A"
                    fillRule="nonzero"
                    d="M6 3.75l-.817.053L4.71 6.75v.487-.472l-.652-2.887-.75.052-.555 2.775v.21-.202l-.556-2.716-.697.046.75 4.012.75.053.533-2.678v-.48.473l.54 2.76.99.067L6 3.75"
                />
            </g>
        </g>
    </AccessibleSVG>
);

export default Word;
