import { DrawerExtra } from "@rxdrag/react-antd-components";
import { IComponentMaterial } from "@rxdrag/react-core";
import { locales } from "./locales";
import { materialSchema } from "./schema";

const name = "DrawerExtra"
export const DrawerExtraMaterial: IComponentMaterial = {
  componentName: name,
  component: DrawerExtra,
  designer: DrawerExtra,
  designerLocales: locales,
  propsSchema: materialSchema,
  designerProps: {
    //readOnly: true,
  },

  behaviorRule: {
    droppable: true,
  }
}