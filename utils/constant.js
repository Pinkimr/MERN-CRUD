const HTTP_CODE = {
    created: 201,
    ok: 200,
    unAuthorized: 401,
    account_not_found: 302,
    dataNotFound: 404,
    forbidden: 403,
    badRequest: 400,
    internalServerError: 500,
    anotherDevice: 208
}


let DB_MODEL_REF = {
    CUSTOMER: 'customers',
    PRODUCT: 'products'
}

module.exports = {
    HTTP_CODE,
    DB_MODEL_REF
}