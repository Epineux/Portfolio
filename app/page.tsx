import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-28 p-4">
      <Button className="text-white bg-accent">Click</Button>
      <Button className="text-white bg-accent-hover">Click</Button>
      <Button className="text-white bg-secondary">Click</Button>
      <Button className="text-white bg-secondary-hover">Click</Button>
    </main>
  );
}
