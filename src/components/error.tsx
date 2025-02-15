import { useEffect } from "react";

const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    const dialog = document.getElementById("my_modal") as HTMLDialogElement;
    dialog?.showModal();
  }, []);

  const [code, ...message] = error.message.split(" ");
  return (
    <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-Black-10 border-secondary dark:bg-White rounded-xl">
        <h3 className="font-bold text-xl text-Red">
          {code || "Oops! Something went wrong."}
        </h3>
        <p className="py-4 text-Black-75 dark:text-Black-50">
          {message.join(" ")}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-lg text-White px-4 py-2 rounded hover:bg-transparent hover:text-primary hover:font-bold cursor-pointer transition duration-300"
            >
              Refresh
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ErrorPage;
