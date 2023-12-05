import { ThemeToggle } from "@/common/components/ThemeToggle"
import { Hourglass } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { useFetchUserMeQuery, useLogoutMutation } from "@/features/auth/api/authApi"
import { Button } from "@/common/components/ui/button"

export const Navbar = () => {
  const location = useLocation()
  const { data, isLoading, isSuccess } = useFetchUserMeQuery()
  const [triggerLogout] = useLogoutMutation()

  const navBarLinks = [
    {
      label: "Dialogs",
      to: "/dialogs",
    },
    {
      label: "Profile",
      to: "/profile",
    },
  ]

  const activeLinkClasses = "transition-colors hover:text-foreground/80 text-foreground"
  const inactiveLinkClasses = "text-foreground/60 transition-colors hover:text-foreground/80"

  return (
    <header className="fixed top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="flex">
          <Link to="/" className="mr-8 flex items-center space-x-2">
            <Hourglass size={20} />
            <span className="inline-block font-bold">Social Network Pro</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navBarLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={location.pathname === link.to ? activeLinkClasses : inactiveLinkClasses}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {!isLoading &&
            isSuccess &&
            (data.resultCode === 0 ? (
              <>
                <Button variant="ghost" onClick={() => triggerLogout()} size="sm">
                  <small className="text-sm font-medium leading-none">Log out</small>
                </Button>
                <Button variant="ghost" asChild size="sm">
                  <Link to="/profile">
                    <small className="text-sm font-medium leading-none">{data.data.login}</small>
                  </Link>
                </Button>
              </>
            ) : (
              <Button variant="ghost" asChild size="sm">
                <Link to="/login" state={{ from: location }} replace>
                  <small className="text-sm font-medium leading-none">Log in</small>
                </Link>
              </Button>
            ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
