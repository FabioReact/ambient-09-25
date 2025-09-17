import { Star as LucideStar } from 'lucide-react'

type Props = {
  filled?: boolean
  onSelect?: () => void
  onUnSelect?: () => void
  color?: string
}

const Star = ({ filled = false, onSelect, onUnSelect, color = 'gold' }: Props) => {
  if (filled)
    return (
      <LucideStar
        fill={color}
        color={color}
        onClick={onUnSelect}
        role='checkbox'
        aria-checked='true'
      />
    )
  return (
    <LucideStar
      fill='white'
      color={color}
      onClick={onSelect}
      role='checkbox'
      aria-checked='false'
    />
  )
}

export default Star
