import { ipcMainHandle } from '@main/helpers'
import { settingRepository } from '@main/database/repositories'

export const registerSettingsIpc = (): void => {
  ipcMainHandle('settings:get', (...args) => {
    return settingRepository.getSettings(...args)
  })

  ipcMainHandle('settings:set', (...args) => {
    return settingRepository.setSettings(...args)
  })
}
