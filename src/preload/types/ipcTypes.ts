import { Settings } from '@shared/schemas'

export type IpcHandlers = {
  'app:showMainWindow': () => void
  'app:setTitleBarColors': (bgColor: string, fontColor: string) => void

  'settings:get': () => Promise<Settings>
  'settings:set': (settings: Partial<Settings>) => Promise<void>
}
