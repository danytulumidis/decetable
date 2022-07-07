import { Fragment } from "react";
import ToastState from "../../models/Toast";

const Toast = (props: { message: string; state: ToastState }): JSX.Element => {
    const { message, state } = props;

    let toastColor = "";

    switch (state) {
        case 0:
            toastColor = "bg-green-600";
            break;
        case 1:
            toastColor = "bg-blue-600";
            break;
        case 2:
            toastColor = "bg-yellow-600";
            break;
        case 3:
            toastColor = "bg-red-600";
            break;

        default:
            break;
    }

    return (
        <Fragment>
            {message && (
                <div
                    className='fixed right-0 w-1/3 h-fit z-50 bg-card-color text-white rounded-lr-lg rounded-bl-lg flex
        '
                >
                    <div
                        className={
                            "w-1 rounded-tl-lg rounded-bl-lg " + toastColor
                        }
                    ></div>
                    <p className='self-center mx-auto p-10'>{message}</p>
                </div>
            )}
        </Fragment>
    );
};

export default Toast;
