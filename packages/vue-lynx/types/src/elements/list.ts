import type { DefineComponent } from "vue";
import type { ListScrollEvent, ListItemSnapAlignment, ListScrollInfo } from '@lynx-js/types'

declare module "vue" {
  export interface GlobalComponents {
    /**
     * The `<list>` component is a high-performance scrollable container that optimizes performance and memory usage through element recycling and lazy loading.
     *
     */
    list: DefineComponent<{
      /**
       * Controls the layout type of the `<list>` component, which needs to be used in conjunction with `span-count`.
       * @default 'single'
       */
      'list-type'?: 'single' | 'flow' | 'waterfall';
      /**
       * Sets the number of columns or rows for the `<list>` component layout.
       */
      'span-count'?: number;
      /**
       * Sets the scrolling direction and layout direction of the `<list>` component.
       * @default 'vertical'
       */
      'scroll-orientation'?: 'vertical' | 'horizontal';
      /**
       * Indicates whether the `<list>` component is allowed to scroll.
       * @default true
       */
      'enable-scroll'?: boolean;
      /**
       * Indicates whether `<list>` can achieve nested scrolling with other scrollable containers. When enabled, the inner container scrolls first, followed by the outer container.
       * @default true
       */
      'enable-nested-scroll'?: boolean;
      /**
       * Specifies the spacing of `<list>` child nodes in the main axis direction.
       * @default null
       */
      'list-main-axis-gap'?: string;
      /**
       * Specifies the spacing of `<list>` child nodes in the cross axis direction.
       * @default null
       */
      'list-cross-axis-gap'?: string;
      /**
       * Controls whether the `<list>` component as a whole is allowed to be sticky at the top or bottom.
       * @default false
       */
      sticky?: boolean;
      /**
       * The offset distance from the top or bottom of `<list>` for sticky positioning, in `px`.
       * @default 0
       */
      'sticky-offset'?: number;
      /**
       * Enables edge bounce effect.
       * @default true
       */
      bounces?: boolean;
      /**
       * Specifies the node position to which `<list>` automatically scrolls after rendering, effective only once.
       * @default 0
       */
      'initial-scroll-index'?: number;
      /**
       * Controls whether the scroll event callback parameters include the position information of the currently rendering node.
       * @default false
       */
      'need-visible-item-info'?: boolean;
      /**
       * Triggers a `scrolltoupper` event once when the number of remaining displayable child nodes at the top of `<list>` is less than this value for the first time.
       * @default 0
       */
      'upper-threshold-item-count'?: number;
      /**
       * Triggers a `scrolltolower` event once when the number of remaining displayable child nodes at the bottom of `<list>` is less than this value for the first time.
       * @default 0
       */
      'lower-threshold-item-count'?: number;
      /**
       * Sets the time interval for the `<list>` callback `scroll` event, in milliseconds (ms).
       * @default 200
       */
      'scroll-event-throttle'?: number;
      /**
       * Controls the paginated scrolling effect of `<list>`.
       */
      'item-snap'?: ListItemSnapAlignment;
      /**
       * Controls whether the `layoutcomplete` event includes the node layout information.
       */
      'need-layout-complete-info'?: boolean;
      /**
       * Used to mark the unique identifier for this data source update.
       * @default -1
       */
      'layout-id'?: number;
      /**
       * This attribute controls the number of nodes outside `<list>` that are preloaded.
       * @default 0
       */
      'preload-buffer-count'?: number;
      /**
       * Indicates whether the `<list>` component scroll bar is displayed.
       * @default true
       */
      'scroll-bar-enable'?: boolean;
      /**
       * `<list>` scroll event.
       */
      onBindscroll?: (event: ListScrollEvent) => void;
      /**
       * Callback triggered when scrolling to the top of `<list>`.
       */
      onBindscrolltoupper?: (event: ListScrollEvent) => void;
      /**
       * Callback triggered when scrolling to the bottom of `<list>`.
       */
      onBindscrolltolower?: (event: ListScrollEvent) => void;
      /**
       * Callback triggered when the scroll state of `<list>` changes.
       */
      onBindscrollstatechange?: (event: { detail: { state: number } }) => void;
      /**
       * Callback triggered after `<list>` layout is complete.
       */
      onBindlayoutcomplete?: (event: { detail: { 'layout-id': number; scrollInfo?: ListScrollInfo; diffResult?: unknown; visibleCellsAfterUpdate?: unknown[]; visibleCellsBeforeUpdate?: unknown[] } }) => void;
      /**
       * Callback when pagination scrolling is about to occur.
       */
      onBindsnap?: (event: { detail: { position: number; currentScrollLeft: number; currentScrollTop: number; targetScrollLeft: number; targetScrollTop: number } }) => void;
    }>
  }
}
