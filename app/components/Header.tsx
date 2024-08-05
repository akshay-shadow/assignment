import Image from 'next/image';

const Header = () => {
    return(
        <header>
            <div className='cartWrap'>
                <Image
                    src="/cart.png"
                    width={50}
                    height={200}
                    className="cartIcon"
                    alt=""
                />
                {/* <span>01</span> */}
            </div>
        </header>
    )   
    
}

export default Header