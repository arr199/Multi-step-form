interface Store {
  infoFormData: {
    name: string
    email: string
    phone: string
  }
  selectedPlan: {
    name: string
    price: number
  }
  billingPlan: string
  addons: Array<{
    name: string
    description: string
    price: number
    selected: boolean
  }>
  showThankYouPage: boolean
}

interface Issue {
  minimum: number
  type: string
  inclusive: boolean
  exact: boolean
  message: string
  path: string[]
}

interface InfoInputProps {
  value: string
  error: string
  setValue: (e: React.ChangeEvent) => void
  name: string
}
