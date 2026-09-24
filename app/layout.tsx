import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'GameZone & Premium Apps Showcase',
  description: 'Interactive multi-screen premium app showcase replicating the high-fidelity 3-screen mobile experience with CapCut, Netflix, and top-tier apps.',
  openGraph: {
    title: 'GameZone & Premium Apps Showcase',
    description: 'Interactive multi-screen premium app showcase replicating the high-fidelity 3-screen mobile experience with CapCut, Netflix, and top-tier apps.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameZone & Premium Apps Showcase',
    description: 'Interactive multi-screen premium app showcase replicating the high-fidelity 3-screen mobile experience with CapCut, Netflix, and top-tier apps.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
