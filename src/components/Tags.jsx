function Tags ({tags}) {
    const listTags = tags.map((tags, index) =>
        <li className='info_tags' key={index}>{tags}</li>
    )

    return (
        <div className='info_tags_container'>
            <ul className='info_tags_content'>{listTags}</ul>
        </div>
    )
}

    export default Tags;