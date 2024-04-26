import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/store';
import { setTheme as setThemeAction } from '../store/themeSlice';
import { Theme } from '../types/theme';

export const useColorTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useAppSelector((state) => state.theme);

  const setTheme = (newTheme: Theme) => {
    dispatch(setThemeAction({ theme: newTheme }));
  };

  return [theme, setTheme] as [Theme, (theme: Theme) => void];
};
