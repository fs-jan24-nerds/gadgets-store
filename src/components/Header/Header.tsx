import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between h-16 border-b-2 border-elements">
      <Navigation />
    </header>
  );
};
