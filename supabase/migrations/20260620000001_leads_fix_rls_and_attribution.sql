-- Step 1: Add attribution columns (idempotent)
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS landing_page  TEXT,
  ADD COLUMN IF NOT EXISTS utm_source    TEXT,
  ADD COLUMN IF NOT EXISTS utm_medium    TEXT,
  ADD COLUMN IF NOT EXISTS utm_campaign  TEXT;

-- Step 2: Replace restrictive INSERT policy with permissive one
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;

CREATE POLICY "Anyone can submit a lead"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Step 3: Confirm grants (idempotent)
GRANT INSERT ON public.leads TO anon;
GRANT INSERT ON public.leads TO authenticated;
