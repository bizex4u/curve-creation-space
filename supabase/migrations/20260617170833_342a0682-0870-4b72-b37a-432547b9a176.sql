DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;

CREATE POLICY "Anyone can submit a lead"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 1 AND 120
  AND length(email) BETWEEN 3 AND 255
  AND (phone IS NULL OR length(phone) <= 40)
  AND (company IS NULL OR length(company) <= 160)
  AND (message IS NULL OR length(message) <= 2000)
  AND (source IS NULL OR source IN ('contact', 'referral', 'newsletter', 'footer', 'hero', 'cta', 'other'))
);