import { apiType } from '@preload/types/apiTypes'
import { appAPI } from './app'
import { settingsAPI } from './settings'

export const api: apiType = {
  app: appAPI,
  settings: settingsAPI
}
