import { registerAppIpc } from './appIPC'
import { registerSettingsIpc } from './settingsIPC'

export const registerIpcHandlers = (): void => {
  registerAppIpc()
  registerSettingsIpc()
}
