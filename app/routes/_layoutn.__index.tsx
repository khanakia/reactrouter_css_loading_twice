import type { Route } from './+types/_layout.__index';
import { Welcome } from '../welcome/welcome';
import { parseAsInteger, useQueryState } from 'nuqs';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export default function Home() {
  const [hello, setHello] = useQueryState('hello', { defaultValue: '' });
  const [count, setCount] = useQueryState('count', parseAsInteger.withDefault(0));
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
      <input value={hello} placeholder='Enter your name' onChange={(e) => setHello(e.target.value || null)} />
      <p>Hello, {hello || 'anonymous visitor'}!</p>
    </>
  );

  return <Welcome />;
}
