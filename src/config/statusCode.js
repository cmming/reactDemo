
class httpStatus {

    static HTTP_OK = 200
    static HTTP_CREATED = 201
    static HTTP_NO_CONTENT = 204
    static HTTP_NO_FOUND = 404

    static codeEnums() {
        return {
            '200': 'OK',
            '201': 'Created',
            '204': 'No Content',
            '404': 'Not Found',
        }
    }

    static getMsg(code) {
        // console.log(this.codeEnums()[code])
        return this.codeEnums()[code]
    }
}


export default httpStatus