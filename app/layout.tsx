import type { ReactNode } from "react";
export const metadata = { title: "Doomsday Watchlist", description: "15 seats. One epic night." };
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body style={{margin:0}}>{children}</body></html>}