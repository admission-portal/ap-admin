import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_dh0RSNvjg',
  ClientId: '28iate4hsomoc5rbnevm033g1h',
};
export default new CognitoUserPool(poolData);
