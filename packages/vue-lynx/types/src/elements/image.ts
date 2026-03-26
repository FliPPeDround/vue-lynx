import type { DefineComponent } from "vue";
import type { LoadEvent, ErrorEvent } from '@lynx-js/types'

declare module "vue" {
  export interface GlobalComponents {
    /**
     * Used to display different types of images, including web images, static resources, and locally stored images.
     *
     */
    image: DefineComponent<{
      /**
       * When set to true and the `<image>` element has no width or height, the size of the `<image>` will be automatically adjusted to match the image's original dimensions after the image is successfully loaded, ensuring that the aspect ratio is maintained.
       * @default false
       */
      'auto-size'?: boolean;
      /**
       * Specifies whether the animated image should start playing automatically once it is loaded.
       * @default true
       */
      'autoplay'?: boolean;
      /**
       * Image blur radius
       */
      'blur-radius'?: number;
      /**
       * Stretchable area for 9patch images, in percentage or decimal, four values for top, right, bottom, left
       */
      'cap-insets'?: string;
      /**
       * Adjust the scale of stretchable area for 9patch images
       * @default 1
       */
      'cap-insets-scale'?: number;
      /**
       * When set to true, the `<image>` element will only clear the previously displayed image resource after a new image has successfully loaded. The default behavior is to clear the image resource before starting a new load. This can resolve flickering issues when the image src is switched and reloaded. It is not recommended to enable this in scenarios where there is node reuse in views like lists.
       * @default false
       */
      'defer-src-invalidation'?: boolean;
      /**
       * ARGB_8888: 32-bit memory per pixel, supports semi-transparent images RGB_565: 16-bit memory per pixel, reduces memory usage but loses transparency Support PC platform since 3.5
       */
      'image-config'?: 'ARGB_8888' | 'RGB_565';
      /**
       * Number of times an animated image plays, 0 stands for infinite
       * @default 0
       */
      'loop-count'?: number;
      /**
       * Specifies image cropping/scaling mode scaleToFill: Scales the image without preserving the aspect ratio, stretching the image to fill the element aspectFit: Scales the image while preserving aspect ratio so that the long side is fully visible aspectFill: Scales the image while preserving aspect ratio, ensuring the short side fills the element center: Does not scale the image; image is centered
       * @default 'scaleToFill'
       */
      'mode'?: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'center';
      /**
       * Placeholder image, used same as src
       */
      'placeholder'?: string;
      /**
       * Image won't load if its size is 0, but will load if prefetch-height is set
       * @default '0px'
       */
      'prefetch-height'?: string;
      /**
       * Image won't load if its size is 0, but will load if prefetch-width is set
       * @default '0px'
       */
      'prefetch-width'?: string;
      /**
       * Supports http/https/base64
       */
      'src'?: string;
      /**
       * Changes the color of all non-transparent pixels to the tint-color specified. The value is a `<color>` .
       */
      'tint-color'?: string;
      /**
       * Image load error event
       */
      onBinderror?: (event: ErrorEvent) => void;
      /**
       * Image load success event
       */
      onBindload?: (event: LoadEvent) => void;
    }>
  }
}
