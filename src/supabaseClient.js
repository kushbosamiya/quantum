import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pjswhwmbjralgwyejndl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqc3dod21ianJhbGd3eWVqbmRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzMDY4ODAsImV4cCI6MTk4NDg4Mjg4MH0.q9ZnQQvyJ1czEn1s-L3DpkkIlSFxXJUFzJDuiz6Ka8c";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
