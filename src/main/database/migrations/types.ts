import Database from 'better-sqlite3'

export interface Migration {
  name: string
  migration: (db: InstanceType<typeof Database>) => void
}
