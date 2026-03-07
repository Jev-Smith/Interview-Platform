import { SignedIn, 
            SignedOut, 
            SignInButton, 
            SignUpButton, 
            UserButton, 
            SignOutButton 
        } from '@clerk/clerk-react';

function HomePage() {
    return (
        <>
            <SignedOut>
                <SignInButton mode='modal'/>
                <SignUpButton mode='modal' />
            </SignedOut>

            <SignedIn>
                <SignOutButton />
                <UserButton />
            </SignedIn>
        </>
    )
}

export default HomePage