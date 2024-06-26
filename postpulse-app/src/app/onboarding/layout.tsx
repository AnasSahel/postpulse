export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header>
        <div className="absolute top-8 left-8 text-2xl font-bold">
          {process.env.APP_COMPANY_NAME}
        </div>
      </header>
      <main className="w-full max-w-md p-8">{children}</main>
      <footer className="absolute bottom-8 text-sm text-gray-500">
        © {new Date().getFullYear()} {process.env.APP_COMPANY_NAME}, Inc.
      </footer>
    </div>
  );
}
