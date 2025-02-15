import { ipcMainOn } from '@main/helpers'
import { getMainWindow, getSplashWindow } from '@main/windows'

export const registerAppIpc = (): void => {
  ipcMainOn('app:setTitleBarColors', (_, ...args) => {
    const [bgColor, fontColor] = args

    if (process.platform !== 'darwin') {
      getMainWindow()?.setTitleBarOverlay({
        color: bgColor,
        symbolColor: fontColor
      })
    }
  })

  ipcMainOn('app:showMainWindow', () => {
    getMainWindow()?.show()
    getSplashWindow()?.close()
  })
}
