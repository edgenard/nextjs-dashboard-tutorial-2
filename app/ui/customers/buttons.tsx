import Link from 'next/link';
import { PlusIcon, PencilIcon } from '@heroicons/react/24/outline';

export function CreateCustomer() {
  return (
    <Link
      href="/dashboard/customers/create"
      className="m-1.5 flex h-10  place-content-center items-center  rounded-lg bg-blue-600 px-4 text-center text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Customer</span>{' '}
      <PlusIcon className="h-5 md:ml-4 md:hidden" />
    </Link>
  );
}

export function UpdateCustomer({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/customers/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="h-5 place-content-center" />
    </Link>
  );
}
