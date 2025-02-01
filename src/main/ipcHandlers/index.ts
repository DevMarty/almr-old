import { registerSettingsIpc } from './settingsIPC'

export const registerIpcHandlers = (): void => {
  registerSettingsIpc()
}
