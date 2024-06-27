import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TTask } from "../types/task";

export type RootStackParamList = {
    Home: { onlyImportant: boolean },
    Editor: { task?: TTask };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
