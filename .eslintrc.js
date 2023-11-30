module.exports = {
  parser: '@typescript-eslint/parser', // Spécifie le parser ESLint pour TypeScript
  extends: [
    'eslint:recommended', // Utilise les recommandations de base de ESLint
    'plugin:@typescript-eslint/recommended', // Utilise les recommandations pour TypeScript
  ],
  parserOptions: {
    ecmaVersion: 2020, // Permet l'analyse des fonctionnalités ECMAScript modernes
    sourceType: 'module', // Permet l'utilisation d'importations de modules
  },
  rules: {
    // Ici, vous pouvez ajouter ou écraser des règles spécifiques
    // Exemple : désactiver la règle "no-unused-vars" pour les variables de type
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // Autres règles que vous souhaiteriez personnaliser...
  },
};
