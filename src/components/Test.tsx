import { getRouteApi } from "@tanstack/react-router";

export default function Test() {
  const routeApi = getRouteApi('/test/$id')
  const { id } = routeApi.useParams();
  // const {page} = routeApi.useSearch();

  return <p>ID: {id} 
   {/* and page {page} */}
   </p>
}
