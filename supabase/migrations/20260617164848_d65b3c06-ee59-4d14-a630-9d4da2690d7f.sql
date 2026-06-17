REVOKE EXECUTE ON FUNCTION public.bootstrap_first_admin(uuid) FROM anon, public;
REVOKE EXECUTE ON FUNCTION public.handle_new_user_role() FROM anon, public;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon, public;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon, public;