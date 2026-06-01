// =============================================================================
// canvasSyncGuard — pure decision: should `syncCanvasToWorkspace` write the
// live canvas store back to the workspace, or keep the persisted snapshot?
//
// The workspace's primary canvas panel can be detached into a different
// window. In the source window the per-panel registry then hands out a fresh
// empty CanvasOperations for that panelId, and a naive write would overwrite
// the user's saved children with `{}`. The guard preserves the existing
// snapshot when the incoming store is empty but the saved one isn't.
// =============================================================================

export function shouldPreserveExistingCanvas(
  incomingNodeCount: number,
  existingNodeCount: number,
  incomingRegionCount = 0,
  existingRegionCount = 0,
): boolean {
  // Prevent data loss (issue #220): never overwrite a non-empty canvas (with
  // nodes OR regions) with a completely empty one.
  const incomingTotal = incomingNodeCount + incomingRegionCount
  const existingTotal = existingNodeCount + existingRegionCount
  return incomingTotal === 0 && existingTotal > 0
}
