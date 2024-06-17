import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

interface SearchParams {
  query?: string;
  page?: string;
}

export default async function Page(
  {
    searchParams,
  }: {
    searchParams?: SearchParams;
  } = { searchParams: { query: '', page: '1' } }, // TODO: this apparently does nothing
) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const customers = await fetchFilteredCustomers(query, currentPage);
  return <Table customers={customers} />;
}
