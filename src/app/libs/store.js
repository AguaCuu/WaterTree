import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import apiFetch from '~/app/libs/apiFetch'

export const useStore = create(
  persist(
    (set, state) => ({
      me: {},
      trees: {},
      events: {},
      doFetchMe: async () => {
        try {
          const response = await apiFetch({ method: 'GET', url: '/api/me' })
          set({ user: response })
        } catch (error) {
          console.error('Error fetching user:', error)
        }
      },
      doFetchTrees: async () => {
        try {
          const response = await apiFetch({ method: 'GET', url: '/api/me' })
          set({ group: response })
        } catch (error) {
          console.error('Error fetching group:', error)
        }
      },
      doFetchEvents: async () => {
        try {
          const response = await apiFetch({ method: 'GET', url: '/api/events' })
          set({ group: response })
        } catch (error) {
          console.error('Error fetching group:', error)
        }
      },
      selectTrees: async id => {
        const { trees } = state()
        return trees[id]
      },
      selectEvents: async id => {
        const { events } = state()
        return events[id]
      },
      logout: () => {
        localStorage.clear()
        set({ user: {}, group: {} })
      },
    }),
    {
      name: 'store', 
      whitelist: ['me', 'trees', 'events'], 
    }
  )
)