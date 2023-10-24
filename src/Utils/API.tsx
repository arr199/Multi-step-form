// CONSTANTS
const API = {
  BILLING_PLANS: [
    { name: 'arcade', price: 9, icon: '/images/icon-arcade.svg' },
    { name: 'advance', price: 12, icon: '/images/icon-advanced.svg' },
    { name: 'pro', price: 15, icon: '/images/icon-pro.svg' }
  ],
  ADDONS: [
    { name: 'online service', description: 'access to multiplayer games', price: 1 },
    { name: 'larger storage', description: 'extra 1TB of cloud save', price: 2 },
    { name: 'customizable profile', description: 'custom theme on your profile', price: 2 }

  ]
}

// INITIAL STATES
export const STATES = {
  INITIAL_INFO_FORM_DATA: { name: '', email: '', phone: '' },
  INITIAL_BILLING_PLAN: 'monthly',
  INITIAL_SELECTED_PLAN: { name: '', price: 0 },
  INITIAL_SELECTED_ADDONS: [...API.ADDONS].map(e => ({ ...e, selected: false }))

}

export default API
