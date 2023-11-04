// src/services/supabaseClient.js

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oaylfzyyklxsblviyssa.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9heWxmenl5a2x4c2Jsdml5c3NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNDkyODMsImV4cCI6MjAxNDYyNTI4M30.Ny1HcBvKxvS3Fpr-zTPPJPJ7d1Wvd31No2ZlYa4atOM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
