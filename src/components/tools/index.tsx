import { type FC } from 'react'
import { KPChartToolUI } from './KPChartToolUI'

// Register all tool UIs by rendering them
export const ToolUIRegistry: FC = () => {
  return (
    <>
      <KPChartToolUI />
    </>
  )
}

export { KPChartToolUI }
