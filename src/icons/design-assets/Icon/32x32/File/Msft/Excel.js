// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from 'box-ui-elements/es/icons/accessible-svg';

type SvgProps = {
    height?: number,
    title?: string | React.Element<any>,
    width?: number,
};

const Excel = (props: SvgProps) => (
    <AccessibleSVG width={32} height={32} viewBox="0 0 32 32" {...props}>
        <g fill="none" fillRule="evenodd">
            <path
                fill="#217346"
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
                <rect width={6.75} height={9} x={4.875} y={1.125} fill="#217346" fillRule="nonzero" rx={0.375} />
                <path
                    fill="#FFF"
                    fillRule="nonzero"
                    d="M11.25 1.5v8.25h-6V1.5h6zm0-.75h-6a.75.75 0 00-.75.75v8.25c0 .414.336.75.75.75h6a.75.75 0 00.75-.75V1.5a.75.75 0 00-.75-.75z"
                />
                <path
                    fill="#FFF"
                    fillRule="nonzero"
                    d="M8.25 8.25V9h-1.5v-.75h1.5zm0-5.25v-.75h-1.5V3h1.5zm0 4.5v-.75h-1.5v.75h1.5zm0-3.75h-1.5v.75h1.5v-.75zm0 2.25v-.75h-1.5V6h1.5zM9 7.5h1.5v-.75H9v.75zm0-3h1.5v-.75H9v.75zm0-2.25V3h1.5v-.75H9zM9 9h1.5v-.75H9V9zm0-3h1.5v-.75H9V6z"
                />
                <path fill="#FFF" d="M7.5 0L0 1.313v9.374L7.5 12z" />
                <path
                    fill="#217346"
                    fillRule="nonzero"
                    d="M5.955 3l-1.305.075-.788 1.763-.052.157-.06.135v.218-.263l-.038-.112-.037-.106-.81-1.68-1.26.076L2.947 6 1.5 8.73l1.223.067.825-1.792.037-.127v-.271.383l.855 1.912L6 9 4.402 6l1.553-3"
                />
            </g>
        </g>
    </AccessibleSVG>
);

export default Excel;
