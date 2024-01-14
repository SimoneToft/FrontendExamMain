import React from "react";
import Product from "./Product";

function Components() {
    const fishData = [
        { name: 'Moon Jellyfish', text: '(Aurelia aurita)', price: '$20', image: 'https://www.eopugetsound.org/sites/default/files/styles/magazinewidth_592px/public/topical_article/images/moon_jellyfish.jpg?itok=Esreg6zX'},
        { name: 'Anemone', text: '(Rose Bubble Tip)', price: '$140', image: 'https://static.wixstatic.com/media/f14946_e93a30d15ec24361805c00b3f721ddd1~mv2.jpg/v1/fill/w_2034,h_2036,al_c,q_85/f14946_e93a30d15ec24361805c00b3f721ddd1~mv2.jpg' },
        { name: 'Snail', text: '(Astraea Turbo)', price: '$2', image: 'https://www.abyssaquatics.co.uk/wp-content/uploads/2020/10/100073-1.jpg' },
        { name: 'Fire Blood Shrimp', text: '(Lysmata debelius)', price: '$65', image: 'https://www.oceanaquarium.com/wp-content/uploads/2012/12/35_fire_shrimp.jpg' },
        { name: 'Blue Tuxedo Urchin', text: '(Mespilia sp.) ', price: '$29', image: 'https://www.discountcoral.com/cdn/shop/products/BlueTuxedoUrchin.jpg?v=1661358001' },
      ];
    
      return (
        <div className="content">
          <h1>Fancy Fish</h1>
          <p>blub blub</p>
          {fishData.map(fish => (
            <Product
              key={fish.name}
              productId={fish.id}
              productName={fish.name}
              productText={fish.text}
              productPrice={fish.price}
              productImage={fish.image}
            />
          ))}
        </div>
      );
    }

export default Components;
