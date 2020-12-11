import React from 'react'
import '../css/watch/Comments.css'
import SortIcon from '@material-ui/icons/Sort'


function Comments() {


    // const fetchApi = async () => {
    //     const response = await axios({
    //     method: 'GET',
    //     url: 'https://api.randomuser.me/'
    //     })
    //      response.data
    //     }
    

    return (
        <div className = "comments">
          
            <div className="comment-counts">
                <p className = "comment___counts">1,410 Comments</p>
                <SortIcon />
                <p className = "comment___sort"> SORT BY</p>
            </div>
            <div className="enter-comment">
                <img className = "channel-image" src="https://yt3.ggpht.com/ytc/AAUvwnjMvTF0TIvlwQ6swHj-eH1RbZLNNH9ckUHte79v=s88-c-k-c0x00ffffff-no-rj" alt="your-channel"/>
                <input type="text" placeholder = "Add a public comment..."/>
            </div>
        </div>
    )
}

export default Comments
