import { ipcMainOn } from '@main/helpers'
import { getMainWindow } from '@main/windows'

export const registerAppIpc = (): void => {
  ipcMainOn('app:setTitleBarColors', (_, ...args) => {
    const [bgColor, fontColor] = args

    getMainWindow()?.setTitleBarOverlay({
      color: bgColor,
      symbolColor: fontColor
    })
  })
}
