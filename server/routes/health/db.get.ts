import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  // Will add database health check later hehe

  return {
    success: true,
    data: {
      status: 'healthy',
      timestamp: new Date().toISOString(),
    },
  };
});
