import './App.css'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, SignOutButton } from '@clerk/clerk-react';

function App() {
  return (
    <>
      <h1>Welcome to the app</h1>

      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
        <UserButton />
      </SignedIn>
    </>
  )
}

export default App
