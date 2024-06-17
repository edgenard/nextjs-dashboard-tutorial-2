import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import EditForm from '@/app/ui/customers/edit-form';
import { getCustomer } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const customer = await getCustomer(id);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditForm customer={customer} />
    </main>
  );
}
