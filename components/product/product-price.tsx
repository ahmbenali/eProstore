import {cn} from '~/lib/utils'

type Props = {
  value: number
  className?: string
}

function ProductPrice({value, className}: Props) {
  // ensures two decimal places
  const stringValue = value.toFixed(2)
  // split into integer and decimal parts
  const [intVal, floatVal] = stringValue.split('.')

  return (
    <p className={cn('text-2xl', className)}>
      <span className='text-xs align-super'>$</span>
      {intVal}
      <span className='text-xs align-super'>.{floatVal}</span>
    </p>
  )
}

export default ProductPrice
