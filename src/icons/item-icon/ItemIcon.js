// @flow
import * as React from 'react';

import BookmarkIcon from 'design-assets/Icon/32x32/File/Box/Bookmark';
import IconFileAudio from '../design-assets/Icon/32x32/File/Box/Audio';
import IconFileBoxNote from '../design-assets/Icon/32x32/File/Box/BoxNote';
import IconFileCode from '../design-assets/Icon/32x32/File/Box/Code';
import IconFileDefault from '../design-assets/Icon/32x32/File/Box/Default';
import IconFileDocument from '../design-assets/Icon/32x32/File/Box/Text';
import IconFileDwg from '../design-assets/Icon/32x32/File/Box/Dwg';
import IconFileExcelSpreadsheet from '../design-assets/Icon/32x32/File/Msft/Excel';
import IconFileGoogleDocs from '../design-assets/Icon/32x32/File/Google/Docs';
import IconFileGoogleSheets from '../design-assets/Icon/32x32/File/Google/Sheets';
import IconFileGoogleSlides from '../design-assets/Icon/32x32/File/Google/Slides';
import IconFileIllustrator from '../design-assets/Icon/32x32/File/Adobe/Illustrator';
import IconFileImage from '../design-assets/Icon/32x32/File/Box/Image';
import IconFileIndesign from '../design-assets/Icon/32x32/File/Adobe/Indesign';
import IconFileKeynote from '../design-assets/Icon/32x32/File/Apple/Keynote';
import IconFileNumbers from '../design-assets/Icon/32x32/File/Apple/Numbers';
import IconFilePages from '../design-assets/Icon/32x32/File/Apple/Pages';
import IconFilePDF from '../design-assets/Icon/32x32/File/Adobe/PDF';
import IconFilePhotoshop from '../design-assets/Icon/32x32/File/Adobe/Photoshop';
import IconFilePowerpointPresentation from '../design-assets/Icon/32x32/File/Msft/Powerpoint';
import IconFilePresentation from '../design-assets/Icon/32x32/Box/Presentation';
import IconFileSpreadsheet from '../design-assets/Icon/32x32/Box/Spreadsheet';
import IconFileText from '../design-assets/Icon/32x32/File/Box/Text';
import IconFileThreeD from '../design-assets/Icon/32x32/File/Box/ThreeD';
import IconFileVector from '../design-assets/Icon/32x32/File/Box/Vector';
import IconFileVideo from '../design-assets/Icon/32x32/File/Box/Video';
import IconFileWordDocument from '../design-assets/Icon/32x32/File/Msft/Word';
import IconFileZip from '../design-assets/Icon/32x32/File/Box/Zip';

import IconFolderCollab from '../design-assets/Icon/32x32/Folder/Shared';
import IconFolderExternal from '../design-assets/Icon/32x32/Folder/External';
import IconFolderPersonal from '../fdesign-assets/Icon/32x32/Folder/Personal';

const itemIconTable = {
    audio: IconFileAudio,
    bookmark: BookmarkIcon,
    boxnote: IconFileBoxNote,
    code: IconFileCode,
    default: IconFileDefault,
    document: IconFileDocument,
    dwg: IconFileDwg,
    'excel-spreadsheet': IconFileExcelSpreadsheet,
    'folder-collab': IconFolderCollab,
    'folder-external': IconFolderExternal,
    'folder-plain': IconFolderPersonal,
    'google-docs': IconFileGoogleDocs,
    'google-sheets': IconFileGoogleSheets,
    'google-slides': IconFileGoogleSlides,
    illustrator: IconFileIllustrator,
    image: IconFileImage,
    indesign: IconFileIndesign,
    keynote: IconFileKeynote,
    numbers: IconFileNumbers,
    pages: IconFilePages,
    pdf: IconFilePDF,
    photoshop: IconFilePhotoshop,
    'powerpoint-presentation': IconFilePowerpointPresentation,
    presentation: IconFilePresentation,
    spreadsheet: IconFileSpreadsheet,
    text: IconFileText,
    threed: IconFileThreeD,
    vector: IconFileVector,
    video: IconFileVideo,
    'word-document': IconFileWordDocument,
    zip: IconFileZip,
};

type Props = {
    /** Additional class name */
    className?: string,
    /** Dimension of the icon. Defaults to 32x32 */
    dimension?: number,
    /** Type of item icon, defaults to the default icon if icon type is not recognized */
    iconType: string,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
};

const ItemIcon = ({ className, dimension = 32, iconType, title }: Props) => {
    const IconComponent = itemIconTable[iconType] || IconFileDefault;
    return <IconComponent className={className} height={dimension} title={title} width={dimension} />;
};

export default ItemIcon;
