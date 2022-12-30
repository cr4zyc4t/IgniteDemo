import React from "react";
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native";

import { FontAwesomeTypes, Icon, Text } from "../../../components";
import { colors, spacing } from "../../../theme";
import { Demo } from "../DemoShowroomScreen";
import { DemoUseCase } from "../DemoUseCase";

const $demoIconContainer: ViewStyle = {
  padding: spacing.extraSmall,
};

const $iconTile: ViewStyle = {
  width: "33.333%",
  alignItems: "center",
  paddingVertical: spacing.extraSmall,
};

const $iconTileLabel: TextStyle = {
  marginTop: spacing.tiny,
  color: colors.textDim,
};

const $customIconContainer: ViewStyle = {
  padding: spacing.medium,
  backgroundColor: colors.palette.angry500,
};

const $customIcon: ImageStyle = {
  tintColor: colors.palette.neutral100,
};

const DEMO_ICONS = [
  "search",
  "repeat",
  "anchor",
  "bold",
  "link",
  "at",
  "code",
  "header",
  "map",
  "table",
  "th",
  "circle",
  "filter",
  "image",
  "stop",
  "key",
  "sort",
  "forward",
  "retweet",
] as const;

export const DemoIcon: Demo = {
  name: "Icon",
  description:
    "A component to render a registered icon. It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.",
  data: [
    <DemoUseCase
      name="Icons"
      description="List of icons registered inside the component."
      layout="row"
    >
      {DEMO_ICONS.map(icon => (
        <View key={icon} style={$iconTile}>
          <Icon icon={icon} color={colors.tint} size={35} />

          <Text size="xs" style={$iconTileLabel}>
            {icon}
          </Text>
        </View>
      ))}
    </DemoUseCase>,

    <DemoUseCase name="Size" description="There's a size prop." layout="row">
      <Icon icon="bug" containerStyle={$demoIconContainer} />
      <Icon icon="bug" size={35} containerStyle={$demoIconContainer} />
      <Icon icon="bug" size={50} containerStyle={$demoIconContainer} />
      <Icon icon="bug" size={75} containerStyle={$demoIconContainer} />
    </DemoUseCase>,

    <DemoUseCase name="Color" description="There's a color prop." layout="row">
      <Icon icon="bug" color={colors.palette.accent500} containerStyle={$demoIconContainer} />
      <Icon icon="bug" color={colors.palette.primary500} containerStyle={$demoIconContainer} />
      <Icon icon="bug" color={colors.palette.secondary500} containerStyle={$demoIconContainer} />
      <Icon icon="bug" color={colors.palette.neutral700} containerStyle={$demoIconContainer} />
      <Icon icon="bug" color={colors.palette.angry500} containerStyle={$demoIconContainer} />
    </DemoUseCase>,

    <DemoUseCase name="Styling" description="The component can be styled easily." layout="row">
      <Icon icon="bug" style={$customIcon} size={40} containerStyle={$customIconContainer} />
    </DemoUseCase>,
  ],
};

// @demo remove-file
