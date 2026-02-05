<<<<<<< HEAD
// Jest setup file for React Native testing
// Add any global test setup here
=======
/ Jest Setup File
// This file runs before each test file

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});
>>>>>>> test-branch
