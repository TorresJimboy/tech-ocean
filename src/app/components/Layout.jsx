import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { ThemeProvider } from './ThemeProvider';
import { Toaster } from 'sonner';

export function Layout() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </ThemeProvider>
  );
}