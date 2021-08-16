export class Contact {

    constructor(public _id?: string, public name: string = '', public email: string = '', public phone: string = '', public balance?: number, public moves?: {
        toId: string,
        to: string,
        fromId: string,
        from: string,
        at: Date,
        amount: number
    }[]) {

    }

    setId?() {
        // Implement your own set Id
        function _makeId(length = 8) {
            var txt = ''
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            for (var i = 0; i < length; i++) {
                txt += possible.charAt(Math.floor(Math.random() * possible.length))
            }
            return txt
        }

        this._id = _makeId()
    }
}

