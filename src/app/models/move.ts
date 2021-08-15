export interface Move {
    toId: string,
    to?: string,
    fromId?: string,
    from: string,
    at: Date,
    amount: number
}
