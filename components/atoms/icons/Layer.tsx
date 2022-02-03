import * as React from "react";
import Svg, { SvgProps, G, Rect } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={375} height={812} fill="none" {...props}>
    <G opacity={0.03} stroke="#fff" strokeWidth={2}>
      <Rect
        x={-24.966}
        y={-40.775}
        width={489.728}
        height={480.086}
        rx={49}
        transform="rotate(15 -24.966 -40.775)"
      />
      <Rect
        x={88.258}
        y={-14.645}
        width={489.728}
        height={480.086}
        rx={49}
        transform="rotate(30 88.258 -14.645)"
      />
      <Rect
        x={176.886}
        y={65.857}
        width={489.728}
        height={480.086}
        rx={49}
        transform="rotate(45 176.886 65.857)"
      />
      <Rect
        x={265.747}
        y={160.62}
        width={489.728}
        height={480.086}
        rx={49}
        transform="rotate(60 265.747 160.62)"
      />
      <Rect
        x={348.784}
        y={265.33}
        width={489.728}
        height={480.086}
        rx={49}
        transform="rotate(75 348.784 265.33)"
      />
      <Rect
        x={420}
        y={373}
        width={490}
        height={480}
        rx={49}
        transform="rotate(90 420 373)"
      />
    </G>
  </Svg>
);

export default SvgComponent;
