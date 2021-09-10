import * as fs from 'fs';


export type Post= {
    id: number;
    title: string;
    body: string;
    postedBy: string;
}

// abstraction to get loose coupling between client and actual implementation
export interface IPostsService {
    getAll(): Promise<Post[]>;
    save(post: Post): Promise<void>;
}

// concrete implementation of interface which reads posts from file
export class PostsService implements IPostsService {
    private _fileName: string = "posts.json";
    
    constructor() {

    }
    
    getAll(): Promise<Post[]> {
        return new Promise((resolve, reject) => {
            fs.readFile(this._fileName, "utf8", (err, data) => {
                if(err) {
                    reject(err);
                }
                resolve(JSON.parse(data));
            });
        });
    }
    save(post: Post): Promise<void> {
        return new Promise((resolve, reject) => {
            this.getAll().then(posts => {
                posts.push(post);
                fs.writeFile(this._fileName, JSON.stringify(posts), err => {
                    if(err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                })
            })
        })
    }
}

// concrete implementation of interface which reads posts from in-memory array
export class MockPostsService implements IPostsService {
    posts: Post[] = [];
    constructor() {
        this.posts = [
            {id: 1, title: 'Test Post 1', body: 'Test Post 1', postedBy: 'Me'},
            {id: 2, title: 'Test Post 2', body: 'Test Post 2', postedBy: 'Me'},
            {id: 3, title: 'Test Post 3', body: 'Test Post 3', postedBy: 'Me'},
            {id: 4, title: 'Test Post 4', body: 'Test Post 4', postedBy: 'Me'},
        ]
    }
    
    getAll(): Promise<Post[]> {
        return Promise.resolve(this.posts);
    }
    save(post: Post): Promise<void> {
        this.posts.push(post);
        return Promise.resolve();
    }
}

// a news feed client which interacts with interface and does not need to know concrete implementation
export class NewsFeed {
    constructor(private _service: IPostsService) {

    }

    show() {
        this._service.getAll().then(posts => {
            posts.forEach(post => {
                console.log(`${post.title} - ${post.body}`);
            })
        });
    }
}

// Inject dependency during runtime 
let newsFeed1 = new NewsFeed(new PostsService());
let newsFeed2 = new NewsFeed(new MockPostsService());
newsFeed1.show(); //show posts from file
newsFeed2.show(); //show posts from mock service