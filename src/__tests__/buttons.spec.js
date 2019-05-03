// import React from 'react';
// import { shallow } from '../config/enzyme.config';
// import Button from '../components/Button';

const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(5, 7);

  expect(result).toBe(12);
});
