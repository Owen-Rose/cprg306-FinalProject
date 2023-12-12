"use client";
import { supabase } from "../../..supabaseClient";
import { useEffect, useState } from "react";

export default function Dashbaord() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAthStateChange(async () =>
      checkUser()
    );

    checkUser();

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>DashBoard</h1>
      {user && <p>Welcome, {user.email}</p>}
    </div>
  );
}
