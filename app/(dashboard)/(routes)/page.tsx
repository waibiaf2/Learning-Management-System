import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <p className="text-4xl uppercase text-red-700">This is a protected page</p>
            <Button>
                Click Me
            </Button>
        </>
    );
}
