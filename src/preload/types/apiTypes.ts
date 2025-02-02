import { IpcHandlers } from './ipcTypes'

export type appAPIType = {
  setTitleBarColors: IpcHandlers['app:setTitleBarColors']
}

export type settingsAPIType = {
  get: IpcHandlers['settings:get']
  set: IpcHandlers['settings:set']
}

export type apiType = {
  app: appAPIType
  settings: settingsAPIType
}
