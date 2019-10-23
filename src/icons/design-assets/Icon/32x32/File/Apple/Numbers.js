// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from '../../../../../accessible-svg';

type SvgProps = {
    height?: number,
    title?: string | React.Element<any>,
    width?: number,
};

const Numbers = (props: SvgProps) => (
    <AccessibleSVG width={32} height={32} viewBox="0 0 32 32" {...props}>
        <defs>
            <linearGradient id="prefix__a" x1="54.727%" x2="47.986%" y1="-66.372%" y2="99.56%">
                <stop offset="0%" stopColor="#FFF" />
                <stop offset="100%" stopColor="#FFF" />
            </linearGradient>
        </defs>
        <g fill="none">
            <path
                fill="#00A650"
                d="M9 3h9.586a1 1 0 01.707.293l6.415 6.414a1 1 0 01.293.707V26A3 3 0 0123 29H9a3 3 0 01-3-3V6a3 3 0 013-3z"
            />
            <path
                fill="#FFF"
                fillOpacity={0.5}
                d="M19.286 3.286l5.01 5.009 1.412 1.412a1 1 0 01.203.293H21a2 2 0 01-2-2V3.09a1 1 0 01.286.196z"
            />
            <path
                fill="url(#prefix__a)"
                d="M12.744 10.524c.141 0 .256.093.256.207v.063c0 .114-.115.206-.256.206H.256C.115 11 0 10.908 0 10.794v-.064c0-.113.115-.206.256-.206h12.488zM6.138 5.321c.062 0 .113.05.113.11V9.9c0 .06-.05.11-.113.11H3.511A.112.112 0 013.4 9.9V5.43c0-.06.05-.11.112-.11h2.627zM2.863 7.98c.046 0 .084.035.084.077v1.876c0 .042-.038.076-.084.076H.18c-.046 0-.084-.034-.084-.076V8.058c0-.042.038-.076.084-.076h2.684zM9.458 0c.062 0 .112.05.112.11V9.9a.11.11 0 01-.033.078.113.113 0 01-.08.033H6.83a.111.111 0 01-.112-.111V.11a.11.11 0 01.033-.079.113.113 0 01.08-.032h2.627zm3.33 2.93c.056 0 .101.046.101.103v6.873a.102.102 0 01-.1.104h-2.65a.102.102 0 01-.101-.104V3.033c0-.057.045-.104.1-.104h2.65z"
                transform="translate(9 13)"
            />
        </g>
    </AccessibleSVG>
);

export default Numbers;
