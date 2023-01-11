import { useForm } from "vee-validate";
import { defineStore } from "pinia";
import createMandationDoc from "@/service/create_mandation_doc";
import { mandationSchema } from "@/schemas/mandation_schema";

export const mandationStore = defineStore("mandationStore", () => {
  const { errors, useFieldModel, handleSubmit } = useForm({
    validationSchema: mandationSchema,
  });

  const activityUC = useFieldModel("activityUC");
  const restartSchemeMan = useFieldModel("restartSchemeMan");
  const reasonableConsideration = useFieldModel("reasonableConsideration");
  const attempts = useFieldModel("attempts");
  const rearrangeActivity = useFieldModel("rearrangeActivity");
  const originalDetails = useFieldModel("originalDetails");
  const notAllowReArrange = useFieldModel("notAllowReArrange");
  const participantFail = useFieldModel("participantFail");
  const fullDetails = useFieldModel("fullDetails");
  const volunteerDetails = useFieldModel("volunteerDetails");
  const otherInfo = useFieldModel("otherInfo");
  const accurateStatement = useFieldModel("accurateStatement");

  const submitForm = handleSubmit(async (values, actions) => {
    console.log("Did it submit");
    createMandationDoc(values);
    actions.resetForm();
  });

  return {
    errors,
    activityUC,
    restartSchemeMan,
    reasonableConsideration,
    attempts,
    rearrangeActivity,
    originalDetails,
    notAllowReArrange,
    participantFail,
    fullDetails,
    volunteerDetails,
    otherInfo,
    accurateStatement,
    submitForm,
  };
});
