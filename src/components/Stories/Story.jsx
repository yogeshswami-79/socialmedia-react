import React from 'react'
import './story.scss';

export default function Story({story}) {
  return (
    <div className="story-container">
        <img src={story.photo} loading="lazy"/>
        <p className="name">{story.desc? story.desc : "name"}</p>
    </div>
  )
}
