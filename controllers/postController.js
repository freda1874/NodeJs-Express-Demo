
let posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
    { id: 4, title: 'Post 4' },
]

export const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit));
    } else (res.json(posts));

}

export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    } else {
        res.status(200).json(post);
    }

}

export const createPost = (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title

    };
    if (!newPost.title) {
        return res.status(400).json({ msg: 'Please include a title' });
    }
    posts.push(newPost);
    res.status(201).json(posts);
}

export const updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        res.status(404).json({ msg: `post with ${id} is not found` });
    }
    post.title = req.body.title;
    res.status(200).json(posts);
}

export const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return res.status(404).json({ msg: `post with ${id} is not found` })
    }
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
}