// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from '../../../../../accessible-svg';

type SvgProps = {
    height?: number,
    title?: string | React.Element<any>,
    width?: number,
};

const Pages = (props: SvgProps) => (
    <AccessibleSVG width={32} height={32} viewBox="0 0 32 32" {...props}>
        <g fill="none" fillRule="evenodd">
            <path
                fill="#FF9500"
                fillRule="nonzero"
                d="M9 3h9.586a1 1 0 01.707.293l6.414 6.414a1 1 0 01.293.707V26a3 3 0 01-3 3H9a3 3 0 01-3-3V6a3 3 0 013-3z"
            />
            <path
                fill="#FFF"
                fillOpacity={0.5}
                fillRule="nonzero"
                d="M19.286 3.286l5.01 5.009 1.412 1.412a1 1 0 01.203.293H21a2 2 0 01-2-2V3.09a1 1 0 01.286.196z"
            />
            <path
                fill="#FFF"
                d="M26 24v1H11.5a.5.5 0 110-1H26zm-14.033-1.59l.483.49-.773.488c-.097.098-.29-.097-.193-.195l.483-.783zm7.73-8.118l.774.782-6.861 6.945a4.293 4.293 0 01-1.063.783l-.484-.49c.193-.402.455-.766.774-1.075l6.86-6.945zm1.16-1.174a.546.546 0 01.729.045.563.563 0 01.044.737l-.966.979-.773-.783z"
            />
        </g>
    </AccessibleSVG>
);

export default Pages;
