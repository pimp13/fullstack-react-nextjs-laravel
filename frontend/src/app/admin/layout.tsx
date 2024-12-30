import AdminNavbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section>
        <AdminNavbar />
      </section>
      <section className="container mx-auto md:px-5 mt-32">
        {children}
      </section>
    </>
  );
}
