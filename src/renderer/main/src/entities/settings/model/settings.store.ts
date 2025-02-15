import { create } from 'zustand'
import { Settings, SettingsSchema } from '@shared/schemas'
import { loadSettings, updateSettings } from '../api/settings'

interface SettingsState {
  settings: Settings
  loadSettings: () => Promise<void>
  updateSettings: (settings: Partial<Settings>) => Promise<void>
}

export const useSettingsStore = create<SettingsState>((set) => ({
  settings: SettingsSchema.parse({}),

  loadSettings: async (): Promise<void> => {
    const settings = await loadSettings()
    set({ settings: SettingsSchema.parse(settings) })
  },

  updateSettings: async (newSettings): Promise<void> => {
    await updateSettings(newSettings)
    set((state) => ({
      settings: SettingsSchema.parse({ ...state.settings, ...newSettings })
    }))
  }
}))
