import Welcome from '#/components/Welcome.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Welcome })
