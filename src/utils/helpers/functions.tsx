import { createStyles, makeStyles, Theme } from "@material-ui/core";
import axios from "axios";

export const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export const phoneRegexp = RegExp(
    /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/
)

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                color: "white"
            },
            "& .MuiFilledInput-root": {
                borderRadius: 0
            },
            "& .MuiTextField-root > p": {
                margin: ".3em 1em 0em 1em",
                textAlign: 'start'
            },
            "& .MuiFilledInput-underline:before": {
                borderBottom: "1px solid rgb(0 0 0 / 0%)"
            },
            "& .MuiInputLabel-filled": {
                color: "aliceblue"
            },
            "& .MuiFilledInput-underline:after": {
                borderBottom: "0px solid #ffffff",

            },
            "& .MuiFilledInput-inputMarginDense": {
                color: "white",
                paddingTop: "28px"
            },
            "& .MuiFormLabel-root.Mui-error ": {
                color: "#f44336 !important",

            },
            "& .MuiFormHelperText-root.Mui-error": {
                fontSize: ".9em"
            },

            "& .makeStyles-root-6 .MuiInputLabel-filled": {
                color: "#d6d6d6 !important"
            }
        },
    }),
);

export const scrollUp = [
    {
        start: 740,
        duration: 100,
        properties: [
            {
                startValue: 760,
                endValue: 0,
                property: "translateY"
            }
        ]
    },
];

export const scrollDown = [
    {
        start: 0,
        end:0,
        duration: 100,
        properties: [
            {
                startValue: 0,
                endValue: 760,
                property: "translateY"
            }
        ]
    },
];

const sendEmail = (state: any) => {

    axios.post('/send', state)
        .then(response => {
            document.cookie = "lead=1"
            document.location.replace('https://boomer-formation.fr/a-propos')
        })
        .catch((e) => {
            console.error(e)
            document.location.replace('http://localhost:3000/')
        });
}

export const formValid = ({ formErrors, ...rest }: formValidation) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach((val) => {
        val.length > 0 && (valid = false);
        //  console.log(formErrors)
    });

    // validate the form was filled out
    Object.values(rest).forEach((val) => {
        val === null && (valid = false);
        //  console.log(val)
    });


    return valid;
};

export const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>, form: any, setState: any) => {
    e.preventDefault();

    const { name, value } = e.target;

    switch (name) {
        case "name":
            form.formErrors.name =
                value.length < 3 ? "3 charactères minimum." : "";
            break;
        case "surname":
            form.formErrors.surname =
                value.length < 3 ? "3 charactères minimum." : "";
            break;
        case "mail":
            form.formErrors.mail = emailRegex.test(value)
                ? ""
                : "E-mail invalide";
            break;
        case "phone":
            form.formErrors.phone =
                value.length < 6 ? "6 charactères minimum." : phoneRegexp.test(value) ? "" : "Numéro de télephonne incorrecte.";
            break;
        default:
            break;
    }
    // console.log({ [name]: value })
    setState({ ...form, [name]: value })
};

export const handleSubmitForm = (e: any, state: any, setErrors: any) => {

    e.preventDefault();
    if (!state.name || !state.phone || !state.mail || !state.phone) {
        setErrors({
            name: !state.formErrors.name ? state.name == "" ? 'Ce champs ne peut etre vide' : '' : state.formErrors.name,
            surname: !state.formErrors.surname ? state.surname == "" ? 'Ce champs ne peut etre vide' : '' : state.formErrors.surname,
            mail: !state.formErrors.mail ? state.mail == "" ? 'Ce champs ne peut etre vide' : '' : state.formErrors.mail,
            phone: !state.formErrors.phone ? state.phone == "" ? 'Ce champs ne peut etre vide' : '' : state.formErrors.phone,
        });
    } else {
        if (formValid(state)) {
            //  console.log({ ...state, formation: value })
            delete state.formErrors
            sendEmail({ ...state, formation: state })
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }
};

interface formValidation {
    name: "",
    surname: "",
    mail: "",
    phone: "",
    formErrors: {
        name: "",
        surname: "",
        mail: "",
        phone: ""
    }
}