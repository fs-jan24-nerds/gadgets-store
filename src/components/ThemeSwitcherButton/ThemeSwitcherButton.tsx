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

  return (
    <label className="toggle-switch mx-6">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={() => handleThemeToggle(theme, setTheme)}
      />
      <div className="toggle-switch-background">
        <div className="toggle-switch-handle"></div>
      </div>
    </label>
  );
};
