function Host ({host}) {

    return (
        <div className='information_host_content'>
            <img className='informaton_host_picture'src={host.picture} alt={'hôte(sse): ' + host.name}></img>
            <p className='information_host_name'>{host.name}</p>
        </div>
    )
};

    export default Host;