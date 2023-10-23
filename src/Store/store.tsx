import { proxy } from 'valtio'

const store = proxy({
  infoFormData: { name: '', email: '', phone: '' }

})

export const actions = {
  // PERSONAL INFO PAGE
  setName (e: React.ChangeEvent) {
    store.infoFormData.name = (e.target as HTMLInputElement).value
  },
  setEmail (e: React.ChangeEvent) {
    store.infoFormData.email = (e.target as HTMLInputElement).value
  },
  setPhone (e: React.ChangeEvent) {
    store.infoFormData.phone = (e.target as HTMLInputElement).value
  }

}

export default store
