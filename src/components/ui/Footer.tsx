export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4 fixed bottom-0 left-0 right-0">
      &copy; {new Date().getFullYear()} MyStore. All rights reserved.
    </footer>
  );
}
