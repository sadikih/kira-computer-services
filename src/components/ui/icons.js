import {
  LayoutDashboard, BrainCircuit, Workflow, Cloud, ShieldCheck, Globe, Network,
  HeartPulse, Landmark, HandHeart, Truck, Building2,
} from 'lucide-react'

// Maps the `icon` keys used in src/data/content.js to icon components.
export const serviceIcons = {
  systems: LayoutDashboard,
  ai: BrainCircuit,
  integration: Workflow,
  cloud: Cloud,
  shield: ShieldCheck,
  globe: Globe,
  network: Network,
}

export const industryIcons = {
  health: HeartPulse,
  regulatory: Landmark,
  ngo: HandHeart,
  retail: Truck,
  enterprise: Building2,
}
