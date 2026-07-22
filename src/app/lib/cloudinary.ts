export const CLOUDINARY_CLOUD_NAME = 'dscih1izv';

export const CLOUDINARY_WIDTHS = {
  thumb: 600,
  detail: 1400
} as const;

type CloudinaryWidth = (typeof CLOUDINARY_WIDTHS)[keyof typeof CLOUDINARY_WIDTHS] | 1200;

interface CloudinaryOptions {
  aspectRatio?: string;
  crop?: 'fill';
  gravity?: 'auto';
  width?: CloudinaryWidth;
}

function sanitizePublicId(publicId: string): string {
  return publicId
    .split('/')
    .filter((part) => part.length > 0)
    .map((part) => encodeURIComponent(part))
    .join('/');
}

function extractPublicId(imageOrPublicId: string): string {
  const uploadMarker = '/image/upload/';
  const markerIndex = imageOrPublicId.indexOf(uploadMarker);

  if (markerIndex < 0) {
    return imageOrPublicId;
  }

  const afterUpload = imageOrPublicId.slice(markerIndex + uploadMarker.length);
  const firstSlash = afterUpload.indexOf('/');

  if (firstSlash < 0) {
    return imageOrPublicId;
  }

  return decodeURIComponent(afterUpload.slice(firstSlash + 1));
}

export function cldImage(publicId: string, opts: CloudinaryOptions = {}): string {
  const transformations = ['f_auto', 'q_auto'];

  if (opts.crop) {
    transformations.push(`c_${opts.crop}`);
  }

  if (opts.gravity) {
    transformations.push(`g_${opts.gravity}`);
  }

  if (opts.aspectRatio) {
    transformations.push(`ar_${opts.aspectRatio}`);
  }

  if (opts.width) {
    transformations.push(`w_${opts.width}`);
  }

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations.join(',')}/${sanitizePublicId(publicId)}`;
}

export function cldSized(imageOrPublicId: string, width: CloudinaryWidth, opts: Omit<CloudinaryOptions, 'width'> = {}): string {
  return cldImage(extractPublicId(imageOrPublicId), { ...opts, width });
}
