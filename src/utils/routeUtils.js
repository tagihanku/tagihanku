import { useLocation } from 'react-router-dom'
import routes from './../routes'

export function getPreviousRoute() {
    const { pathname } = useLocation()
    const previous = routes.findIndex((obj) => obj.path === pathname) - 1

    return routes.indexOf(previous) === -1 ? routes[previous] : null
}

export function getNextRoute() {
    const { pathname } = useLocation()
    const next = routes.findIndex((obj) => obj.path === pathname) + 1

    return routes.indexOf(next) === -1 ? routes[next] : null
}
