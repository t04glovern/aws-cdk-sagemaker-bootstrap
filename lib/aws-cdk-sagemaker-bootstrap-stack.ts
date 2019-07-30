import cdk = require('@aws-cdk/core');
import { SageMakerNotebook } from './constructs/sagemaker-notebook';

export class AwsCdkSagemakerBootstrapStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SageMakerNotebook(this, 'sagemaker-notebook', {
      notebookName: 'cdk-sagemaker-demo',
      notebookInstanceType: 'ml.t2.medium',
      onCreateScriptPath: 'scripts/onCreate.sh',
      onStartScriptPath: 'scripts/onStart.sh'
    })
  }
}
