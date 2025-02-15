import { BrowserWindow, shell } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import icon from '../../../resources/icon.png?asset'

let splashWindow: BrowserWindow | null = null

export function createSplashWindow(): BrowserWindow {
  if (splashWindow) return splashWindow

  splashWindow = new BrowserWindow({
    width: 400,
    height: 250,
    frame: false,
    center: true,
    resizable: false,
    show: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  splashWindow.on('ready-to-show', () => {
    splashWindow?.show()
  })

  splashWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    splashWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/splash/index.html')
  } else {
    splashWindow.loadFile(join(__dirname, '../renderer/splash/index.html'))
  }

  splashWindow.on('closed', () => {
    splashWindow = null
  })

  return splashWindow
}

export function getSplashWindow(): BrowserWindow | null {
  return splashWindow
}
