import { Migration } from '../types'

export const settingsTable__000: Migration = {
  name: 'settingsTable__000',
  migration: (db) => {
    console.log(`Migration "${settingsTable__000.name}" has been executed`)

    db.exec(`
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );
    `)

    const stmt = db.prepare('INSERT INTO settings (key, value) VALUES(?, ?)')
    stmt.run('themeMode', 'system')
  }
}
