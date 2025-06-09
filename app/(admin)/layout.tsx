import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Patreon Build  - Admin',
    description: 'Patreon Build Clerk - Admin',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
