import { memo } from 'react'
import { Loader2 } from 'lucide-react'
import { clsx } from 'clsx'

function PageLoading(props) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center w-full',
        props.className
      )}
    >
      <Loader2 className="h-10 w-10 animate-spin text-darkOrange" />
    </div>
  )
}

export default memo(PageLoading)
