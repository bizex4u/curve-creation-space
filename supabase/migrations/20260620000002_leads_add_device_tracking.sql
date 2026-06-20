-- Add device/referrer tracking columns to leads table
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS referrer TEXT,
  ADD COLUMN IF NOT EXISTS device TEXT,
  ADD COLUMN IF NOT EXISTS screen_width INTEGER;
