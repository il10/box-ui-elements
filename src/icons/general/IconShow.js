// @flow
import * as React from 'react';

import { bdlNeutral03 } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconShow = ({ className = '', color = bdlNeutral03, height = 16, title, width = 16 }: Props) => (
    <AccessibleSVG className={`icon-show ${className}`} title={title} width={width} height={height} viewBox="0 0 16 16">
        <path
            d="M7.354 7.646l3.292-3.292a.5.5 0 0 0 0-.708L9.354 2.354a.5.5 0 0 0-.708 0L3.354 7.646a.5.5 0 0 0 0 .708l5.292 5.292a.5.5 0 0 0 .708 0l1.292-1.292a.5.5 0 0 0 0-.708L7.354 8.354a.5.5 0 0 1 0-.708z"
            fill={color}
            fillRule="nonzero"
        />
    </AccessibleSVG>
);

export default IconShow;
