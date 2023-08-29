'use client';

import Image from "next/image"
import Link from "next/link"
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname();


    return (
        <header className="w-full flex items-center justify-between px-4 md:px-12 py-2 fixed top-0 z-50 shadow bg-white">
            <Link href={'/'}>
                <Image
                    src={'/logo.jpg'}
                    alt={'Logo'}
                    width={150}
                    height={20}
                />
            </Link>
            <div className="flex items-center space-x-2.5 text-sm">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={'/'} className={pathname == "/" ?  "mr-5 active text-lg":"mr-5 hover:text-gray-900 text-lg" }>
                        Home page
                    </Link>
                    <Link href={'/products'} className={pathname == "/products" ?  "active text-lg mr-5":"mr-5 hover:text-gray-900 text-lg" }>All products</Link>
                    <Link href={'/contacts'} className={pathname == "/contacts" ?  "active text-lg":"mr-5 hover:text-gray-900 text-lg" }>Contacts</Link>
                </nav>
                <IconButton aria-label="like">
                    <Badge  color="error"  showZero={false}>
                        <FavoriteBorderIcon />
                    </Badge>
                </IconButton>
                <Link href={'/shopping-cart'}>
                    <IconButton aria-label="cart">
                        <Badge id="cart-badge" color="error" showZero={false}>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Link>
                <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-blue-600">
                    Log in
                </button>
                <button className="button bg-transparent text-blue-600 border-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white">
                    Sing up
                </button>
            </div>
        </header>
    )
}

export default Navbar
