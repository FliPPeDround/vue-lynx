import type { DefineComponent } from "vue";
import type { ContentSizeChangedEvent, ScrollEndEvent, ScrollEvent, ScrollToLowerEvent, ScrollToUpperEvent } from '@lynx-js/types'

declare module "vue" {
  export interface GlobalComponents {
    /**
     * Used to display different types of images, including web images, static resources, and locally stored images.
     *
     */
    scrollView: DefineComponent<{
      /**
       * Enable bounce effect
       * @default true
       */
      bounces?: boolean;
      /**
       * Enable dragging
       * @default true
       */
      'enable-scroll'?: boolean;
      /**
       * Initial scroll position, only effective once, in PX
       * @default 0
       */
      'initial-scroll-offset'?: number;
      /**
       * Scroll to specified child node on first screen, only effective once. All direct child nodes must be flatten=false.
       * @default 0
       */
      'initial-scroll-to-index'?: number;
      /**
       * Set upper threshold to bindscrolltoupper event.
       * @default 0
       */
      'lower-threshold'?: number;
      /**
       * Enable scrollbar
       * @default true
       */
      'scroll-bar-enable'?: boolean;
      /**
       * Replacement of scroll-x and scroll-y
       * @default 'vertical'
       */
      'scroll-direction'?: 'vertical' | 'horizontal';
      /**
       * Set upper threshold to bindscrolltoupper event.
       * @default 0
       */
      'upper-threshold'?: number;
      /**
       * This event is triggered when the scrollview's content size changed.
       */
      onindcontentsizechanged?: (e: ContentSizeChangedEvent) => void;
      /**
       * This event is triggered when the scrollview is scrolling.
       */
      onBindscroll?: (e: ScrollEvent) => void;
      /**
       * This event is triggered when the scrollview's scroll ended.
       */
      onBindscrollend?: (e: ScrollEndEvent) => void;
      /**
       * This event is triggered when the lower/right edge of the scrolling area intersects with the visible area defined by the lowerThreshold.
       */
      onBindscrolltolower?: (e: ScrollToLowerEvent) => void;
      /**
       * This event is triggered when the upper/left edge of the scrolling area intersects with the visible area defined by the upperThreshold.
       */
      onBindscrolltoupper?: (e: ScrollToUpperEvent) => void;
    }>
  }
}
