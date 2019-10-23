// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from '../../../../../accessible-svg';

type SvgProps = {
    height?: number,
    title?: string | React.Element<any>,
    width?: number,
};

const Powerpoint = (props: SvgProps) => (
    <AccessibleSVG width={32} height={32} viewBox="0 0 32 32" {...props}>
        <g fill="none" fillRule="evenodd">
            <path
                fill="#D24726"
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
                <rect width={6.75} height={8.25} x={4.875} y={1.875} fill="#D24726" fillRule="nonzero" rx={0.375} />
                <path
                    fill="#FFF"
                    fillRule="nonzero"
                    d="M11.25 2.25v7.5h-6v-7.5h6zm0-.75h-6a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75z"
                />
                <path
                    fill="#FFF"
                    fillRule="nonzero"
                    d="M6.75 7.5h3.75v1H6.75zm1.5-3.75a1.5 1.5 0 101.5 1.5h-1.5v-1.5z"
                />
                <path fill="#FFF" fillRule="nonzero" d="M9 3v1.5h1.5A1.5 1.5 0 009 3z" />
                <path fill="#FFF" d="M7.5 0L0 1.313v9.374L7.5 12z" />
                <path
                    fill="#D24726"
                    fillRule="nonzero"
                    d="M2.933 5.933v-1.86h.45c.123-.009.247.001.367.03.11.03.21.087.293.165a.705.705 0 01.18.285c.042.133.062.272.06.412a1.39 1.39 0 01-.06.42.75.75 0 01-.18.3.75.75 0 01-.293.188c-.13.042-.268.062-.405.06h-.45M3.578 3l-1.748.098v5.827L2.933 9V6.945h.54c.15.013.3.013.45 0 .14-.021.278-.056.412-.105a1.86 1.86 0 00.683-.442c.088-.1.166-.208.232-.323a1.897 1.897 0 00.285-.75 2.617 2.617 0 000-.442 2.618 2.618 0 00-.128-.87 1.5 1.5 0 00-.39-.6 1.5 1.5 0 00-.63-.338A2.715 2.715 0 003.578 3"
                />
            </g>
        </g>
    </AccessibleSVG>
);

export default Powerpoint;
