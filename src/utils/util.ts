// @ts-ignore
import aws4 from 'react-native-aws4';
import awsmobile from '../aws-exports';
import { ICredentials } from '@aws-amplify/core';
import URLParse from 'url-parse';

export type S3SignedHeaders = {
  'Authorization': string,
  'Host': string,
  'X-Amz-Content-Sha256': string,
  'X-Amz-Date': string,
  'X-Amz-Security-Token': string
};

/**
 * Gets S3 signed headers, which have a similar use-case to S3 signed URLs.
 * S3 signed headers can be used with react-native-fast-image to cache images.
 * Instead of using Amplify Storage's default S3 signed URLs, signed headers
 * allowing caching images by URL as the URL remains static.
 * See https://github.com/aws-amplify/amplify-js/issues/5296
 * @param path the path or URI, with no query strings.
 * @param credentials from AWS Auth.
 */
export const getS3SignedHeaders = (path: string, credentials: ICredentials): S3SignedHeaders => {
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

/**
 * Gets an S3 object URI without making any network requests to AWS.
 * @param folder the S3 folder the object is in.
 * @param key the object key.
 */
export const getS3ObjectURI = (folder: string, key: string): string => {
  const protocol = 'https';
  const {
    aws_user_files_s3_bucket: bucketName,
    aws_user_files_s3_bucket_region: region,
  } = awsmobile;
  // Remove leading or trailing slashes from folder
  const formattedFolder = folder.replace(/^\/|\/$/g, '');
  const baseURL = `${protocol}://${bucketName}.s3.${region}.amazonaws.com/${formattedFolder}`;
  return `${baseURL}/${key}`;
};

/**
 * The min is inclusive and the max is exclusive.
 */
export const getRandomInt = (min: number, max: number): number => {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  return Math.floor(Math.random() * (maxi - mini) + mini);
};

const util = {
  getRandomInt,
  getS3SignedHeaders,
  getS3ObjectURI,
};

export default util;
