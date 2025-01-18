import path from 'path'
import { app } from 'electron'

export function getDatabasePath(): string {
  return path.resolve(app.getPath('userData'), 'database.db')
}
