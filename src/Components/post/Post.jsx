import './post.css';

const Post = () => {
    return (
        <div className="post">
           <img 
           className="postImg"
           src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
           alt="" />
           <div className="postInfo">
             <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
             </div>
                <span className="postTitle"> Lorem ipsum dolor sit amet consectetur.</span>
                <hr />
                <span className="postDate"> 1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti assumenda error ut hic quos, quam distinctio vero repellendus mollitia ipsa, fugiat aliquid aperiam delectus dignissimos facere rerum architecto facilis esse? Cumque eveniet expedita distinctio dicta consequatur? Nesciunt laudantium aliquid adipisci dolorum illum totam eaque obcaecati ratione architecto, vitae sed eos.
            </p>
        </div>

    );
};

export default Post;