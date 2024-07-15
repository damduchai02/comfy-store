import { useNavigation } from "react-router-dom";

function SubmitBtn({ text }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="btn btn-primary btn-block uppercase"
    >
      {isSubmitting ? <span className="loading loading-spinner"></span> : text}
    </button>
  );
}

export default SubmitBtn;
