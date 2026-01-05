import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center">
        <h1 className="heading-1 mb-6">404</h1>
        <p className="text-body mb-8">Page not found</p>
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  )
}
