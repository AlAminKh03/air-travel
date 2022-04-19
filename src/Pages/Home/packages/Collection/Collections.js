import React from 'react';
import img1 from "../../../../picture/package/coxsbazar.jpg"
import img2 from "../../../../picture/package/rangamati.jpg"
import img3 from "../../../../picture/package/sajek.jpg"
import img4 from "../../../../picture/package/shylhet.jpg"
import img5 from "../../../../picture/package/st-martin.jpg"
import img6 from "../../../../picture/package/sundarban.jpg"
import Collection from '../Package/Collection';

const Collections = () => {
    const collections = [
        { id: 1, name: "Cox's Bazar", price: 3000, description: "No matter what time it is except rainy season it's always time to go to coxs bazar", img: img1 },

        { id: 2, name: "Rangamati", price: 2000, description: "If nature is your cup of tea Rangamati should be you first choice", img: img2 },

        { id: 3, name: "Sajek", price: 3000, description: "Feeling Fancy or cloudy? Everything a man want is Sajek, oh could say trendy too", img: img3 },

        { id: 4, name: "Shylet", price: 3000, description: "Sleepy?? Why not become a strong of with wind of chaa bagaan", img: img4 },

        { id: 5, name: "S.T. Martin", price: 4000, description: "Why not in a fresh beach with fresh water that is low cost BALI", img: img5 },

        { id: 6, name: "Sundarbaan", price: 3000, description: "ROOOAAAAR!!!! or hissshhhhh except all of these somw inner peace to have you Sundarbans", img: img6 }
    ]

    return (
        <div id="packages" className='container'>
            <h1 className='text-primary text-center mt-5'>Our Packages</h1>
            <div >
                {
                    collections.map(collection => <Collection
                        key={collection.id}
                        collection={collection}
                    ></Collection>)
                }
            </div>
        </div>
    );
};

export default Collections;