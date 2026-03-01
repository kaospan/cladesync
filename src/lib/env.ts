/**
 * src/lib/env.ts
 *
 * Validates and exports typed Vite environment variables using Zod.
 * Import this module early in the app to catch missing/invalid configuration
 * before any other code runs.
 *
 * Usage:
 *   import { env } from '@/lib/env'
 *   if (env.VITE_USE_MOCK) { ... }
 */

import { z } from "zod";

const envSchema = z.object({
  /**
   * Set to "true" to enable the in-memory mock API server.
   * Must be "true" (string) or absent — any other value is treated as disabled.
   */
  VITE_USE_MOCK: z
    .string()
    .optional()
    .transform((v) => v === "true"),

  /**
   * Base URL for the real API (optional in dev/demo mode).
   * When present it must be a valid URL string.
   */
  VITE_API_URL: z.string().url().optional(),

  /**
   * Current Vite mode ("development" | "production" | "test" | …).
   * Vite always sets this; schema keeps it for explicit consumption.
   */
  MODE: z.string().default("development"),

  /**
   * Vite DEV flag — true during `vite dev`, false during `vite build`.
   */
  DEV: z.boolean().default(false),

  /**
   * Vite PROD flag — true during `vite build`.
   */
  PROD: z.boolean().default(false),
});

// Parse the environment — throws a clear ZodError if validation fails so
// missing/invalid config surfaces immediately rather than at call-site.
const parsed = envSchema.safeParse({
  VITE_USE_MOCK: import.meta.env.VITE_USE_MOCK,
  VITE_API_URL: import.meta.env.VITE_API_URL,
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
});

if (!parsed.success) {
  // Log every issue so developers can fix all problems at once.
  console.error(
    "[env] Invalid environment configuration:\n",
    parsed.error.format()
  );
  throw new Error(
    "[env] Environment validation failed. Check the console for details."
  );
}

/** Typed, validated environment variables for the application. */
export const env = parsed.data;
