import { KyesType } from "@/app/products/types/inputProps.types";

export type KeyConditionsValue = "op" | "re" | "remove";

export type typeStateConditions = {
  KeysValue: {
    [key in Exclude<KyesType, "name">]: KeyConditionsValue;
  };

  setCondition: ({
    conditionState,
    key,
  }: {
    conditionState: KeyConditionsValue;
    key: Exclude<KyesType, "name">;
  }) => void;
};
