import { QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

const getQueryClient = cache(() => new QueryClient());

export default getQueryClient;
//TODO not yet used with component
