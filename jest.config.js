// const { pathsToModuleNameMapper } = require('ts-jest');
import { pathsToModuleNameMapper } from 'ts-jest';
import tsconfig from './tsconfig.json';

module.exports = {
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths),
};
