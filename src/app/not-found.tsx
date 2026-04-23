import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[var(--text-primary)] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
            Page Not Found
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}