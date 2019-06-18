
class httpStatus {

    static HTTP_OK = 200
    static HTTP_CREATED = 201
    static HTTP_NO_CONTENT = 204

    static codeEnums() {
        return {
            '200': 'OK',
            '201': 'Created',
            '204': 'No Content',
        }
    }

    static getMsg(code) {
        // console.log(this.codeEnums()[code])
        return this.codeEnums()[code]
    }
}


export default httpStatus