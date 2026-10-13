import { supabase, Reloj } from "@/lib/supabase";
import LandingContent from "@/components/LandingContent";

export const revalidate = 60;

async function getRelojes(): Promise<Reloj[]> {
  try {
    const { data, error } = await supabase
      .from("relojes")
      .select(`
        id, 
        modelo, 
        created_at,
        relojes_variantes (
          id,
          color,
          precio,
          stock,
          foto_url
        )
      `)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching relojes from Supabase:", error);
      return [];
    }

    return (data as Reloj[]) || [];
  } catch (err) {
    console.error("Failed to connect to Supabase:", err);
    return [];
  }
}

export default async function HomePage() {
  const relojes = await getRelojes();

  return <LandingContent initialRelojes={relojes} />;
}
