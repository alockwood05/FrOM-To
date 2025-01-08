// Global setup for tests
import { afterEach } from 'vitest';
import { vi } from 'vitest';

// ============================
// Setup Local storage
// ============================

class LocalStorageMock {
  constructor() {
      this.store = {};
  }

  getItem(key) {
      return this.store[key] || null;
  }

  setItem(key, value) {
      this.store[key] = value.toString();
  }

  removeItem(key) {
      delete this.store[key];
  }

  clear() {
      this.store = {};

  }
}

const localStorageMock = new LocalStorageMock();
vi.stubGlobal('localStorage', localStorageMock);

afterEach(() => {
  localStorageMock.clear();
});
