import { useColorTheme } from '../../hooks/useColorTheme';
import { Theme } from '../../types/theme';

import './ThemeSwitcherButton.css';

const handleThemeToggle = (theme: Theme, setTheme: (theme: Theme) => void) => {
  if (theme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
};

export const ThemeSwitcherButton = () => {
  const [theme, setTheme] = useColorTheme();

  // return <button onClick={() => handleThemeToggle(theme, setTheme)}>{theme === 'light' ? 'Dark' : 'Light'}</button>;
  return (
    <label className="toggle-switch mx-6">
      <input type="checkbox" onChange={() => handleThemeToggle(theme, setTheme)} />
      <div className="toggle-switch-background">
        <div className="toggle-switch-handle"></div>
      </div>
    </label>
  );
};
