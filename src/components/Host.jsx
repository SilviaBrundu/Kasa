function Host ({host}) {

    return (
        <div className='info_host_content'>
            <p className='info_host_name'>{host.name}</p>
            <img className='info_host_picture'src={host.picture} alt={'hôte(sse): ' + host.name}></img>
        </div>
    )
};

    export default Host;