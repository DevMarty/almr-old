import { createHashRouter } from 'react-router'
import { ROUTER_PATHS } from '@main-ui/shared/constants'
import { AppLoader } from './loaders/AppLoader'
import { AppLayout } from './layouts/AppLayout'

export const router = createHashRouter([
  {
    element: (
      <AppLoader>
        <AppLayout />
      </AppLoader>
    ),
    children: [
      {
        path: ROUTER_PATHS.DASHBOARD,
        element: <>DashboardPage</>
      }
    ]
  }
])
