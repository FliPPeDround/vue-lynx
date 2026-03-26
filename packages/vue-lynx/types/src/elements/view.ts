import type { DefineComponent } from "vue";
import type { TouchEvent, LayoutChangeDetailEvent, UIAppearanceDetailEvent, AnimationEvent } from '@lynx-js/types'

declare module "vue" {
  export interface GlobalComponents {
    /**
     * A container element similar to HTML's <div>.
     *
     * Like <div>, <view> is a versatile container element that can hold other elements and serves as the foundation for building layouts.
     *
     * All attributes, events, and methods available on <view> can be used by other elements.
     */
    view: DefineComponent<{
      /**
       * Used to specify the name of the element, generally for native to operate the corresponding node from the native side through `findViewByName`.
       */
      name?: string;
      /**
       * Used to specify the unique identity of the element, which can be used by the front-end API to find and operate the corresponding node, such as `invoke`.
       */
      id?: string;
      /**
       * Used to apply inline styles to elements.
       */
      style?: string;
      /**
       * Used to specify one or more class names for an element, which can be used in CSS to apply styles..
       */
      class?: string;
      /**
       * Used to specify additional information for the element, which can be obtained in `Event`.
       */
      [key: `data-${string}`]: any;
      /**
       * Only available on Android platform, used to force specific nodes to create corresponding Android Views.
       * @platform Android
       */
      flatten?: boolean;
      /**
       * Specify whether the target node needs to listen to `exposure/disexposure events`.
       */
      "exposure-id"?: string;
      /**
       * Specify the exposure scene of the target node, and use it together with `exposure-id` to uniquely identify the node that needs to monitor exposure.
       */
      "exposure-scene"?: string;
      /**
       * Specify the boundary scaling value of the target node itself in the exposure detection (top).
       * @default '0px'
       */
      "exposure-ui-margin-top"?: string;
      /**
       * Specify the boundary scaling value of the target node itself in the exposure detection (right).
       * @default '0px'
       */
      "exposure-ui-margin-right"?: string;
      /**
       * Specify the boundary scaling value of the target node itself in the exposure detection (bottom).
       * @default '0px'
       */
      "exposure-ui-margin-bottom"?: string;
      /**
       * Specify the boundary scaling value of the target node itself in the exposure detection (left).
       * @default '0px'
       */
      "exposure-ui-margin-left"?: string;
      /**
       * Specify the screen boundary scaling value referenced by the target node in the exposure detection (top).
       * @default '0px'
       */
      "exposure-screen-margin-top"?: string;
      /**
       * Specify the screen boundary scaling value referenced by the target node in the exposure detection (right).
       * @default '0px'
       */
      "exposure-screen-margin-right"?: string;
      /**
       * Specify the screen boundary scaling value referenced by the target node in the exposure detection (bottom).
       * @default '0px'
       */
      "exposure-screen-margin-bottom"?: string;
      /**
       * Specify the screen boundary scaling value referenced by the target node in the exposure detection (left).
       * @default '0px'
       */
      "exposure-screen-margin-left"?: string;
      /**
       * Specify the viewport intersection ratio of the target node that can trigger the exposure event. When it is greater than this ratio, the exposure event is triggered. When it is less than this ratio, the reverse exposure event is triggered. By default, the exposure event is triggered when the target node is exposed.
       * @default '0%'
       */
      "exposure-area"?: string;
      /**
       * Specify whether the target node supports the `exposure-ui-margin-*` properties.
       * @default false
       */
      "enable-exposure-ui-margin"?: boolean;
      /**
       * Specify whether the exposure detection task takes into account the viewport clipping of the parent node. When set to `true`, nodes outside the parent node viewport cannot trigger exposure, and when set to `false`, nodes outside the parent node viewport can trigger exposure.
       * @default false
       */
      "enable-exposure-ui-clip"?: boolean;
      /**
       * Set whether the node supports accessibility.
       * @default image and text nodes are true by default, and other nodes are false by default
       */
      "accessibility-element"?: boolean;
      /**
       * Set the content of the node voice broadcast.
       * 
       * If the `<text/>` node does not set this attribute, the `<text/>` node defaults to the `<text/>` content.
       * 
       * When a node turns on the `accessibility-element` attribute, it is recommended to set the `accessibility-label` at the same time, so that the meaning of the current node can be more clearly expressed.
       */
      "accessibility-label"?: string;
      /**
       * Set the type characteristics of the node. The system will have specific supplements to the playback content for different types of nodes..
       * @default "none"
       */
      "accessibility-traits"?: "none" | "button" | "image" | "text";
      /**
       * Customize the focus order of child nodes. This property is set on the parent node, and the focus order of its child nodes will be focused according to the order of the child node id specified by the `accessibility-elements` property.
       * 
       * If the parent node is set with the accessibility-elements property, only the child node with the id specified by the accessibility-elements property can be accessed, and other child nodes cannot be focused.
       */
      "accessibility-elements"?: string;
      /**
       * The same as `accessibility-elements`, but the corresponding id is a11y-id.
       */
      "accessibility-elements-a11y"?: string;
      /**
       * Marks the current node and all its child nodes as non-accessible nodes.
       * @default false
       */
      "accessibility-elements-hidden"?: boolean;
      /**
       * This property can be set for any node. In accessibility mode, sequential navigation will only focus on the child nodes under these nodes.
       * @default false
       */
      "accessibility-exclusive-focus"?: boolean;
      /**
       * Different from `id`, it is used to identify barrier-free nodes separately.
       */
      "a11y-id"?: string;
      /**
       * Used to specify the accessibility identifier of a `UIView` in iOS. It is only used when the platform-level accessibility framework is accessed.
       * @platform iOS
       */
      "ios-platform-accessibility-id"?: string;
      /**
       * Specifies whether the target node and its child nodes can respond to Lynx touch events. This property does not affect platform-level gestures (such as scrolling of `<scroll-view`>).
       * @default true
       */
      "user-interaction-enabled"?: boolean;
      /**
       * Specify whether the target node consumes platform-layer touch events, affects platform-layer gestures (such as scrolling of scroll-view), does not affect Lynx touch events, and can achieve similar platform-layer gesture penetration/interception effects.
       * @default true for iOS and Harmony, false for Android
       */
      "native-interaction-enabled"?: boolean;
      /**
       * Specify whether to block platform layer gestures outside Lynx when the target node is on the event response chain, which can achieve an effect similar to blocking the platform layer side sliding back.
       * @default false
       */
      "block-native-event"?: boolean;
      /**
       * Specifies a touch area that blocks platform-layer gestures outside of Lynx. When the target node is in the event response chain and a touch is placed in the specified area of ​​the target node, platform-layer gestures will be blocked, achieving an effect similar to preventing platform-layer side-swipe back.
       * 
       * This two-dimensional array contains arrays containing 4 elements. The 4 elements are x, y, width, and height, in units of px or %, representing the position, width, and height of the touch area within the target node.
       * 
       * For example, [['0px', '0px', '50%', '50%'], ['50%', '50%', '50%', '50%']] indicates that platform-layer gestures outside of Lynx will be blocked when touches are placed in the upper left and lower right areas of the node.
       * @default []
       */
      "block-native-event-areas"?: [string, string, string, string][];
      /**
       * Specifies the angle range within which all platform-level swipe gestures are blocked. When the target node is in the event response chain and the swipe angle is within this range, all platform-level swipe gestures are blocked. However, Lynx touch events continue to function, allowing front-end scrolling containers that consume swipes in the specified direction. However, native scrolling based on platform-level gestures is blocked.
       * 
       * This two-dimensional array contains several 2-element arrays, where the 2 elements are start and end, representing the start and end angles, respectively. The swipe angle is determined by the finger's press position and the finger's movement position.
       * 
       * For example, [[-180, -135], [-45, 45], [135, 180]] indicates that all platform-level swipe gestures are blocked when the swipe direction is horizontal, but they are enabled when the swipe direction is vertical.
       * @default []
       */
      "consume-slide-event"?: [number, number][];
      /**
       * Specifies whether Lynx consumes touch events from the platform layer when a touch is on the target node, allowing for effects similar to display-only, non-interactive displays.
       * 
       * This property supports inheritance; that is, if event-through is not set for a child node, it inherits the event-through value from its parent node. Its active region is affected by event-through-active-regions. If not set, it defaults to the entire region of the target node.
       * @default false
       */
      "event-through"?: boolean;
      /**
       * Specifies the effective area for event-through.
       * 
       * This two-dimensional array contains several arrays containing 4 elements, where the 4 elements are x, y, width, and height, in units of px or %, representing the position, width, and height of the touch area within the target node.
       * 
       * For example, [['0px', '0px', '50%', '50%']] indicates that if the touch is in the upper left area of ​​the node, Lynx will not consume touch events from the platform layer.
       * @default []
       */
      "event-through-active-regions"?: [string, string, string, string][];
      /**
       * Specify whether the target node supports the :active pseudo-class to continue bubbling up on the event response chain.
       * @default true
       */
      "enable-touch-pseudo-propagation"?: boolean;
      /**
       * Specify the touch event response hotspot of the target node, without affecting the platform layer gesture.
       * 
       * For example, {top: '10px', left: '10px', right: '10px', bottom: '10px'} or 10px means the touch hotspot of the node is expanded by 10px.
       * @default '0px' or {top: '0px', left: '0px', right: '0px', bottom: '0px'}
       */
      "hit-slop"?: string;
      /**
       * Specify whether to not grab focus when touching the target node. By default, the node grabs focus when clicking on it, which can achieve a similar effect of not closing the keyboard when clicking other areas.
       * 
       * This property supports inheritance, that is, when ignore-focus is not set on a child node, it will inherit the ignore-focus value of the parent node.
       * 
       * @default false
       */
      "ignore-focus"?: boolean;
      /**
       * Specify whether to force trigger the touchend event when the target node is on the event response chain, which can solve the problem that the iOS end does not trigger the touchend event but triggers the touchcancel event (the touchmove event is also not continuous) in some scenarios.
       * 
       * @platform iOS
       * @default false
       */
      "ios-enable-simultaneous-touch"?: boolean;
      /**
       * Add this flag to the current element to monitor the performance of the lynx pipeline it participates in. When flagged, the lynx engine generates a PipelineEntry event once the element completes its final painting phase. This event can be observed and analyzed by registering a PerformanceObserver().For more detailed usage, see the Marking Lynx Pipeline.
       */
      __lynx_timing_flag?: string;
      /**
       * It belongs to touch event, which is triggered when the finger starts to touch the touch surface.
       */
      onTouchStart?: (event: TouchEvent) => void;
      /**
       * It belongs to touch event, which is triggered when the finger moves on the touch surface.
       */
      onTouchMove?: (event: TouchEvent) => void;
      /**
       * It belongs to touch event, which is triggered when the finger leaves the touch surface.
       */
      onTouchEnd?: (event: TouchEvent) => void;
      /**
       * It belongs to touch event, which is triggered when the touch event is interrupted by the system or Lynx external gesture.
       */
      onTouchCancel?: (event: TouchEvent) => void;
      /**
       * It belongs to touch event, which is triggered when a single tap is detected on the touch surface.
       */
      onTap?: (event: TouchEvent) => void;
      /**
       * It belongs to touch event, which is triggered when the finger is long pressed on the touch surface, and the time interval between long press triggers is 500 ms.
       */
      onLongPress?: (event: TouchEvent) => void;
      /**
       * It belongs to touch event, which is triggered when a single click is detected on the touch plane.
       */
      onClick?: (event: TouchEvent) => void;
      /**
       * It belongs to custom event, which is triggered when the target node layout is completed, and returns the position information of the target node relative to the LynxView viewport coordinate system.
       */
      onLayoutChange?: (event: LayoutChangeDetailEvent<any>) => void;
      /**
       * It belongs to custom event, which is triggered when the target node appears on the screen.
       */
      onUiappear?: (event: UIAppearanceDetailEvent<any>) => void;
      /**
       * It belongs to custom event, which is triggered when the target node disappears from the screen.
       */
      onUidisappear?: (event: UIAppearanceDetailEvent<any>) => void;
      /**
       * It belongs to animation event, which is triggered when the Animation animation starts.
       */
      oAnimationstart?: (event: AnimationEvent) => void;
      /**
       * It belongs to animation event, which is triggered when the Animation animation ends.
       */
      onAnimationend?: (event: AnimationEvent) => void;
      /**
       * It belongs to animation event, which is triggered when the Animation animation is canceled.
       */
      onAnimationcancel?: (event: AnimationEvent) => void;
      /**
       * It belongs to animation event, which is triggered every time the Animation animation is executed in a loop.
       */
      onAnimationiteration?: (event: AnimationEvent) => void;
      /**
       * It belongs to animation event, which is triggered when the Transition animation starts.
       */
      onTransitionstart?: (event: AnimationEvent) => void;
      /**
       * It belongs to animation event, which is triggered when the Transition animation ends.
       */
      onTransitionend?: (event: AnimationEvent) => void;
      /**
       * It belongs to animation event, which is triggered when the Transition animation is canceled.
       */
      onTransitioncancel?: (event: AnimationEvent) => void;
    }>;
  }
}
