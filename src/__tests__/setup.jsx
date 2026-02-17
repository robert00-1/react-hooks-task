import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Initialize global.fetch in case it's missing
global.fetch = vi.fn();

// Make baseTasks available globally
global.baseTasks = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Finish React project", completed: false },
];

// Make setFetchResponse available globally
global.setFetchResponse = (val) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(val),
      ok: true,
      status: 200
    })
  );
};

// Clean up after each test
afterEach(() => cleanup());
