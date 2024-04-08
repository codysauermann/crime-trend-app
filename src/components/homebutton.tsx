import Link from 'next/link'
import { Button } from './ui/button'

function HomeButton() {
  return (
    <div className="hidden lg:flex fixed left-9 top-9">
        <Button asChild>
          <Link href="/">
            Home
          </Link>
        </Button>
      </div>
  )
}

export default HomeButton