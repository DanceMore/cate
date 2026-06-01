## 2026-06-01 - [Memoizing Color Parsing in Canvas Components]
**Learning:** High-frequency render components like `CanvasRegionComponent` (active during drags) can suffer from redundant computation if utility functions like `parseRgba` are called multiple times per render, even with internal caching. Regex matching and string concatenation in the render loop add measurable GC pressure.
**Action:** Always memoize derived style strings and parsed values in canvas components using `useMemo`, especially when they depend on props that change less frequently than the interaction-driven re-renders.
