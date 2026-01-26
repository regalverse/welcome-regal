import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { makeAssistantToolUI } from '@assistant-ui/react'
import { Loader2, X } from 'lucide-react'
import {
  KPChart,
  PlanetDetailsPanel,
  ChartStyleSwitcher,
  type ChartData,
  type PlanetData,
  type ChartStyle,
} from '@/components/charts/KPChart'

// Check if we're on a large screen
const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(false)

  useEffect(() => {
    const check = () => setIsLarge(window.innerWidth >= 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return isLarge
}

// ============================================
// Types matching backend ChartResultDto
// ============================================

interface CreateChartArgs {
  dob: string
  lat: number
  lon: number
  place?: string
}

interface LordHierarchy {
  sign: string
  star: string
  sub: string
  subSub?: string
}

interface BackendPlanetData {
  planet: string
  longitude: number
  isRetrograde: boolean
  sign: number
  signName: string
  nakshatra: number
  nakshatraName: string
  house: number
  lords: LordHierarchy
}

interface BackendCuspData {
  house: number
  longitude: number
  sign: number
  signName: string
  lords: LordHierarchy
}

interface CreateChartResult {
  success: boolean
  data?: {
    birthData: {
      dob: string
      lat: number
      lon: number
      place?: string
    }
    calculatedAt: string
    ayanamsa: number
    planets: BackendPlanetData[]
    cusps: BackendCuspData[]
    ascendantSign: number
    moonSign: number
    sunSign: number
  }
  error?: string
}

// ============================================
// Loading Skeleton
// ============================================

const ChartSkeleton = ({ place }: { place?: string }) => (
  <div className="aui-tool-ui-root">
    <div className="aui-tool-ui-header">
      <Loader2 className="w-4 h-4 animate-spin text-gold-500" />
      <span>Calculating chart{place ? ` for ${place}` : ''}...</span>
    </div>
    <div className="flex justify-center py-8">
      <div className="relative">
        {/* Animated placeholder chart */}
        <svg viewBox="0 0 300 300" width={280} height={280} className="opacity-30">
          <rect x="2" y="2" width="296" height="296" fill="none" stroke="currentColor" strokeWidth="2" rx="6" className="text-stone-300 dark:text-stone-600" />
          <polygon points="150,25 275,150 150,275 25,150" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-stone-300 dark:text-stone-600" />
          <polygon points="150,100 200,150 150,200 100,150" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-300 dark:text-stone-600" />
        </svg>
        {/* Shimmer overlay */}
        <div className="absolute inset-0 shimmer rounded-lg" />
      </div>
    </div>
  </div>
)

// ============================================
// Error State
// ============================================

const ChartError = ({ error }: { error?: string }) => (
  <div className="aui-tool-ui-root border-error/30 bg-error/5">
    <div className="aui-tool-ui-header text-error">
      <span>Failed to generate chart</span>
    </div>
    {error && (
      <p className="text-sm text-error/80 mt-2">{error}</p>
    )}
  </div>
)

// ============================================
// Transform backend data to chart format
// ============================================

function transformToChartData(result: CreateChartResult['data']): ChartData | null {
  if (!result) return null

  return {
    planets: result.planets.map((p) => ({
      planet: p.planet,
      longitude: p.longitude,
      isRetrograde: p.isRetrograde,
      sign: p.sign,
      signName: p.signName,
      nakshatra: p.nakshatra,
      nakshatraName: p.nakshatraName,
      house: p.house,
      lords: p.lords,
    })),
    cusps: result.cusps.map((c) => ({
      house: c.house,
      longitude: c.longitude,
      sign: c.sign,
      signName: c.signName,
      lords: c.lords,
    })),
    ascendantSign: result.ascendantSign,
    moonSign: result.moonSign,
    sunSign: result.sunSign,
    birthData: result.birthData,
  }
}

// ============================================
// Main Tool UI Component
// ============================================

// Sign names constant
const SIGN_NAMES = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

// Chart content component (shared between inline and panel views)
const ChartContent = ({
  chartData,
  chartStyle,
  setChartStyle,
  selectedPlanet,
  setSelectedPlanet,
  onClose,
  isPanel = false,
}: {
  chartData: ChartData
  chartStyle: ChartStyle
  setChartStyle: (s: ChartStyle) => void
  selectedPlanet: PlanetData | null
  setSelectedPlanet: (p: PlanetData | null) => void
  onClose?: () => void
  isPanel?: boolean
}) => (
  <div className={isPanel ? 'p-6' : ''}>
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2 text-sm font-medium">
        <span className="font-semibold">Birth Chart</span>
        {chartData.birthData?.place && (
          <span className="text-stone-500 dark:text-stone-400">
            • {chartData.birthData.place}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <ChartStyleSwitcher value={chartStyle} onChange={setChartStyle} />
        {isPanel && onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Close panel"
          >
            <X className="w-4 h-4 text-stone-500" />
          </button>
        )}
      </div>
    </div>

    {/* Chart */}
    <div className="flex justify-center mb-4">
      <KPChart
        data={chartData}
        config={{
          style: chartStyle,
          size: isPanel ? 340 : 300,
          showHouseNumbers: true,
          showSignNames: true,
          enableHover: true,
          onPlanetClick: setSelectedPlanet,
        }}
      />
    </div>

    {/* Planet Details Panel */}
    {selectedPlanet && (
      <PlanetDetailsPanel
        planet={selectedPlanet}
        onClose={() => setSelectedPlanet(null)}
        className="mt-4"
      />
    )}

    {/* Quick Summary */}
    {!selectedPlanet && (
      <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-700">
        <div className="grid grid-cols-3 gap-4 text-center text-xs">
          <div>
            <div className="text-stone-500 dark:text-stone-400">Ascendant</div>
            <div className="font-medium mt-1">
              {SIGN_NAMES[chartData.ascendantSign - 1]}
            </div>
          </div>
          <div>
            <div className="text-stone-500 dark:text-stone-400">Moon Sign</div>
            <div className="font-medium mt-1">
              {SIGN_NAMES[chartData.moonSign - 1]}
            </div>
          </div>
          <div>
            <div className="text-stone-500 dark:text-stone-400">Sun Sign</div>
            <div className="font-medium mt-1">
              {SIGN_NAMES[chartData.sunSign - 1]}
            </div>
          </div>
        </div>

        {/* Tap hint */}
        <p className="text-center text-[10px] text-stone-400 dark:text-stone-500 mt-4">
          Tap on any planet to see details
        </p>
      </div>
    )}
  </div>
)

export const KPChartToolUI = makeAssistantToolUI<CreateChartArgs, CreateChartResult>({
  toolName: 'createChart',
  render: ({ args, result, status }) => {
    const [chartStyle, setChartStyle] = useState<ChartStyle>('north')
    const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null)
    const [isPanelOpen, setIsPanelOpen] = useState(true)
    const isLargeScreen = useIsLargeScreen()

    // Loading state
    if (status.type === 'running') {
      return <ChartSkeleton place={args.place} />
    }

    // Error state
    if (status.type === 'incomplete') {
      return <ChartError error={result?.error} />
    }

    // Check for API error
    if (!result?.success || !result.data) {
      return <ChartError error={result?.error || 'No chart data returned'} />
    }

    // Transform data
    const chartData = transformToChartData(result.data)
    if (!chartData) {
      return <ChartError error="Failed to process chart data" />
    }

    // On large screens, render in a side panel via portal
    if (isLargeScreen && isPanelOpen) {
      return (
        <>
          {/* Inline indicator that chart is shown in panel */}
          <div className="aui-tool-ui-root" data-tool-name="createChart">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gold-500">✦</span>
                <span>Birth Chart</span>
                {chartData.birthData?.place && (
                  <span className="text-stone-500 dark:text-stone-400">
                    • {chartData.birthData.place}
                  </span>
                )}
              </div>
              <span className="text-xs text-stone-400">→ Panel</span>
            </div>
          </div>

          {/* Side panel via portal */}
          {createPortal(
            <div className="aui-tool-panel" data-tool-name="createChart">
              <ChartContent
                chartData={chartData}
                chartStyle={chartStyle}
                setChartStyle={setChartStyle}
                selectedPlanet={selectedPlanet}
                setSelectedPlanet={setSelectedPlanet}
                onClose={() => setIsPanelOpen(false)}
                isPanel
              />
            </div>,
            document.body
          )}
        </>
      )
    }

    // Mobile/small screens or panel closed: render inline
    return (
      <div className="aui-tool-ui-root" data-tool-name="createChart">
        <ChartContent
          chartData={chartData}
          chartStyle={chartStyle}
          setChartStyle={setChartStyle}
          selectedPlanet={selectedPlanet}
          setSelectedPlanet={setSelectedPlanet}
        />
      </div>
    )
  },
})

export default KPChartToolUI
