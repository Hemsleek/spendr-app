import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface IProps extends SvgProps{
    color?:string;
}
const BrandLogo = (props: IProps) => (
  <Svg width={87} height={23} fill="none" {...props}>
    <Path
      d="M.72 14.784c1.224 2.136 3.432 3.504 6.12 3.504 3.168 0 5.544-1.848 5.544-4.752 0-2.136-1.248-3.456-3.912-4.632l-1.8-.792c-1.344-.6-1.848-.984-1.848-1.824 0-.984.84-1.536 1.968-1.536 1.2 0 2.208.6 3.024 1.824l2.208-1.704c-.984-1.824-2.808-3-5.232-3-3 0-5.256 1.776-5.256 4.488 0 2.112 1.416 3.48 3.84 4.56l1.704.768c1.512.696 2.016 1.032 2.016 1.968 0 1.08-.84 1.752-2.256 1.752-1.728 0-2.856-.888-3.888-2.304L.72 14.784Zm26.846-2.736c0-3.552-2.448-6.192-5.76-6.192-1.632 0-3.024.624-3.816 1.752V6.12h-2.976v16.2h3.24v-5.472c.864.936 2.112 1.44 3.552 1.44 3.312 0 5.76-2.688 5.76-6.24Zm-3.288.024c0 1.944-1.344 3.264-3.072 3.264-1.656 0-3-1.176-3-3.288 0-2.136 1.368-3.264 3-3.264 1.752 0 3.072 1.296 3.072 3.288Zm16.75 1.08c.144-.6.216-1.2.216-1.776 0-3.096-2.304-5.52-5.592-5.52-3.432-.072-6.288 2.784-6.216 6.216-.072 3.432 2.832 6.288 6.504 6.216 1.752 0 3.336-.6 4.752-1.776l-1.344-2.208c-1.032.792-2.136 1.2-3.312 1.2-1.728 0-2.952-.84-3.336-2.352h8.328Zm-8.328-2.28c.36-1.464 1.464-2.4 2.832-2.4 1.416 0 2.544.936 2.568 2.4h-5.4Zm21.992-.24c0-2.88-1.704-4.776-4.464-4.776-1.416 0-2.64.504-3.48 1.344V6.12h-2.976V18h3.24v-6.936c0-1.368.936-2.304 2.256-2.304 1.32 0 2.208.936 2.208 2.304V18h3.216v-7.368ZM66.452 0v7.272c-.865-.936-2.04-1.416-3.553-1.416-3.312 0-5.76 2.64-5.76 6.216s2.448 6.216 5.76 6.216c1.632 0 3.024-.624 3.816-1.752V18h2.976V0h-3.24Zm.047 12.072c0 2.136-1.368 3.264-3 3.264-1.752 0-3.072-1.296-3.072-3.288 0-1.944 1.344-3.264 3.072-3.264 1.632 0 3 1.176 3 3.288ZM80.201 6.12a3.512 3.512 0 0 0-1.056-.144 4.12 4.12 0 0 0-3.264 1.56V6.12h-2.976V18h3.24v-5.928c0-2.04 1.248-3.096 3.192-3.096h.864V6.12Z"
      fill={props.color || "#fff"}
    />
    <Path
      d="M81.73 16.056c0 1.272.984 2.232 2.256 2.232 1.272 0 2.208-.96 2.208-2.232 0-1.248-.96-2.232-2.208-2.232-1.272 0-2.256.984-2.256 2.232Z"
      fill="#F7AF02"
    />
  </Svg>
);

export default BrandLogo;