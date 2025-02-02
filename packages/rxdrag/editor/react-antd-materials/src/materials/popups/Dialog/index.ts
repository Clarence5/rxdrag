import { Dialog } from "@rxdrag/react-antd-components";
import { IComponentMaterial } from "@rxdrag/react-core";
import { ButtonMaterial } from "../../Button";
import { IconViewMaterial } from "../../displays/IconView";
import { DialogContentMaterial } from "../DialogContent";
import { DialogFooterMaterial } from "../DialogFooter";
import { DialogTitleMaterial } from "../DialogTitle";
import { DialogDesigner } from "./designer";
import { icon } from "./icon";
import { locales, resourceLocales } from "./locales";
import { materialSchema } from "./schema";

const name = "Dialog"
export const DialogMaterial: IComponentMaterial = {
  componentName: name,
  component: Dialog,
  designer: DialogDesigner,
  designerLocales: locales,
  propsSchema: materialSchema,
  designerProps: {
    //readOnly: true,
  },
  resource: {
    name: name,
    resourceLocales: resourceLocales,
    icon: icon,
    color: "#8B79EC",
    elements: [
      {
        componentName: name,
        slots: {
          title: {
            componentName: "DialogTitle",
            children:[
              {
                componentName:"Text",
                props: {
                  value: name,
                }
              }
            ]
          },
          content: {
            componentName: "DialogContent",
          },
          footer: {
            componentName: "DialogFooter",
          },
          actionComponent: {
            componentName: "Button",
            props: {
              title: name,
            },
          },
          
        },
      }
    ]
  },
  slots: {
    title: DialogTitleMaterial,
    content: DialogContentMaterial,
    footer: DialogFooterMaterial,
    actionComponent: ButtonMaterial,
    icon: IconViewMaterial,
  },
  behaviorRule: {
    droppable: false,
    noPlaceholder: true,
  },
  logicalProps:["open"]
}