import Test from '#/components/Test.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/$id')({
  // component: Test,
  component: RouteComponent,
  // validateSearch: (search: Record<string, unknown>): {page: number} => {
  //   return {
  //     page: Number(search.page) || 1,
  //   }
  // }
})


function RouteComponent() {
  const { id } = Route.useParams();
  // const { page } = Route.useSearch();
  
  return <p>ID: {id}
   {/* and page {page} */}
   </p>
}
