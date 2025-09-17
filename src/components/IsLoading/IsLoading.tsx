import type { PropsWithChildren } from 'react'
import Spinner from './Spinner'

type IsLoadingProps = {
  loading: boolean
}

const IsLoading = ({ loading, children }: PropsWithChildren<IsLoadingProps>) => {
  if (loading) return <Spinner />
  return children
}

export default IsLoading
