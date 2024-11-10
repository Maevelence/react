interface ErrMsgProps {
    error: string
}

export function ErrMsg({error}: ErrMsgProps) {
    return (
        <p className="text-center">{error}</p>
    )
}