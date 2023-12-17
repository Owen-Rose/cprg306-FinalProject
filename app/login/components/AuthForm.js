"use client";

import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "@supabase/supabase-js";

export default function AuthForm() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  return (
    <Auth
      supabaseClient={supabase}
      view="sign_in"
      theme="dark"
      providers={["github"]}
    />
  );
}
