module.exports = {
    emailRegEx: /^[A-Za-z\d\.\_\-\+]{2,64}\@([A-Za-z\d\-\_]{1,256})\.[A-Za-z\d]+(.[A-Za-z\d]+)?$/,
    passwordRegEx: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])[\w\d!@#$%_]{8,15}$/,
    otpRegEx: /^[0-9]{6}$/,
    phoneRegEx: /^[0-9]{10,12}$/,
    nameRegExp: /^[a-z\sA-z]{50}$/,
}