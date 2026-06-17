-- Restrictive policy: only admins may write to user_roles
CREATE POLICY "Restrict user_roles writes to admins"
ON public.user_roles
AS RESTRICTIVE
FOR ALL
TO authenticated, anon
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));