import type { Metadata } from "next"
import About from "@/components/About"

export const metadata: Metadata = {
  title: "About dadda belkacem  | Poetic Verses",
  description:
    "Learn about dadda belkacem , contemporary poet and author. Discover her journey, influences, and the inspiration behind her award-winning poetry.",
}

export default function AboutPage() {
  return <About variant="full" />
}
