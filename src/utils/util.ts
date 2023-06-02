// @ts-ignore
import aws4 from 'react-native-aws4';
import awsmobile from '../aws-exports';
import { ICredentials } from '@aws-amplify/core';
import URLParse from 'url-parse';

type S3SignedHeaders = {
  'Authorization': string,
  'Host': string,
  'X-Amz-Content-Sha256': string,
  'X-Amz-Date': string,
  'X-Amz-Security-Token': string
};

/**
 * Gets S3 signed headers, which have a similar use-case to S3 signed URLs.
 * S3 signed headers can be used with react-native-fast-image to cache images.
 * Instead of using S3 signed URLs, using signed headers by passing them into
 * <FastImage> headers allowing caching images by URL.
 * See https://github.com/aws-amplify/amplify-js/issues/5296
 * @param path the path or URI, with no query strings
 * @param credentials from AWS Auth
 */
const getS3SignedHeaders = (path: string, credentials: ICredentials): S3SignedHeaders => {
  const url = URLParse(path);
  const opts = {
    region: awsmobile.aws_user_files_s3_bucket_region,
    service: 's3',
    method: 'GET',
    host: url.hostname,
    path: url.pathname,
  };

  return aws4.sign(opts, credentials).headers;
};

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export default {
  getRandomInt,
  getS3SignedHeaders,
};
