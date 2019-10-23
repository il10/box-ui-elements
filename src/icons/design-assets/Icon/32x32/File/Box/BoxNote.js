// @flow
/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import AccessibleSVG from '../../../../../accessible-svg';

type SvgProps = {
    height?: number,
    title?: string | React.Element<any>,
    width?: number,
};

const BoxNote = (props: SvgProps) => (
    <AccessibleSVG width={32} height={32} viewBox="0 0 32 32" {...props}>
        <defs>
            <filter id="prefix__b" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox">
                <feOffset in="SourceAlpha" result="shadowOffsetInner1" />
                <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    k2={-1}
                    k3={1}
                    operator="arithmetic"
                    result="shadowInnerInner1"
                />
                <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            </filter>
            <filter id="prefix__d" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox">
                <feOffset in="SourceAlpha" result="shadowOffsetInner1" />
                <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    k2={-1}
                    k3={1}
                    operator="arithmetic"
                    result="shadowInnerInner1"
                />
                <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            </filter>
            <filter id="prefix__f" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox">
                <feOffset in="SourceAlpha" result="shadowOffsetInner1" />
                <feComposite
                    in="shadowOffsetInner1"
                    in2="SourceAlpha"
                    k2={-1}
                    k3={1}
                    operator="arithmetic"
                    result="shadowInnerInner1"
                />
                <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            </filter>
            <path id="prefix__a" d="M8.526.332l-.92 1.375H.686A.685.685 0 010 1.019C0 .64.31.332.687.332h7.839z" />
            <path
                id="prefix__c"
                d="M6.379 3.77l-.92 1.374H.697A.69.69 0 010 4.457c0-.38.31-.688.697-.688H6.38zm1.795.593l.006.094a.69.69 0 01-.697.687h-.05l.671-1a.675.675 0 01.07.22z"
            />
            <path
                id="prefix__e"
                d="M4.231 7.207l-.424.636a2.105 2.105 0 00-.26.611l-.028.127H.69a.687.687 0 110-1.374h3.541z"
            />
        </defs>
        <g fill="none" fillRule="evenodd">
            <path
                fill="#E0E0E0"
                fillRule="nonzero"
                d="M9 3h9.586a1 1 0 01.707.293l6.415 6.414a1 1 0 01.293.707V26A3 3 0 0123 29H9a3 3 0 01-3-3V6a3 3 0 013-3z"
            />
            <path
                fill="#FFF"
                fillOpacity={0.5}
                fillRule="nonzero"
                d="M19.286 3.286l5.01 5.009 1.412 1.412a1 1 0 01.203.293H21a2 2 0 01-2-2V3.09a1 1 0 01.286.196z"
            />
            <g transform="translate(10 13.814)">
                <use fill="#9725DD" xlinkHref="#prefix__a" />
                <use fill="#000" filter="url(#prefix__b)" xlinkHref="#prefix__a" />
            </g>
            <g transform="translate(10 13.814)">
                <use fill="#0061D5" xlinkHref="#prefix__c" />
                <use fill="#000" filter="url(#prefix__d)" xlinkHref="#prefix__c" />
            </g>
            <g transform="translate(10 13.814)">
                <use fill="#00C8C0" xlinkHref="#prefix__e" />
                <use fill="#000" filter="url(#prefix__f)" xlinkHref="#prefix__e" />
            </g>
            <path
                fill="#000"
                d="M19.482 14.613s.135.304.59.632c.456.329.797.374.797.374l-4.64 6.72a2.558 2.558 0 01-.461.483l-1.373 1.037c-.146.11-.234.054-.193-.14l.372-1.764c.04-.187.156-.46.267-.623l4.64-6.72zm2.007-1.444c.373.272.407.704.407.704a3.57 3.57 0 01-.314.607l-.28.417s-.371-.042-.722-.298c-.35-.255-.628-.687-.628-.687l.28-.418c.106-.158.284-.397.448-.51 0 0 .436-.087.81.185z"
            />
        </g>
    </AccessibleSVG>
);

export default BoxNote;
