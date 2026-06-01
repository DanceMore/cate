## 2026-06-01 - [Memoizing Color Parsing in Canvas Components]
**Learning:** High-frequency render components like `CanvasRegionComponent` (active during drags) can suffer from redundant computation if utility functions like `parseRgba` are called multiple times per render, even with internal caching. Regex matching and string concatenation in the render loop add measurable GC pressure.
**Action:** Always memoize derived style strings and parsed values in canvas components using `useMemo`, especially when they depend on props that change less frequently than the interaction-driven re-renders.

## 2026-06-02 - [Scoping Global Selectors for Multi-Workspace Performance]
**Learning:** Global selectors that iterate over all workspaces and panels (e.g., to build a color map) scale poorly as the session grows. In a multi-workspace environment, most UI components (like a tab bar) only care about a specific slice of data.
**Action:** Always scope selector hooks by passing a contextual ID (like `workspaceId`) to the selector. This reduces complexity from O(W * P) to O(P), where W is the number of workspaces.
