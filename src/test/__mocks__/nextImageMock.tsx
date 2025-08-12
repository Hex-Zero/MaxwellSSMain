/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import type { ImgHTMLAttributes, ReactElement } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & { alt?: string; priority?: boolean };

// Simple mock for next/image in tests
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NextImage = ({ alt = '', priority: _priority, ...props }: Props): ReactElement => {
  // Filter out priority prop as it's not valid for img elements
  return <img alt={alt} {...props} />;
};

export default NextImage;
