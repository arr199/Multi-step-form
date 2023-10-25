import { proxy } from 'valtio'
import { STATES } from '../utils/API'

// STORE
const store = proxy({
  infoFormData: JSON.parse(localStorage.getItem('infoFormData') as string) ?? STATES.INITIAL_INFO_FORM_DATA,
  selectedPlan: JSON.parse(localStorage.getItem('selectedPlan') as string) ?? STATES.INITIAL_SELECTED_PLAN,
  billingPlan: JSON.parse(localStorage.getItem('billingPlan') as string) ?? STATES.INITIAL_BILLING_PLAN,
  addons: JSON.parse(localStorage.getItem('addons') as string) ?? STATES.INITIAL_SELECTED_ADDONS

})

// ACTIONS
export const actions = {
  // PERSONAL INFO PAGE
  setName (e: React.ChangeEvent) {
    store.infoFormData.name = (e.target as HTMLInputElement).value
  },
  setEmail (e: React.ChangeEvent) {
    store.infoFormData.email = (e.target as HTMLInputElement).value.trim()
  },
  setPhone (e: React.ChangeEvent) {
    store.infoFormData.phone = (e.target as HTMLInputElement).value.trim()
  },
  // BILLING PLAN
  setBillingPlan () {
    if (store.billingPlan === 'monthly') {
      store.billingPlan = 'yearly'
    } else {
      store.billingPlan = 'monthly'
    }
  },
  // SET SELECTED PLAN
  setPlan ({ name, price }: { name: string, price: number }) {
    store.selectedPlan.name = name
    store.selectedPlan.price = price
  },
  // SET ADDONS
  setAddons (index: number) {
    if (store.addons[index].selected === true) {
      store.addons[index].selected = false
    } else {
      store.addons[index].selected = true
    }
  }

}

export default store
