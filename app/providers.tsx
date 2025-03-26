import { ThemeProvider } from "./theme-provider";
import { toast, Toaster } from 'sonner';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster/>
      </ThemeProvider>
    </>
  );
};
export default Providers;
