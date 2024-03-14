import React from 'react';

import {
  CameraIcon,
  FileIcon,
  ImageIcon,
  SpeakerLoudIcon,
} from '@radix-ui/react-icons';

interface IconProps {
  type: string;
  classes?: string;
}

export const IconSelector: React.FC<IconProps> = ({
  type,
  classes = 'size-4',
}) => {
  switch (type) {
    case 'image':
      return <ImageIcon className={classes} />;
    case 'video':
      return <CameraIcon className={classes} />;
    case 'audio':
      return <SpeakerLoudIcon className={classes} />;
    default:
      return <FileIcon className={classes} />;
  }
};
