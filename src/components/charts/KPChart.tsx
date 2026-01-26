/**
 * KPChart - North/South Indian Style Vedic/KP Astrology Chart
 *
 * A modern, animated, configurable chart component that renders
 * planetary positions in traditional Indian formats.
 *
 * Supports:
 * - North Indian (diamond layout) - default
 * - South Indian (square grid layout)
 */

import { useState, useMemo, type FC } from 'react'
import { cn } from '@/lib/utils'

// ============================================
// Types
// ============================================

export type ChartStyle = 'north' | 'south'

export interface PlanetData {
  planet: string
  longitude: number
  isRetrograde: boolean
  sign: number
  signName: string
  nakshatra: number
  nakshatraName: string
  house: number
  lords: {
    sign: string
    star: string
    sub: string
    subSub?: string
  }
}

export interface CuspData {
  house: number
  longitude: number
  sign: number
  signName: string
  lords: {
    sign: string
    star: string
    sub: string
    subSub?: string
  }
}

export interface ChartData {
  planets: PlanetData[]
  cusps: CuspData[]
  ascendantSign: number
  moonSign: number
  sunSign: number
  birthData?: {
    dob: string
    lat: number
    lon: number
    place?: string
  }
}

export interface KPChartConfig {
  /** Chart style: 'north' (diamond) or 'south' (square) */
  style?: ChartStyle
  /** Chart size in pixels */
  size?: number
  /** Show house numbers */
  showHouseNumbers?: boolean
  /** Show sign names */
  showSignNames?: boolean
  /** Animation duration in ms */
  animationDuration?: number
  /** Enable hover effects */
  enableHover?: boolean
  /** Callback when planet is clicked */
  onPlanetClick?: (planet: PlanetData) => void
  /** Callback when house is clicked */
  onHouseClick?: (house: number, planets: PlanetData[]) => void
  /** Custom class name */
  className?: string
}

// ============================================
// Constants
// ============================================

const PLANET_SYMBOLS: Record<string, string> = {
  SUN: 'Su',
  MOON: 'Mo',
  MARS: 'Ma',
  MERCURY: 'Me',
  JUPITER: 'Ju',
  VENUS: 'Ve',
  SATURN: 'Sa',
  RAHU: 'Ra',
  KETU: 'Ke',
  URANUS: 'Ur',
  NEPTUNE: 'Ne',
  PLUTO: 'Pl',
}

const PLANET_COLORS: Record<string, string> = {
  SUN: 'var(--gold-500)',
  MOON: 'var(--stone-400)',
  MARS: 'var(--error)',
  MERCURY: 'var(--success)',
  JUPITER: 'var(--gold-400)',
  VENUS: 'var(--info)',
  SATURN: 'var(--stone-600)',
  RAHU: 'var(--stone-500)',
  KETU: 'var(--stone-500)',
  URANUS: 'var(--info)',
  NEPTUNE: 'var(--info)',
  PLUTO: 'var(--stone-700)',
}

const SIGN_NAMES = [
  'Ari', 'Tau', 'Gem', 'Can', 'Leo', 'Vir',
  'Lib', 'Sco', 'Sag', 'Cap', 'Aqu', 'Pis'
]

// South Indian: Signs are fixed, houses rotate
const SOUTH_INDIAN_SIGN_POSITIONS: Record<number, { row: number; col: number }> = {
  12: { row: 0, col: 0 }, 1: { row: 0, col: 1 }, 2: { row: 0, col: 2 }, 3: { row: 0, col: 3 },
  11: { row: 1, col: 0 }, 4: { row: 1, col: 3 },
  10: { row: 2, col: 0 }, 5: { row: 2, col: 3 },
  9: { row: 3, col: 0 }, 8: { row: 3, col: 1 }, 7: { row: 3, col: 2 }, 6: { row: 3, col: 3 },
}

// ============================================
// Planet Badge Component
// ============================================

interface PlanetBadgeProps {
  planet: PlanetData
  compact?: boolean
  onClick?: () => void
}

const PlanetBadge: FC<PlanetBadgeProps> = ({ planet, compact, onClick }) => {
  const symbol = PLANET_SYMBOLS[planet.planet] || planet.planet.slice(0, 2)
  const color = PLANET_COLORS[planet.planet] || 'var(--foreground)'

  return (
    <button
      className={cn(
        'kp-chart-planet relative rounded font-bold',
        'transition-transform duration-150',
        'hover:scale-110',
        'focus:outline-none focus:ring-2 focus:ring-gold-400/50',
        compact ? 'px-1 py-0.5 text-[10px]' : 'px-1.5 py-0.5 text-xs'
      )}
      style={{
        color,
        backgroundColor: `color-mix(in oklch, ${color} 15%, transparent)`,
      }}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
      title={`${planet.planet}${planet.isRetrograde ? ' (R)' : ''} - ${planet.signName} ${planet.longitude.toFixed(2)}°`}
    >
      {symbol}
      {planet.isRetrograde && (
        <span className="absolute -top-0.5 -right-0.5 text-[6px] text-error font-bold">R</span>
      )}
    </button>
  )
}

// ============================================
// North Indian Chart
// ============================================

const NorthIndianChart: FC<{
  data: ChartData
  config: Required<Pick<KPChartConfig, 'size' | 'showHouseNumbers' | 'showSignNames' | 'enableHover'>>
  onPlanetClick?: (planet: PlanetData) => void
  onHouseClick?: (house: number, planets: PlanetData[]) => void
}> = ({ data, config, onPlanetClick, onHouseClick }) => {
  const { size, showHouseNumbers, showSignNames, enableHover } = config
  const [hoveredHouse, setHoveredHouse] = useState<number | null>(null)

  // Group planets by house
  const planetsByHouse = useMemo(() => {
    const grouped: Record<number, PlanetData[]> = {}
    for (let i = 1; i <= 12; i++) grouped[i] = []
    data.planets.forEach((planet) => {
      if (planet.house >= 1 && planet.house <= 12) {
        grouped[planet.house].push(planet)
      }
    })
    return grouped
  }, [data.planets])

  // Get sign for each house based on ascendant
  const getSignForHouse = (house: number): number => {
    let sign = data.ascendantSign + house - 1
    if (sign > 12) sign -= 12
    return sign
  }

  return (
    <svg
      viewBox="0 0 300 300"
      width={size}
      height={size}
      className="kp-chart-north"
    >
      {/* Background */}
      <rect x="0" y="0" width="300" height="300" className="fill-background" rx="8" />

      {/* Outer border */}
      <rect
        x="2" y="2" width="296" height="296"
        className="fill-none stroke-stone-300 dark:stroke-stone-600"
        strokeWidth="2"
        rx="6"
      />

      {/* Inner diamond */}
      <polygon
        points="150,25 275,150 150,275 25,150"
        className="fill-none stroke-stone-300 dark:stroke-stone-600"
        strokeWidth="1.5"
      />

      {/* Center diamond */}
      <polygon
        points="150,100 200,150 150,200 100,150"
        className="fill-none stroke-stone-300 dark:stroke-stone-600"
        strokeWidth="1"
      />

      {/* House dividers */}
      {/* Horizontal line through center */}
      <line x1="25" y1="150" x2="275" y2="150" className="stroke-stone-300 dark:stroke-stone-600" strokeWidth="1" />
      {/* Vertical line through center */}
      <line x1="150" y1="25" x2="150" y2="275" className="stroke-stone-300 dark:stroke-stone-600" strokeWidth="1" />
      {/* Diagonal lines */}
      <line x1="2" y1="2" x2="100" y2="150" className="stroke-stone-300 dark:stroke-stone-600" strokeWidth="1" />
      <line x1="298" y1="2" x2="200" y2="150" className="stroke-stone-300 dark:stroke-stone-600" strokeWidth="1" />
      <line x1="2" y1="298" x2="100" y2="150" className="stroke-stone-300 dark:stroke-stone-600" strokeWidth="1" />
      <line x1="298" y1="298" x2="200" y2="150" className="stroke-stone-300 dark:stroke-stone-600" strokeWidth="1" />

      {/* House regions with hover detection */}
      {[
        { house: 1, path: 'M 100,150 L 150,100 L 200,150 Z', cx: 150, cy: 130 },
        { house: 2, path: 'M 150,25 L 200,150 L 150,100 Z', cx: 170, cy: 85 },
        { house: 3, path: 'M 150,25 L 298,2 L 200,150 Z', cx: 215, cy: 55 },
        { house: 4, path: 'M 200,150 L 298,2 L 298,150 Z', cx: 265, cy: 100 },
        { house: 5, path: 'M 200,150 L 298,150 L 298,298 Z', cx: 265, cy: 200 },
        { house: 6, path: 'M 200,150 L 298,298 L 150,275 Z', cx: 215, cy: 240 },
        { house: 7, path: 'M 100,150 L 200,150 L 150,200 Z', cx: 150, cy: 170 },
        { house: 8, path: 'M 100,150 L 150,200 L 150,275 Z', cx: 130, cy: 210 },
        { house: 9, path: 'M 2,298 L 150,275 L 100,150 Z', cx: 80, cy: 240 },
        { house: 10, path: 'M 2,150 L 100,150 L 2,298 Z', cx: 35, cy: 200 },
        { house: 11, path: 'M 2,2 L 100,150 L 2,150 Z', cx: 35, cy: 100 },
        { house: 12, path: 'M 2,2 L 150,25 L 150,100 L 100,150 Z', cx: 80, cy: 60 },
      ].map(({ house, path, cx, cy }) => {
        const sign = getSignForHouse(house)
        const planets = planetsByHouse[house] || []
        const isAscendant = house === 1
        const isHovered = hoveredHouse === house

        return (
          <g
            key={house}
            className={cn(
              'transition-colors duration-200',
              enableHover && 'cursor-pointer'
            )}
            onMouseEnter={() => enableHover && setHoveredHouse(house)}
            onMouseLeave={() => setHoveredHouse(null)}
            onClick={() => onHouseClick?.(house, planets)}
          >
            {/* Hover highlight */}
            <path
              d={path}
              className={cn(
                'transition-all duration-200',
                isHovered ? 'fill-stone-100 dark:fill-stone-800' : 'fill-transparent',
                isAscendant && !isHovered && 'fill-gold-50 dark:fill-gold-900/20'
              )}
            />

            {/* Ascendant marker */}
            {isAscendant && (
              <circle
                cx={150}
                cy={115}
                r="4"
                className="fill-gold-400"
              />
            )}

            {/* House number */}
            {showHouseNumbers && (
              <text
                x={cx}
                y={cy - (planets.length > 0 ? 12 : 0)}
                textAnchor="middle"
                dominantBaseline="middle"
                className={cn(
                  'text-[10px] font-bold pointer-events-none',
                  isAscendant ? 'fill-gold-500' : 'fill-stone-400 dark:fill-stone-500'
                )}
              >
                {house}
              </text>
            )}

            {/* Sign name */}
            {showSignNames && (
              <text
                x={cx}
                y={cy + (planets.length > 0 ? 18 : 10)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[8px] fill-stone-400 dark:fill-stone-500 pointer-events-none"
              >
                {SIGN_NAMES[sign - 1]}
              </text>
            )}
          </g>
        )
      })}

      {/* Planets */}
      {[
        { house: 1, cx: 150, cy: 135 },
        { house: 2, cx: 170, cy: 90 },
        { house: 3, cx: 220, cy: 50 },
        { house: 4, cx: 260, cy: 105 },
        { house: 5, cx: 260, cy: 195 },
        { house: 6, cx: 220, cy: 245 },
        { house: 7, cx: 150, cy: 165 },
        { house: 8, cx: 130, cy: 215 },
        { house: 9, cx: 80, cy: 245 },
        { house: 10, cx: 40, cy: 195 },
        { house: 11, cx: 40, cy: 105 },
        { house: 12, cx: 80, cy: 55 },
      ].map(({ house, cx, cy }) => {
        const planets = planetsByHouse[house] || []
        if (planets.length === 0) return null

        return (
          <foreignObject
            key={`planets-${house}`}
            x={cx - 30}
            y={cy - 10}
            width={60}
            height={30}
            className="overflow-visible"
          >
            <div className="flex flex-wrap items-center justify-center gap-0.5">
              {planets.map((planet) => (
                <PlanetBadge
                  key={planet.planet}
                  planet={planet}
                  compact
                  onClick={() => onPlanetClick?.(planet)}
                />
              ))}
            </div>
          </foreignObject>
        )
      })}

      {/* Center info */}
      <foreignObject x="100" y="140" width="100" height="30">
        <div className="text-center">
          <div className="text-[8px] text-stone-400 dark:text-stone-500 truncate px-1">
            {data.birthData?.place || 'Chart'}
          </div>
        </div>
      </foreignObject>
    </svg>
  )
}

// ============================================
// South Indian Chart
// ============================================

const SouthIndianChart: FC<{
  data: ChartData
  config: Required<Pick<KPChartConfig, 'size' | 'showHouseNumbers' | 'showSignNames' | 'enableHover'>>
  onPlanetClick?: (planet: PlanetData) => void
  onHouseClick?: (house: number, planets: PlanetData[]) => void
}> = ({ data, config, onPlanetClick, onHouseClick }) => {
  const { size, showHouseNumbers, showSignNames, enableHover } = config
  const [hoveredSign, setHoveredSign] = useState<number | null>(null)

  // Group planets by sign (South Indian uses sign-based layout)
  const planetsBySign = useMemo(() => {
    const grouped: Record<number, PlanetData[]> = {}
    for (let i = 1; i <= 12; i++) grouped[i] = []
    data.planets.forEach((planet) => {
      if (planet.sign >= 1 && planet.sign <= 12) {
        grouped[planet.sign].push(planet)
      }
    })
    return grouped
  }, [data.planets])

  // Calculate house for sign based on ascendant
  const getHouseForSign = (sign: number): number => {
    let house = sign - data.ascendantSign + 1
    if (house <= 0) house += 12
    return house
  }

  const cellSize = size / 4

  return (
    <div
      className="kp-chart-south grid grid-cols-4 grid-rows-4 bg-background rounded-lg overflow-hidden shadow-lg border-2 border-stone-300 dark:border-stone-600"
      style={{ width: size, height: size }}
    >
      {/* Render all 16 cells, outer ring has content, inner 4 are empty/center */}
      {Array.from({ length: 16 }, (_, i) => {
        const row = Math.floor(i / 4)
        const col = i % 4

        // Check if this is a center cell
        const isCenter = (row === 1 || row === 2) && (col === 1 || col === 2)

        if (isCenter) {
          // Center cells form the middle area
          if (row === 1 && col === 1) {
            // Top-left of center - render chart info
            return (
              <div
                key={i}
                className="col-span-2 row-span-2 flex items-center justify-center border border-stone-300 dark:border-stone-600"
                style={{ gridColumn: '2 / 4', gridRow: '2 / 4' }}
              >
                <div className="text-center p-2">
                  <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                    {data.birthData?.place || 'KP Chart'}
                  </div>
                  {data.birthData?.dob && (
                    <div className="text-[10px] text-stone-400 dark:text-stone-500 mt-1">
                      {new Date(data.birthData.dob).toLocaleDateString()}
                    </div>
                  )}
                </div>
              </div>
            )
          }
          return null // Other center cells are part of the colspan
        }

        // Find which sign belongs to this position
        const sign = Object.entries(SOUTH_INDIAN_SIGN_POSITIONS).find(
          ([, pos]) => pos.row === row && pos.col === col
        )?.[0]

        if (!sign) return <div key={i} />

        const signNum = parseInt(sign)
        const house = getHouseForSign(signNum)
        const planets = planetsBySign[signNum] || []
        const isAscendant = house === 1
        const isHovered = hoveredSign === signNum

        return (
          <div
            key={i}
            className={cn(
              'kp-chart-house relative flex flex-col items-center justify-center',
              'border border-stone-300 dark:border-stone-600',
              'transition-colors duration-200',
              enableHover && 'cursor-pointer hover:bg-stone-100 dark:hover:bg-stone-800',
              isAscendant && 'bg-gold-50 dark:bg-gold-900/20',
              isHovered && 'z-10 bg-stone-100 dark:bg-stone-800'
            )}
            style={{
              width: cellSize,
              height: cellSize,
            }}
            onMouseEnter={() => enableHover && setHoveredSign(signNum)}
            onMouseLeave={() => setHoveredSign(null)}
            onClick={() => onHouseClick?.(house, planets)}
          >
            {/* Sign name (top-left) */}
            {showSignNames && (
              <span className="absolute top-1 left-1 text-[10px] text-stone-400 dark:text-stone-500 font-medium">
                {SIGN_NAMES[signNum - 1]}
              </span>
            )}

            {/* House number (top-right) */}
            {showHouseNumbers && (
              <span className={cn(
                'absolute top-1 right-1 text-[10px] font-bold',
                isAscendant ? 'text-gold-500' : 'text-stone-400 dark:text-stone-500'
              )}>
                {house}
              </span>
            )}

            {/* Ascendant marker */}
            {isAscendant && (
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[12px] border-r-[12px] border-t-gold-400 border-r-transparent" />
            )}

            {/* Planets */}
            <div className="flex flex-wrap items-center justify-center gap-0.5 p-1">
              {planets.map((planet) => (
                <PlanetBadge
                  key={planet.planet}
                  planet={planet}
                  compact={cellSize < 80}
                  onClick={() => onPlanetClick?.(planet)}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ============================================
// Main Component
// ============================================

export const KPChart: FC<{ data: ChartData; config?: KPChartConfig }> = ({
  data,
  config = {},
}) => {
  const {
    style = 'north',
    size = 320,
    showHouseNumbers = true,
    showSignNames = true,
    enableHover = true,
    onPlanetClick,
    onHouseClick,
    className,
  } = config

  const chartConfig = {
    size,
    showHouseNumbers,
    showSignNames,
    enableHover,
  }

  return (
    <div className={cn('kp-chart-container relative', className)}>
      {style === 'north' ? (
        <NorthIndianChart
          data={data}
          config={chartConfig}
          onPlanetClick={onPlanetClick}
          onHouseClick={onHouseClick}
        />
      ) : (
        <SouthIndianChart
          data={data}
          config={chartConfig}
          onPlanetClick={onPlanetClick}
          onHouseClick={onHouseClick}
        />
      )}
    </div>
  )
}

// ============================================
// Planet Details Panel
// ============================================

export interface PlanetDetailsPanelProps {
  planet: PlanetData | null
  onClose: () => void
  className?: string
}

export const PlanetDetailsPanel: FC<PlanetDetailsPanelProps> = ({
  planet,
  onClose,
  className,
}) => {
  if (!planet) return null

  const color = PLANET_COLORS[planet.planet] || 'var(--foreground)'

  return (
    <div
      className={cn(
        'kp-planet-details p-4 rounded-lg',
        'bg-stone-50 dark:bg-stone-900',
        'border border-stone-200 dark:border-stone-700',
        'shadow-lg',
        'animate-in fade-in slide-in-from-bottom-2 duration-200',
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold" style={{ color }}>
            {planet.planet}
            {planet.isRetrograde && <span className="text-error text-sm ml-1">(R)</span>}
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 text-lg"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-stone-500">Sign:</span>
          <span className="font-medium">{planet.signName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">Longitude:</span>
          <span className="font-medium">{planet.longitude.toFixed(4)}°</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">Nakshatra:</span>
          <span className="font-medium">{planet.nakshatraName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">House:</span>
          <span className="font-medium">{planet.house}</span>
        </div>

        {/* KP Significators */}
        <div className="mt-3 pt-3 border-t border-stone-200 dark:border-stone-700">
          <div className="text-xs text-stone-400 dark:text-stone-500 mb-2 font-medium uppercase tracking-wide">
            KP Significators
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-stone-500">Sign Lord:</span>
              <span className="ml-1 font-medium">{planet.lords.sign}</span>
            </div>
            <div>
              <span className="text-stone-500">Star Lord:</span>
              <span className="ml-1 font-medium">{planet.lords.star}</span>
            </div>
            <div>
              <span className="text-stone-500">Sub Lord:</span>
              <span className="ml-1 font-medium">{planet.lords.sub}</span>
            </div>
            {planet.lords.subSub && (
              <div>
                <span className="text-stone-500">Sub-Sub:</span>
                <span className="ml-1 font-medium">{planet.lords.subSub}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// Style Switcher Component
// ============================================

export interface ChartStyleSwitcherProps {
  value: ChartStyle
  onChange: (style: ChartStyle) => void
  className?: string
}

export const ChartStyleSwitcher: FC<ChartStyleSwitcherProps> = ({
  value,
  onChange,
  className,
}) => {
  return (
    <div className={cn('flex gap-1 p-1 rounded-lg bg-stone-100 dark:bg-stone-800', className)}>
      <button
        onClick={() => onChange('north')}
        className={cn(
          'px-3 py-1 rounded-md text-xs font-medium transition-all',
          value === 'north'
            ? 'bg-gold-400 text-stone-900 shadow-sm'
            : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
        )}
      >
        North
      </button>
      <button
        onClick={() => onChange('south')}
        className={cn(
          'px-3 py-1 rounded-md text-xs font-medium transition-all',
          value === 'south'
            ? 'bg-gold-400 text-stone-900 shadow-sm'
            : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
        )}
      >
        South
      </button>
    </div>
  )
}

// ============================================
// Exports
// ============================================

export default KPChart
