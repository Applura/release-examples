import { useContext } from 'react';
import { ResourceContext } from '../contexts/ResourceContext';

export default function useResource() {
  return useContext(ResourceContext);
}
