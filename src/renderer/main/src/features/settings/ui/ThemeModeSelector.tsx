import React from 'react'
import { useSettingsStore } from '@main-ui/entities/settings'
import { SettingsSchema } from '@shared/schemas'

const themeModes = (
  SettingsSchema.shape.themeMode._def.innerType as unknown as { options: readonly string[] }
).options

export const ThemeModeSelector = (): React.JSX.Element => {
  const theme = useSettingsStore((state) => state.settings.themeMode)
  const setTheme = useSettingsStore((state) => state.updateSettings)

  return (
    <select
      value={theme}
      onChange={async (e) => {
        const validated = SettingsSchema.shape.themeMode.safeParse(e.target.value)
        if (validated.success) {
          await setTheme({ themeMode: validated.data })
        } else {
          console.error('Invalid theme value:', e.target.value)
        }
      }}
    >
      {themeModes.map((mode) => (
        <option key={mode} value={mode}>
          {mode.charAt(0).toUpperCase() + mode.slice(1)}
        </option>
      ))}
    </select>
  )
}
