import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

//  convert the Prisma result to a plain JavaScript object
const convertToPlainObject = <T>(value: T): T =>
  JSON.parse(JSON.stringify(value))

// Format number with decimal places
const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.')

  return decimal
    ? `${int}.${decimal.padEnd(2, '0')}` 
    : `${int}.00`
}

export {
  cn,
  convertToPlainObject,
  formatNumberWithDecimal
}
