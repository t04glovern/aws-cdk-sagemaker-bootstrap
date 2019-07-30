#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AwsCdkSagemakerBootstrapStack } from '../lib/aws-cdk-sagemaker-bootstrap-stack';

const app = new cdk.App();
new AwsCdkSagemakerBootstrapStack(app, 'AwsCdkSagemakerBootstrapStack');
