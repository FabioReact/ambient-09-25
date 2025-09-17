import type { PropsWithChildren } from 'react'
import Spinner from './Spinner'

type IsLoadingProps = {
  loading: boolean
}

const IsLoading = ({ loading, children }: PropsWithChildren<IsLoadingProps>) => {
  if (loading)
    return (
      <div className='flex justify-center'>
        <Spinner />
      </div>
    )
  return children
}

export default IsLoading
