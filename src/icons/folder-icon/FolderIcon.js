// @flow
import * as React from 'react';

import IconFolderCollab from '../design-assets/Icon/32x32/Folder/Shared';
import IconFolderExternal from '../design-assets/Icon/32x32/Folder/External';
import IconFolderPersonal from '../fdesign-assets/Icon/32x32/Folder/Personal';

type Props = {
    /** Dimension of the icon */
    dimension?: number,
    /** If true displays collaborated folder icon */
    isCollab?: boolean,
    /** If true displays externally collaborated folder icon */
    isExternal?: boolean,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
};

const FolderIcon = ({ dimension = 32, isCollab = false, isExternal = false, title }: Props) => {
    if (isExternal) {
        return <IconFolderExternal height={dimension} title={title} width={dimension} />;
    }

    if (isCollab) {
        return <IconFolderCollab height={dimension} title={title} width={dimension} />;
    }

    return <IconFolderPersonal height={dimension} title={title} width={dimension} />;
};

export default FolderIcon;
