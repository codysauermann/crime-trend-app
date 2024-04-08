import Link from 'next/link'
import { Button } from './ui/button'

type Props = {previous: string, next: string};

const NavButtons: React.FC<Props> = ({ previous, next }) => {
  return (
    <div className="flex flex-row items-center justify-between p-9">
        <Button asChild>
          <Link href={previous}>
            Previous
          </Link>
        </Button>
        <Button asChild>
        <Link href={next}>
            Next
          </Link>
        </Button>
      </div>
  )
}

export default NavButtons