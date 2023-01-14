
const ImageGrid = ({favourites}) => {

    return (

        <div className='fixed bg-neutral-900 w-full'>
            <p className='m-2 text-white text-center'>Favourites</p>
            <div className="flex flex- justify-center">
            {favourites && favourites.length>0 ? 
                favourites.map((item) => (
                    <div>
                        <img src={item.img} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full m-2" alt="Image 1" />
                        <span className='text-white flex justify-center'>{item.cafe.substring(0, 10) + "..."}</span>
                    </div>
                )) : <p className='m-2 text-white text-center'>No favourites yet</p>}
            </div>
        </div>
    );
};
export default ImageGrid;

