import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={40} height={24} fill="none" {...props}>
    <Circle cx={28} cy={12} r={12} fill="#F9A11E" />
    <Circle cx={12} cy={12} r={12} fill="#E81313" />
  </Svg>
);

export default SvgComponent;
