import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import fetch from 'node-fetch';

global.fetch = fetch;

export const baseTasks = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Finish React project", completed: false },
];

export const setFetchResponse = (val) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(val),
      ok: true,
      status: 200
    })
  );
};

afterEach(() => {
  cleanup();
});
