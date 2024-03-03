import { Loader2 } from "lucide-react"
import { clsx } from "clsx"

function LoadingFallback(props) {
    return (
        <div className={clsx("flex items-center justify-center w-full h-screen", props.className)}>
            <Loader2 className="mr-2 h-6 w-6 animate-spin text-darkSlate" />
            <p className="text-lg text-darkSlate"> Loading... </p>
        </div>
    );
}

export default LoadingFallback;
