import { Loader2 } from "lucide-react"

function LoadingFallback() {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <Loader2 className="mr-2 h-6 w-6 animate-spin text-darkSlate" />
            <p className="text-lg text-darkSlate"> Loading... </p>
        </div>
    );
}

export default LoadingFallback;
