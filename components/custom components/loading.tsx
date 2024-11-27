'use client'

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <div className="w-12 h-12 border-4 border-t-primary border-gray-300 rounded-full animate-spin"></div>
                {/* Loading Text */}
                <p className="mt-4 text-lg font-medium">Loading...</p>
            </div>
        </div>
    )
}

export default Loading
