import type { PropsWithChildren } from "react"

type IsLoadingProps = {
    loading: boolean
}

const IsLoading = ({ loading, children }: PropsWithChildren<IsLoadingProps>) => {
    if (loading) {
        return <p>Loading...</p>
    }
    return children
}

export default IsLoading