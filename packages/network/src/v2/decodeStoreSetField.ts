import { ComponentValue } from "@latticexyz/recs";
import { TableId } from "@latticexyz/utils";
import { Contract } from "ethers";
import { registerSchema } from "./schemas/tableSchemas";
import { registerMetadata } from "./schemas/tableMetadata";
import { decodeField } from "./schemas/decodeField";
import { TableSchema } from "./common";
import { decodeStaticField } from "./schemas/decodeStaticField";
import { DynamicSchemaType, StaticSchemaType } from "@latticexyz/schema-type";
import { decodeDynamicField } from "./schemas/decodeDynamicField";
import { decodeKeyTuple } from "./schemas/decodeKeyTuple";

export async function decodeStoreSetField(
  contract: Contract,
  table: TableId,
  keyTuple: string[],
  schemaIndex: number,
  data: string
): Promise<{
  schema: TableSchema;
  indexedValues: Record<number, any>;
  indexedInitialValues: Record<number, any>;
  namedValues?: Record<string, any>;
  namedInitialValues?: Record<string, any>;
  indexedKey: Record<number, any>;
  namedKey?: Record<string, any>;
}> {
  const schema = await registerSchema(contract, table);
  const { valueSchema, keySchema } = schema;
  const indexedValues = decodeField(valueSchema, schemaIndex, data);
  const indexedKey = decodeKeyTuple(keySchema, keyTuple);

  // Create an object that represents an "uninitialized" record as it would exist in Solidity
  // to help populate RECS state when using StoreSetField before StoreSetRecord.
  const defaultValues = [
    ...valueSchema.staticFields.map((fieldType) =>
      decodeStaticField(fieldType as StaticSchemaType, new Uint8Array(0), 0)
    ),
    ...valueSchema.dynamicFields.map((fieldType) =>
      decodeDynamicField(fieldType as DynamicSchemaType, new Uint8Array(0))
    ),
  ];
  const indexedInitialValues = Object.fromEntries(
    defaultValues.map((value, index) => [index, value])
  ) as ComponentValue;

  const metadata = await registerMetadata(contract, table);
  if (metadata) {
    const { tableName, fieldNames } = metadata;
    const namedInitialValues = Object.fromEntries(
      defaultValues.map((fieldValue, schemaIndex) => {
        return [fieldNames[schemaIndex], fieldValue];
      })
    ) as ComponentValue;

    // TODO: once TableMetadata supports key names we can decode them here.
    // For now we extract the key names of known tables from the `mud.config.ts`
    // and ignore others in `applyNetworkUpdate`.
    // (see https://github.com/latticexyz/mud/issues/824)

    return {
      schema,
      indexedValues,
      indexedInitialValues,
      namedValues: {
        [fieldNames[schemaIndex]]: indexedValues[schemaIndex],
      },
      namedInitialValues,
      indexedKey,
    };
  }

  console.warn(
    `Received data for ${table.toString()}, but could not find table metadata for field names. Did your contracts get autogenerated and deployed properly?`
  );
  return {
    schema,
    indexedValues,
    indexedInitialValues,
    indexedKey,
  };
}
