export const metadata = {
  title: "LyftrAi ? Minimal Logo",
  description: "Minimal LyftrAi logo showcase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
