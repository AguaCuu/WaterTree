import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import apiFetch from '~/app/libs/apiFetch'

export const useStore = create(
  persist(
    set => ({
      me: {},
      trees: {},
      events: {},
      doFetchMe: async () => {
        try {
          const response = await apiFetch({ method: 'GET', url: '/api/me' })
          set({ me: response })
        } catch (error) {
          console.error('Error fetching user:', error)
        }
      },
      doFetchTrees: async () => {
        try {
          const response = await apiFetch({ method: 'GET', url: '/api/tree' })
          set({ trees: response })
        } catch (error) {
          console.error('Error fetching group:', error)
        }
      },
      doFetchEvents: async () => {
        try {
          const response = await apiFetch({ method: 'GET', url: '/api/events' })
          set({ events: response })
        } catch (error) {
          console.error('Error fetching group:', error)
        }
      },
      logout: () => {
        localStorage.clear()
        set({ me: {}, trees: {}, events: {} })
      },
    }),
    {
      name: 'store', 
      whitelist: ['me', 'trees', 'events'], 
    }
  )
)