import { dialog } from 'electron'
import path from 'path'
import fs from 'fs'
import { getDatabasePath } from '@main/helpers'

export const initializeDatabase = async (): Promise<void> => {
  const dbPath = getDatabasePath()

  console.log('Database path:', dbPath)

  if (!fs.existsSync(dbPath)) {
    console.log('Database not found, creating a new one or loading an existing one')

    fs.mkdirSync(path.dirname(dbPath), { recursive: true })

    const { response } = await dialog.showMessageBox({
      type: 'question',
      buttons: ['Создать новую', 'Загрузить существующую'],
      cancelId: -1,
      title: 'База данных',
      message: 'База данных не найдена. Вы хотите создать новую или загрузить существующую?'
    })

    if (response === -1) {
      throw new Error('The user canceled the database selection.')
    }

    if (response === 0) {
      fs.writeFileSync(dbPath, '')
      console.log('New database created:', dbPath)
    } else if (response === 1) {
      const fileSelection = await dialog.showOpenDialog({
        title: 'Выберите файл базы данных',
        filters: [{ name: 'SQLite Database', extensions: ['db', 'sqlite'] }],
        properties: ['openFile']
      })

      if (fileSelection.canceled || fileSelection.filePaths.length === 0) {
        throw new Error('No database file selected.')
      }

      const selectedPath = fileSelection.filePaths[0]
      fs.copyFileSync(selectedPath, dbPath)
      console.log(`Database file copied from ${selectedPath} to ${dbPath}`)
    }
  } else {
    console.log('Using existing database:', dbPath)
  }
}
