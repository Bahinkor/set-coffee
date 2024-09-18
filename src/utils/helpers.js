import swal from "sweetalert";

const showSwal = (title, icon, button) => {
    swal({
        icon,
        title,
        button
    });
}

const emailValidator = (email) => {
    const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const isValid = pattern.test(email);
    return isValid;
}

const phoneValidator = phoneNumber => {
    const pattern = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/;
    const isValid = pattern.test(phoneNumber);
    return isValid;
}

export {
    showSwal,
    emailValidator,
    phoneValidator
};