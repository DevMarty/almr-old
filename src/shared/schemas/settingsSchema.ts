import { z } from 'zod'

export const SettingsSchema = z.object({
  themeMode: z.enum(['light', 'dark', 'system']).default('light')
})

export type Settings = z.infer<typeof SettingsSchema>
