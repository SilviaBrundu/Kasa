function Tags ({tags}) {
    const listTags = tags.map((tags, index) =>
        <li key={index}>{tags}</li>
    )

    return (
        <div className='information_tags_container'>
            <ul className='information_tags_content'>{listTags}</ul>
        </div>
    )
}

    export default Tags;