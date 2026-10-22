import { useParams } from 'react-router';

export default function Test() {
  const { id } = useParams();
  return <p>ID: {id}</p>;
}
