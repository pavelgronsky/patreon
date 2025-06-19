import {SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import {Button} from './ui/button'
import {HeartIcon} from 'lucide-react'
import {getSiteSettings} from '@/lib/siteSettings/getSiteSettings'

const Header = async () => {
    const siteSettings = await getSiteSettings()

    console.log('Site Settings:', siteSettings)

    return (
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
            {/* Left side */}
            <div>
                <Link href="/" className="text-2xl font-bold">
                    <h2>Creator site</h2>
                </Link>
            </div>
            {/* Right side */}
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <Button
                        asChild
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                        <div>
                            <SignInButton mode="modal" />
                            <HeartIcon className="w-4 h-4" />
                        </div>
                    </Button>
                </SignedOut>
            </div>
        </header>
    )
}

export default Header
