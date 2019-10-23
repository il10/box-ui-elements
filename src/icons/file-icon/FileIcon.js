// @flow
import * as React from 'react';

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
import IconFilePresentation from '../design-assets/Icon/32x32/File/Box/Presentation';
import IconFileSpreadsheet from '../design-assets/Icon/32x32/File/Box/Spreadsheet';
import IconFileText from '../design-assets/Icon/32x32/File/Box/Text';
import IconFileThreeD from '../design-assets/Icon/32x32/File/Box/ThreeD';
import IconFileVector from '../design-assets/Icon/32x32/File/Box/Vector';
import IconFileVideo from '../design-assets/Icon/32x32/File/Box/Video';
import IconFileWordDocument from '../design-assets/Icon/32x32/File/Msft/Word';
import IconFileZip from '../design-assets/Icon/32x32/File/Box/Zip';

const Components = {
    IconFileAudio,
    IconFileBoxNote,
    IconFileCode,
    IconFileDefault,
    IconFileDocument,
    IconFileDwg,
    IconFileExcelSpreadsheet,
    IconFileGoogleDocs,
    IconFileGoogleSheets,
    IconFileGoogleSlides,
    IconFileIllustrator,
    IconFileImage,
    IconFileIndesign,
    IconFileKeynote,
    IconFileNumbers,
    IconFilePages,
    IconFilePDF,
    IconFilePhotoshop,
    IconFilePowerpointPresentation,
    IconFilePresentation,
    IconFileSpreadsheet,
    IconFileText,
    IconFileThreeD,
    IconFileVector,
    IconFileVideo,
    IconFileWordDocument,
    IconFileZip,
};

const mirror = values =>
    values.reduce((prev, cur) => {
        prev[cur] = cur;
        return prev;
    }, {});

const EXTENSIONS = {
    IconFileAudio: mirror([
        'aac',
        'aif',
        'aifc',
        'aiff',
        'amr',
        'au',
        'flac',
        'm3u',
        'm4a',
        'mid',
        'mp3',
        'ra',
        'wav',
        'wma',
        'wpl',
    ]),
    IconFileBoxNote: mirror(['boxnote']),
    IconFileCode: mirror([
        'as',
        'as3',
        'asm',
        'aspx',
        'c',
        'cpp',
        'bat',
        'c',
        'cc',
        'cmake',
        'cs',
        'css',
        'cxx',
        'db',
        'diff',
        'erb',
        'groovy',
        'h',
        'haml',
        'hh',
        'htm',
        'html',
        'java',
        'js',
        'less',
        'm',
        'make',
        'md',
        'ml',
        'mm',
        'php',
        'pl',
        'plist',
        'properties',
        'py',
        'rb',
        'sass',
        'scala',
        'script',
        'scm',
        'sml',
        'sql',
        'sh',
        'wabba',
        'yaml',
    ]),
    IconFileDocument: mirror(['csv', 'dot', 'dotx', 'msg', 'odt', 'rtf', 'tsv', 'wpd', 'xhtml', 'xml', 'xsd', 'xsl']),
    IconFileDwg: mirror(['dwg', 'dwgzip']),
    IconFileExcelSpreadsheet: mirror(['xls', 'xlsx', 'xlsm', 'xlsb']),
    IconFileGoogleDocs: mirror(['gdoc']),
    IconFileGoogleSheets: mirror(['gsheet']),
    IconFileGoogleSlides: mirror(['gslide', 'gslides']),
    IconFileVector: mirror(['eps']),
    IconFileIllustrator: mirror(['ai']),
    IconFileIndesign: mirror(['indd']),
    IconFileKeynote: mirror(['key']),
    IconFileNumbers: mirror(['numbers']),
    IconFilePages: mirror(['pages']),
    IconFileImage: mirror(['bmp', 'gif', 'gdraw', 'jpeg', 'jpg', 'png', 'ps', 'svs', 'svg', 'tif', 'tiff']),
    IconFilePDF: mirror(['pdf']),
    IconFilePresentation: mirror(['odp', 'otp', 'pot', 'potx']),
    IconFilePowerpointPresentation: mirror(['ppt', 'pptx', 'pptm']),
    IconFilePhotoshop: mirror(['psd']),
    IconFileSpreadsheet: mirror(['ods', 'xlt', 'xltx']),
    IconFileText: mirror(['txt', 'vi', 'vim', 'webdoc']),
    IconFileThreeD: mirror(['3ds', 'dae', 'fbx', 'obj', 'ply', 'stl']),
    IconFileVideo: mirror([
        '3g2',
        '3gp',
        'avi',
        'flv',
        'm2v',
        'm2ts',
        'm4v',
        'mkv',
        'mov',
        'mp4',
        'mpeg',
        'mpg',
        'ogg',
        'mts',
        'qt',
        'wmv',
    ]),
    IconFileWordDocument: mirror(['docx', 'doc', 'docm']),
    IconFileZip: mirror(['rar', 'tgz', 'zip']),
};

const getFileIconComponent = extension => {
    const extensionComponentName = Object.keys(EXTENSIONS).filter(
        extensionComponent => !!EXTENSIONS[extensionComponent][extension],
    )[0];
    return extensionComponentName || 'IconFileDefault';
};

type Props = {
    /** Dimension of the icon. */
    dimension?: number,
    /** Extension of file to display icon for. Defaults to generic icon */
    extension?: string,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
};

const FileIcon = ({ dimension = 32, extension = '', title }: Props) => {
    const IconComponent = Components[getFileIconComponent(extension)];
    return <IconComponent height={dimension} title={title} width={dimension} />;
};

export default FileIcon;
