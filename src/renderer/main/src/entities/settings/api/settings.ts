import { Settings } from '@shared/schemas'

export const loadSettings = async (): Promise<Settings> => {
  return await window.api.settings.get()
}

export const updateSettings = async (settings: Partial<Settings>): Promise<void> => {
  await window.api.settings.set(settings)
}
