export const debugEnv = () => {
  console.log('Environment Variables Debug:');
  console.log('================================');
  
  const dbVars = [
    'DB_USER', 'DB_HOST', 'DB_NAME', 
    'DB_PASSWORD', 'DB_PORT', 'NODE_ENV'
  ];
  
  dbVars.forEach(varName => {
    const value = process.env[varName];
    if (value) {
      console.log(`${varName}: ${varName.includes('PASSWORD') ? '***' : value}`);
    } else {
      console.log(`${varName}: Not set`);
    }
  });
  
  console.log('================================');
};