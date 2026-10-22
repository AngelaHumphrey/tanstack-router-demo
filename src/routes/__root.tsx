import { Outlet, createRootRoute } from '@tanstack/react-router'

import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import '../styles.css'
import Nav from '#/components/Nav.tsx';
import FallBack from '#/components/FallBack.tsx';

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: FallBack,
})

function RootComponent() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
        <Nav />
        <Outlet />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'TanStack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </main>
    </>
  )
}
