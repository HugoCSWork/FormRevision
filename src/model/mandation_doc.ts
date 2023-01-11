import type * as yup from "yup";
import type { mandationSchema } from "@/schemas/mandation_schema";

interface MandationDoc extends yup.InferType<typeof mandationSchema> {}

export function convertRecordToMandationDoc(
  request: Record<string, any>
): MandationDoc {
  return {
    activityUC: request["activityUC"],
  } as MandationDoc;
}
