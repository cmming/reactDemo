import { ReactComponent as setup } from './setup.svg'

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./', false, /\.svg$/)
const iconMap = requireAll(req)

console.log(iconMap,setup)