import { Logo } from './Logo'
import { Unit} from './Unit';

export function Header() {
    return (
        <div className="flex items-center justify-between">
            <Logo />
            <Unit />
        </div>
    )
}