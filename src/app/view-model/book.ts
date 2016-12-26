export class Book {

    constructor(
        public id: number,
        public title: string,
        public author: string,
        public rating: string,
        public url?: string, // Note: url is marked as nullable since it is optional
        
    ) {
        // empty constructor-body
    }
}
