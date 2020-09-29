import 'dotenv';

const config = {
  origin: process.env.REACT_APP_ORIGIN || window.location.origin,
  authority: process.env.REACT_APP_AUTHORITY || 'https://reactapp.auth.eu-central-1.amazoncognito.com',
  clientId: process.env.REACT_APP_CLIENT_ID || '7s7uifbd9p5rds9van1dtv6hmo',
  userPoolId: process.env.REACT_APP_USER_POOL_ID || 'eu-central-1_uv19uFqzy',
};

export default config;
