import type { Route } from './+types/_layoutn.__index';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function Home() {
  return (
    <div className='rounded-md bg-red-50 p-4'>
      <div className='flex'>
        <div className='shrink-0'></div>
        <div className='ml-3'>
          <h3 className='text-sm font-medium text-red-800'>There were 2 errors with your submission</h3>
          <div className='mt-2 text-sm text-red-700'>
            <ul role='list' className='list-disc space-y-1 pl-5'>
              <li>Your password must be at least 8 characters</li>
              <li>Your password must include at least one pro wrestling finishing move</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
