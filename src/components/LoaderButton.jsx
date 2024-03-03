import { clsx } from "clsx"
import { Loader2 } from "lucide-react"

import { Button } from "@/src/components/ui/button"

function LoaderButton(props) {
    const {
        className,
        loading,
        text,
        onClick,
        size = "default",
        variant = "default",
    } = props

    return (
        <Button
            className={clsx("bg-darkOrange hover:bg-darkOrange focus-visible:border-darkOrange", className)}
            onClick={onClick}
            disabled={loading}
            size={size}
            variant={variant}
        >
            {text}
            &ensp;
            {
                loading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )
            }
        </Button>
    )
}

export default LoaderButton
