const cdk = require('aws-cdk-lib');
const ec2 = require('aws-cdk-lib/aws-ec2');

class HelloCdkStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create VPC
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: 2 // Default is all AZs in the region
    });

    // Outputs
    new cdk.CfnOutput(this, 'OutputVpcId', { value: vpc.vpcId });
  }
}

module.exports = { HelloCdkStack }