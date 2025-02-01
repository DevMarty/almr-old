import { ipcMain } from 'electron'
import { IpcHandlers } from '@preload/types/ipcTypes'

export const ipcMainHandle = <K extends keyof IpcHandlers>(
  channel: K,
  handler: (
    ...args: Parameters<IpcHandlers[K]>
  ) => Awaited<ReturnType<IpcHandlers[K]>> | Promise<Awaited<ReturnType<IpcHandlers[K]>>>
): void => {
  ipcMain.handle(channel, (_, ...args: Parameters<IpcHandlers[K]>) => {
    return handler(...args)
  })
}
