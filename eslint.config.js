// eslint.config.js — ESLint v9 flat config for React + Prettier + Vite
import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import configPrettier from 'eslint-config-prettier';

export default [
  // Ignore build artifacts here (replaces .eslintignore)
  {
    ignores: ['node_modules/**', 'dist/**', '.vite/**'],
  },

  // Base JS rules
  js.configs.recommended,

  // React/JSX files
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    // Minimal, sensible rules for Vite + React 18
    rules: {
      'react/react-in-jsx-scope': 'off', // not needed in React 17+
      'react/prop-types': 'off', // fine for beginner projects
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-uses-vars': 'error',
    },
    settings: { react: { version: 'detect' } },
  },

  // Turn off any stylistic rules that conflict with Prettier
  configPrettier,
];
