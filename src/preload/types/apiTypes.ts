import { IpcHandlers } from './ipcTypes'

export type settingsAPIType = {
  get: IpcHandlers['settings:get']
  set: IpcHandlers['settings:set']
}

export type apiType = {
  settings: settingsAPIType
}
