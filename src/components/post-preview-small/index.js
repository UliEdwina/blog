import React from 'react'
import { Link } from 'gatsby'

import PostMetaInfo from '../post-meta-info'
import Image from '../image'
import styles from './index.module.scss'
import * as config from '../../config/blog-config.js'

const PostPreviewSmall = ({ postField: { slug, title, excerpt, date, tags, thumbnail } }) => {
  return (
    <Link key={slug} className={styles.content_link} to={slug}>
      <div className={styles.content_thumbnail}>
        <Image className={styles.content_thumbnail_image} filename={thumbnail || config.defaultThumbnailImagePath} alt={'thumbnail'} />
      </div>
      <div className={styles.content_post_info}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.post_meta_info}>
          <PostMetaInfo tags={tags} date={date} />
        </div>
      </div>
    </Link>
  )
}

export default PostPreviewSmall
