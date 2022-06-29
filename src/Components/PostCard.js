import React from 'react';
import thumbnail from './img/post/post-img1.jpg'

export default function PostCard() {
  return (
    <div className='postcard-container'>
        <div className="post-card">
            <div className="post-card__img">
                <img className="post-card__img-con" src={thumbnail} alt="thumnail" />
            </div>
            <div className="post-card__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, sit aut? Expedita animi quam quia eos accusamus sint harum accusantium reiciendis sunt soluta tenetur ab porro ipsam perferendis sit, rerum temporibus placeat illo quisquam quaerat similique molestias deleniti. Dolorem reiciendis corrupti nisi, at consequatur facilis?</p>
            </div>
        </div>
    </div>
  )
}
