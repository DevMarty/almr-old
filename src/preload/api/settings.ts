import { settingsAPIType } from '@preload/types/apiTypes'
import { IpcHandlers } from '@preload/types/ipcTypes'
import { ipcRendererInvoke } from '@preload/helpers'

export const settingsAPI: settingsAPIType = {
  get: (): ReturnType<IpcHandlers['settings:get']> => {
    return ipcRendererInvoke('settings:get')
  },

  set: (
    settings: Parameters<IpcHandlers['settings:set']>[0]
  ): ReturnType<IpcHandlers['settings:set']> => {
    return ipcRendererInvoke('settings:set', settings)
  }
}
