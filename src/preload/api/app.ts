import { appAPIType } from '@preload/types/apiTypes'
import { IpcHandlers } from '@preload/types/ipcTypes'
import { ipcRendererSend } from '@preload/helpers'

export const appAPI: appAPIType = {
  setTitleBarColors: (
    bgColor: Parameters<IpcHandlers['app:setTitleBarColors']>[0],
    fontColor: Parameters<IpcHandlers['app:setTitleBarColors']>[1]
  ): ReturnType<IpcHandlers['app:setTitleBarColors']> => {
    return ipcRendererSend('app:setTitleBarColors', bgColor, fontColor)
  }
}
