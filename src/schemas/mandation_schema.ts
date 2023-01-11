import * as Yup from "yup";

export const mandationSchema = Yup.object({
  // Part 1
  activityUC: Yup.string().required("This field is required"),
  restartSchemeMan: Yup.string().required("This field is required"),
  reasonableConsideration: Yup.string().required("This field is required"),
  attempts: Yup.string().required("This field is required"),

  // Part 2
  rearrangeActivity: Yup.string().required("This field is required"), //radio button
  originalDetails: Yup.string().when("rearrangeActivity", {
    is: "yes",
    then: Yup.string().required("This field is required"),
  }), //text field
  notAllowReArrange: Yup.string().when("rearrangeActivity", {
    is: "no",
    then: Yup.string().required("This field is required"),
  }), //text field
  participantFail: Yup.string().required("This field is required"), //text field
  fullDetails: Yup.string().required("This field is required"), //text field
  volunteerDetails: Yup.string().required("This field is required"), //text field
  otherInfo: Yup.string().required("This field is required"), //text field
  accurateStatement: Yup.string().required("This field is required"), //radio button
});
