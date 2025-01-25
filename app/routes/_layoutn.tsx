import { Outlet } from 'react-router';
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7';
export default function Layout() {
  return (
    <div>
      <NuqsAdapter>
        <Outlet />
      </NuqsAdapter>
    </div>
  );
}
