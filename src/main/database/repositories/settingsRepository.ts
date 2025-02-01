import { getDatabaseInstance } from '..'
import { Settings, SettingsSchema } from '@shared/schemas'

export const getSettings = (): Settings => {
  const db = getDatabaseInstance()
  const rows = db.prepare('SELECT key, value FROM settings').all() as Array<{
    key: string
    value: string
  }>
  const settings: Record<string, string> = {}

  rows.forEach((row) => {
    settings[row.key] = row.value
  })

  return SettingsSchema.parse(settings)
}

export const setSettings = (settings: Partial<Settings>): void => {
  const db = getDatabaseInstance()
  const parsed = SettingsSchema.partial().parse(settings)
  const stmt = db.prepare('UPDATE settings SET value = ? WHERE key = ?')

  const transaction = db.transaction(() => {
    for (const key in parsed) {
      stmt.run(parsed[key as keyof Settings], key)
    }
  })

  transaction()
}
