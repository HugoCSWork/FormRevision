import { convertRecordToMandationDoc } from "@/model/mandation_doc";

export default function createMandationDoc(
  request: Record<string, any>
): boolean {
  const mandationDocument = convertRecordToMandationDoc(request);

  return true;
}
