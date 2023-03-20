import { INodeSchema } from "@rxdrag/schema";
import { inputBaseSchemas } from "../schemas";
import { createSchema, SchemaOptions } from "@rxdrag/react-antd-shell";

const options: SchemaOptions = {
  propsSchemas: [
    ...inputBaseSchemas
  ]
}

export const selectSchema: INodeSchema = createSchema(options)