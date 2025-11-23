import { useState, useEffect, useRef, useCallback } from 'react'
import { RotateCcw, MousePointer2, Zap, AlertTriangle } from 'lucide-react'

export default function GradientDiagram() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [learningRate, setLearningRate] = useState(0.1)
    const [path, setPath] = useState<{ x: number, y: number }[]>([])
    const [isSimulating, setIsSimulating] = useState(false)
    const [hoverPos, setHoverPos] = useState<{ x: number, y: number } | null>(null)

    // Function: f(x,y) = x^2 + y^2 (Bowl shape)
    // Gradient: [2x, 2y]
    const width = 400
    const height = 400
    const scale = 40 // pixels per unit
    const centerX = width / 2
    const centerY = height / 2

    // Convert screen coords to math coords
    const toMath = useCallback((sx: number, sy: number) => ({
        x: (sx - centerX) / scale,
        y: -(sy - centerY) / scale // Y is inverted in screen coords
    }), [centerX, centerY, scale])

    // Convert math coords to screen coords
    const toScreen = useCallback((mx: number, my: number) => ({
        x: centerX + mx * scale,
        y: centerY - my * scale
    }), [centerX, centerY, scale])

    // Draw the heatmap/contour
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Clear
        ctx.clearRect(0, 0, width, height)

        // Draw Heatmap
        const imageData = ctx.createImageData(width, height)
        for (let py = 0; py < height; py++) {
            for (let px = 0; px < width; px++) {
                const { x, y } = toMath(px, py)
                const z = x * x + y * y // Function value

                // Color mapping: Blue (low) -> Red (high)
                // Max expected z approx 25 (for x,y range -5 to 5)
                const intensity = Math.min(1, z / 25)

                const r = Math.floor(255 * intensity)
                const g = Math.floor(100 * (1 - intensity))
                const b = Math.floor(255 * (1 - intensity))

                const index = (py * width + px) * 4
                imageData.data[index] = r
                imageData.data[index + 1] = g
                imageData.data[index + 2] = b
                imageData.data[index + 3] = 255 // Alpha
            }
        }
        ctx.putImageData(imageData, 0, 0)

        // Draw Grid Lines (Contours)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
        ctx.lineWidth = 1

        // Circular contours
        for (let r = 1; r <= 5; r++) {
            ctx.beginPath()
            ctx.arc(centerX, centerY, r * scale, 0, Math.PI * 2)
            ctx.stroke()
        }

        // Axes
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'
        ctx.beginPath()
        ctx.moveTo(0, centerY); ctx.lineTo(width, centerY)
        ctx.moveTo(centerX, 0); ctx.lineTo(centerX, height)
        ctx.stroke()

        // Draw Path
        if (path.length > 0) {
            ctx.beginPath()
            ctx.strokeStyle = '#fbbf24' // Amber
            ctx.lineWidth = 3
            const start = toScreen(path[0].x, path[0].y)
            ctx.moveTo(start.x, start.y)

            for (let i = 1; i < path.length; i++) {
                const p = toScreen(path[i].x, path[i].y)
                ctx.lineTo(p.x, p.y)
            }
            ctx.stroke()

            // Draw points
            path.forEach((p, i) => {
                const sp = toScreen(p.x, p.y)
                ctx.beginPath()
                ctx.arc(sp.x, sp.y, 3, 0, Math.PI * 2)
                ctx.fillStyle = i === path.length - 1 ? '#ef4444' : '#fbbf24'
                ctx.fill()
            })
        }

        // Draw Hover Gradient Vector
        if (hoverPos && !isSimulating) {
            const { x, y } = hoverPos
            const gradX = 2 * x
            const gradY = 2 * y

            // Draw arrow pointing DOWNHILL (negative gradient)
            const sp = toScreen(x, y)
            const end = toScreen(x - gradX * 0.2, y - gradY * 0.2) // Scale down for visibility

            ctx.beginPath()
            ctx.moveTo(sp.x, sp.y)
            ctx.lineTo(end.x, end.y)
            ctx.strokeStyle = '#fff'
            ctx.lineWidth = 2
            ctx.stroke()

            // Arrowhead
            const angle = Math.atan2(end.y - sp.y, end.x - sp.x)
            ctx.beginPath()
            ctx.moveTo(end.x, end.y)
            ctx.lineTo(end.x - 10 * Math.cos(angle - Math.PI / 6), end.y - 10 * Math.sin(angle - Math.PI / 6))
            ctx.lineTo(end.x - 10 * Math.cos(angle + Math.PI / 6), end.y - 10 * Math.sin(angle + Math.PI / 6))
            ctx.fillStyle = '#fff'
            ctx.fill()
        }

    }, [path, hoverPos, isSimulating, toMath, toScreen, centerX, centerY, scale, width, height])

    // Simulation Loop
    useEffect(() => {
        if (!isSimulating || path.length === 0) return

        const timer = setInterval(() => {
            setPath(prev => {
                const last = prev[prev.length - 1]

                // Gradient Descent Step
                // x_new = x_old - learning_rate * gradient(x_old)
                const gradX = 2 * last.x
                const gradY = 2 * last.y

                const nextX = last.x - learningRate * gradX
                const nextY = last.y - learningRate * gradY

                // Stop if close to 0 or diverging too much
                if (Math.abs(nextX) < 0.05 && Math.abs(nextY) < 0.05) {
                    setIsSimulating(false)
                    return [...prev, { x: 0, y: 0 }]
                }
                if (Math.abs(nextX) > 6 || Math.abs(nextY) > 6) {
                    setIsSimulating(false)
                    return prev
                }

                return [...prev, { x: nextX, y: nextY }]
            })
        }, 100) // Slow enough to see

        return () => clearInterval(timer)
    }, [isSimulating, learningRate, path])

    const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (isSimulating) return

        const rect = canvasRef.current?.getBoundingClientRect()
        if (!rect) return

        const sx = e.clientX - rect.left
        const sy = e.clientY - rect.top
        const m = toMath(sx, sy)

        setPath([{ x: m.x, y: m.y }])
        setIsSimulating(true)
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const rect = canvasRef.current?.getBoundingClientRect()
        if (!rect) return
        const sx = e.clientX - rect.left
        const sy = e.clientY - rect.top
        setHoverPos(toMath(sx, sy))
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Simulador de Gradiente Descendente
                </h4>
                <button
                    onClick={() => {
                        setPath([])
                        setIsSimulating(false)
                    }}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200"
                    title="Limpar"
                >
                    <RotateCcw size={16} />
                </button>
            </div>

            <div className="relative flex justify-center bg-gray-900 rounded-lg overflow-hidden cursor-crosshair">
                <canvas
                    ref={canvasRef}
                    width={width}
                    height={height}
                    onClick={handleCanvasClick}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setHoverPos(null)}
                    className="max-w-full"
                />

                {!isSimulating && path.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2 animate-pulse">
                            <MousePointer2 size={16} />
                            Clique em qualquer lugar para começar
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-6 space-y-4">
                <div>
                    <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Learning Rate (Taxa de Aprendizado): <span className="text-indigo-600">{learningRate}</span>
                        </label>
                        {learningRate > 0.8 && (
                            <span className="text-xs text-red-500 flex items-center gap-1">
                                <AlertTriangle size={12} /> Cuidado: Pode divergir!
                            </span>
                        )}
                    </div>
                    <input
                        type="range"
                        min="0.01"
                        max="1.1"
                        step="0.05"
                        value={learningRate}
                        onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                        disabled={isSimulating}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Lento (0.01)</span>
                        <span>Ideal (~0.1)</span>
                        <span>Rápido/Instável (1.0)</span>
                    </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                    <p>
                        <strong>Como funciona:</strong>
                    </p>
                    <ul className="list-disc ml-4 mt-1 space-y-1">
                        <li>As cores representam a altura (Azul = Fundo do Vale, Vermelho = Alto).</li>
                        <li>A seta branca mostra a direção da descida (oposto do gradiente).</li>
                        <li>Ao clicar, a "bolinha" segue o gradiente até chegar no centro (erro zero).</li>
                        <li>Tente aumentar o <strong>Learning Rate</strong> para ver a bolinha "pular" o centro!</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
