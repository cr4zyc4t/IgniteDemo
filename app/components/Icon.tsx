import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { ComponentProps, ComponentType } from "react";
import {
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";

export type FontAwesomeTypes = ComponentProps<typeof FontAwesome>["name"];
export type MaterialIconTypes = ComponentProps<typeof MaterialIcons>["name"];
export type IconType = "FontAwesome" | "Material";

interface FontAwesomeProps extends TouchableOpacityProps {
  type?: "FontAwesome";
  /**
   * The name of the icon
   */
  icon: FontAwesomeTypes;

  /**
   * An optional tint color for the icon
   */
  color?: string;

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number;

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>;

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"];
}

interface MaterialProps extends Omit<FontAwesomeProps, "icon" | "type"> {
  type?: "Material";
  icon: MaterialIconTypes;
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: FontAwesomeProps | MaterialProps) {
  const {
    type,
    icon,
    color,
    size = 20,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props;

  const isPressable = !!WrapperProps.onPress;
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View;

  const iconEl =
    type === "Material" ? (
      <MaterialIcons
        name={icon}
        style={[$imageStyle, color && { tintColor: color }, $imageStyleOverride]}
        size={size}
        color={color}
      />
    ) : (
      <FontAwesome
        name={icon}
        style={[$imageStyle, color && { tintColor: color }, $imageStyleOverride]}
        size={size}
        color={color}
      />
    );

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      {iconEl}
    </Wrapper>
  );
}

const $imageStyle: ImageStyle = {
  resizeMode: "contain",
};
