import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

export default function Home() {
    return (
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <p className="text-2xl text-blue-700 uppercase">Home page</p>
        </div>
    );
}
