import { PrismaClient } from 'prisma_client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';

// Create mock prisma client
export const prismaMock = mockDeep<PrismaClient>();

// Mock the connection module
jest.mock('connection', () => ({
  prisma: prismaMock
}));

// Reset mocks before each test
beforeEach(() => {
  mockReset(prismaMock);
});