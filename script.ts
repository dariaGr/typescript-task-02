export {} // чтобы не было ошибки 'Cannot redeclare block scoped variable'

interface IPayment {
  price: number
  discount: number
  isInstallment: boolean
  months: number
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: IPayment): number => {
  let totalPayment: number = 0

  const deduction: number = price * (discount / 100)
  const discountPayment: number = price - deduction

  return isInstallment
    ? (totalPayment = discountPayment / months)
    : (totalPayment = discountPayment)
}

totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })
