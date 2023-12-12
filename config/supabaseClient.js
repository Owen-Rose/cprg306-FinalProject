import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hpqdlwztboysjwxaaxqq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwcWRsd3p0Ym95c2p3eGFheHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyNTQxNjYsImV4cCI6MjAxNzgzMDE2Nn0.MibJQkGLUK1X9SsDCuzH3O1SRFg8Og7G062AWyZjEe4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
