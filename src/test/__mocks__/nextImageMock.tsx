/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { alt?: string };

// Simple mock for next/image in tests
const NextImage = ({ alt = '', ...props }: Props): JSX.Element => {
  return <img alt={alt} {...props} />;
};

export default NextImage;
