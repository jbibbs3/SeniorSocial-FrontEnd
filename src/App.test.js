import { render, screen } from '@testing-library/react';
import App from './App';
import SideBar from './components/Sidebar/Sidebar';

xtest('renders learn react link', () => {
  render(<SideBar />);
  // const linkElement = screen.getByText(/learn react/i);
  const iconElement = screen.getByRole('icon', { name: /profile/i });
        screen.debug()
  expect(iconElement).toBeInTheDocument();
});
