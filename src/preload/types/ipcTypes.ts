import { Settings } from '@shared/schemas'

export type IpcHandlers = {
  'settings:get': () => Promise<Settings>
  'settings:set': (settings: Partial<Settings>) => Promise<void>
}
