module.exports = {
  '*.ts': 'npm run check-types',
  '*.js': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run check-types',
  '*.json': ['prettier --write'],
};
