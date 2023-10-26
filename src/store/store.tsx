import { proxy } from 'valtio'
import { STATES } from '../utils/API'

// STATES
const store = proxy<Store>({
  infoFormData: JSON.parse(localStorage.getItem('infoFormData') as string) ?? STATES.INITIAL_INFO_FORM_DATA,
  selectedPlan: JSON.parse(localStorage.getItem('selectedPlan') as string) ?? STATES.INITIAL_SELECTED_PLAN,
  billingPlan: JSON.parse(localStorage.getItem('billingPlan') as string) ?? STATES.INITIAL_BILLING_PLAN,
  addons: JSON.parse(localStorage.getItem('addons') as string) ?? STATES.INITIAL_SELECTED_ADDONS,
  showThankYouPage: false

})

// ACTIONS
export const actions = {
  // PERSONAL INFO PAGE
  setName (e: React.ChangeEvent): void {
    store.infoFormData.name = (e.target as HTMLInputElement).value
    localStorage.setItem('infoFormData', JSON.stringify(store.infoFormData))
  },
  setEmail (e: React.ChangeEvent): void {
    store.infoFormData.email = (e.target as HTMLInputElement).value.trim()
    localStorage.setItem('infoFormData', JSON.stringify(store.infoFormData))
  },
  setPhone (e: React.ChangeEvent): void {
    store.infoFormData.phone = (e.target as HTMLInputElement).value.trim()
    localStorage.setItem('infoFormData', JSON.stringify(store.infoFormData))
  },

  // BILLING PLAN
  setBillingPlan (): void {
    if (store.billingPlan === 'monthly') {
      store.billingPlan = 'yearly'
    } else {
      store.billingPlan = 'monthly'
    }
    localStorage.setItem('billingPlan', JSON.stringify(store.billingPlan))
  },
  // SET SELECTED PLAN
  setPlan ({ name, price }: { name: string, price: number }): void {
    store.selectedPlan.name = name
    store.selectedPlan.price = price
    localStorage.setItem('selectedPlan', JSON.stringify(store.selectedPlan))
  },
  // SET ADDONS
  setAddons (index: number): void {
    if (store.addons[index].selected) {
      store.addons[index].selected = false
    } else {
      store.addons[index].selected = true
    }
    localStorage.setItem('addons', JSON.stringify(store.addons))
  },
  clearLocalStorage (): void {
    localStorage.clear()
  },
  showThankYouPage (): void {
    store.showThankYouPage = true
  }

}

export default store
