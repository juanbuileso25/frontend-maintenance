
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';


export const alertNotification = (tittle, text, state) => {
    store.addNotification({
        title: tittle,
        message: text,
        type: state,
        insert: "top",
        container: "top-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    })
}
