const HeroSkeletonCard = () => {
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg animate-pulse'>
      <div className='h-96 overflow-hidden relative bg-gray-200'></div>
      <div className='px-6 py-2'>
        <div className='h-5 bg-gray-200 rounded w-3/5 mb-2'></div>
        <div className='h-5 bg-gray-200 rounded w-4/5 mb-2'></div>
        <div className='h-4 bg-gray-200 rounded w-full'></div>
      </div>
      <div className='px-6 py-2'>
        <span className='inline-block h-3 bg-gray-200 rounded px-3 py-1 text-xs my-1 mx-2'></span>
        <span className='inline-block h-3 bg-gray-200 rounded px-3 py-1 text-xs my-1 mx-2'></span>
        <span className='inline-block h-3 bg-gray-200 rounded px-3 py-1 text-xs my-1 mx-2'></span>
        <span className='inline-block h-3 bg-gray-200 rounded px-3 py-1 text-xs my-1 mx-2'></span>
        <span className='inline-block h-3 bg-gray-200 rounded px-3 py-1 text-xs my-1 mx-2'></span>
        <span className='inline-block h-3 bg-gray-200 rounded px-3 py-1 text-xs my-1 mx-2'></span>
      </div>
    </div>
  )
}

export default HeroSkeletonCard
