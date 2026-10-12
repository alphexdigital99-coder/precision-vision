CREATE TABLE public.business_enquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL,
 email text NOT NULL,
 company text NOT NULL,
 phone text NOT NULL DEFAULT '',
 interest text NOT NULL,
 message text NOT NULL,
 request_hash text NOT NULL
);
GRANT ALL ON public.business_enquiries TO service_role;
ALTER TABLE public.business_enquiries ENABLE ROW LEVEL SECURITY;
CREATE INDEX business_enquiries_rate_idx ON public.business_enquiries (request_hash, created_at);
CREATE TABLE public.enquiry_rate_limits (
 request_hash text PRIMARY KEY,
 window_start timestamptz NOT NULL DEFAULT now(),
 attempts integer NOT NULL DEFAULT 1
);
GRANT ALL ON public.enquiry_rate_limits TO service_role;
ALTER TABLE public.enquiry_rate_limits ENABLE ROW LEVEL SECURITY;
CREATE FUNCTION public.allow_business_enquiry(p_hash text) RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE n integer;
BEGIN
 INSERT INTO public.enquiry_rate_limits(request_hash) VALUES(p_hash)
 ON CONFLICT(request_hash) DO UPDATE SET
 attempts = CASE WHEN enquiry_rate_limits.window_start < now() - interval '1 hour' THEN 1 ELSE enquiry_rate_limits.attempts + 1 END,
 window_start = CASE WHEN enquiry_rate_limits.window_start < now() - interval '1 hour' THEN now() ELSE enquiry_rate_limits.window_start END
 RETURNING attempts INTO n;
 RETURN n <= 5;
END;
$$;
REVOKE ALL ON FUNCTION public.allow_business_enquiry(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.allow_business_enquiry(text) TO service_role;