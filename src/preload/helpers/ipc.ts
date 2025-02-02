import { ipcRenderer } from 'electron'
import { IpcHandlers } from '@preload/types/ipcTypes'

export const ipcRendererInvoke = <K extends keyof IpcHandlers>(
  channel: K,
  ...args: Parameters<IpcHandlers[K]>
): Promise<Awaited<ReturnType<IpcHandlers[K]>>> => {
  return ipcRenderer.invoke(channel, ...args)
}

export const ipcRendererSend = <K extends keyof IpcHandlers>(
  channel: K,
  ...args: Parameters<IpcHandlers[K]>
): void => {
  ipcRenderer.send(channel, ...args)
}
