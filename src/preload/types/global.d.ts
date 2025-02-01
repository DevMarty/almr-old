import { ElectronAPI } from '@electron-toolkit/preload'
import { apiType } from './apiTypes'

declare global {
  interface Window {
    electron: ElectronAPI
    api: apiType
  }
}
