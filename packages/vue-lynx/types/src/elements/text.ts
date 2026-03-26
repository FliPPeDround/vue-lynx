import type { DefineComponent } from "vue";
import type { SelectionChangeEvent } from '@lynx-js/types'

declare module "vue" {
  export interface GlobalComponents {
    /**
     * `<text>` is a built-in element in Lynx used to display text content. It supports specifying text style, binding click event callbacks, and can nest `<text>`, `<image>`, and `<view>` elements to achieve relatively complex text and image content presentation.
     *
     */
    text: DefineComponent<{
      /**
       * Limits the maximum number of lines displayed for the text content, overflow:hidden should be set simultaneously.
       *
       * @default -1
       */
      'text-maxline'?: number;

      /**
       * Add additional padding for Android text on top and bottom. Enabling this may cause inconsistencies between platforms.
       *
       * @default false
       * @platform Android
       */
      'include-font-padding'?: boolean;

      /**
       * By default, if the text is truncated, the inserted `...` will be displayed with the color specified by the closest inline-text's style. If this attribute is enabled, the color of `...` will be specified by the outermost `text` tag's style.
       *
       * @default false
       */
      'tail-color-convert'?: boolean;

      /**
       * Used to set vertical alignment for single-line plain text. It can be changed by setting 'top' | 'center' | 'bottom'. It is recommended to use this only when the default font does not meet the center alignment requirements, as it increases text measurement time.
       *
       * @default 'normal'
       */
      'text-single-line-vertical-align'?: 'normal' | 'top' | 'center' | 'bottom';

      /**
       * Sets whether to enable text selection. When enabled, `flatten={false}` should be set simultaneously.
       *
       * @default false
       */
      'text-selection'?: boolean;

      /**
       * Used to set whether to turn on the custom pop-up context menu after selection and copying. It takes effect after enabling `text-selection`.
       *
       * @default false
       */
      'custom-context-menu'?: boolean;

      /**
       * Used to set whether to enable the custom text selection function. When it is enabled, the element will no longer handle the gesture logic related to selection and copying. It takes effect after enabling `text-selection`.
       *
       * @default false
       */
      'custom-text-selection'?: boolean;

      /**
       * The layout event returns the result information after text layout, including the number of lines of the current text, and the start and end positions of the text in each line relative to the entire text.
       */
      onLayout?: (event: SelectionChangeEvent) => void;

      /**
       * This event is triggered whenever the selected text range changes.
       */
      onSelectionchange?: (event: SelectionChangeEvent) => void;
    }>
  }
}
