import { proxy } from 'valtio'
import { STATES } from '../Utils/API'

// STORE
const store = proxy({
  infoFormData: STATES.INITIAL_INFO_FORM_DATA,
  selectedPlan: STATES.INITIAL_SELECTED_PLAN,
  billingPlan: STATES.INITIAL_BILLING_PLAN,
  addons: STATES.INITIAL_SELECTED_ADDONS

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
    store.addons[index].selected = !store.addons[index].selected
  }

}

export default store
