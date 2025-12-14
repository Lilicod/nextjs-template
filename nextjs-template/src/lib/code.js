npm install -D husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"

"lint-staged": {
  "*.{js,jsx}": "npm run lint"
}