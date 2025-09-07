import { S3Client } from '@aws-sdk/client-s3';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { fromIni } from '@aws-sdk/credential-providers';

const AWS_PROFILE = 'PHC';
const AWS_REGION = process.env.AWS_REGION || 'eu-west-2';

export const s3Client = new S3Client({
  region: AWS_REGION,
  credentials: fromIni({ profile: AWS_PROFILE })
});

export const dynamoDbClient = new DynamoDBClient({
  region: AWS_REGION,
  credentials: fromIni({ profile: AWS_PROFILE })
});

export const awsConfig = {
  profile: AWS_PROFILE,
  region: AWS_REGION,
  bucketName: process.env.AWS_S3_BUCKET || 'phc-conference-2026',
  tableName: process.env.AWS_DYNAMODB_TABLE || 'phc-conference-data'
};