"use client";

import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "@supabase/supabase-js";

export default function AuthForm() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  return (
    <div className="bg-beige min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-black">
        <Auth
          supabaseClient={supabase}
          view="sign_in"
          theme={{
            primaryColor: "#FFA500", // Orange color
          }}
          providers={["github"]}
        />
      </div>
    </div>
  );
}
