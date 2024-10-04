import React, { useState } from 'react';
import { getItemUrl, isSlotWithItem } from '../../helpers';
import useNuiEvent from '../../hooks/useNuiEvent';
import { Items } from '../../store/items';
import WeightBar from '../utils/WeightBar';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';
import { SlotWithItem } from '../../typings';
import SlideUp from '../utils/transitions/SlideUp';
import square from '../../photo/square.png';
import contextImage from '../../photo/context.png';
import bg from '../../photo/bg2.png';

const getRarityColor = (rarity:string) => {
  switch (rarity) {
    case 'comune':
      return 'green';
    case 'raro':
      return 'cyan';
    case 'epico':
      return 'purple';
    case 'leggendario':
      return 'gold';
    case 'speciale':
      return 'white';
    default:
      return 'black'; 
  }
};
const InventoryHotbar: React.FC = () => {
  const [hotbarVisible, setHotbarVisible] = useState(false);
  const items = useAppSelector(selectLeftInventory).items.slice(0, 5);

  //stupid fix for timeout
  const [handle, setHandle] = useState<NodeJS.Timeout>();
  useNuiEvent('toggleHotbar', () => {
    if (hotbarVisible) {
      setHotbarVisible(false);
    } else {
      if (handle) clearTimeout(handle);
      setHotbarVisible(true);
      setHandle(setTimeout(() => setHotbarVisible(false), 3000));
    }
  });
  

  return (
    <SlideUp in={hotbarVisible}>
      <div className="hotbar-container">
        {items.map((item) => (
          <div
            className="hotbar-item-slot"
            style={{
              filter:
                  item?.durability == 0 
                ? 'brightness(80%) grayscale(100%)'
                : undefined,
            opacity: 1.0,
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            border: '',
            }}
            key={`hotbar-${item.slot}`}
          >
                  <img 
  className="inventory-slot-bg" 
  src={item?.name ? getItemUrl(item as SlotWithItem) : ''} 
  style={
    item 
    ? item.rarity === 'speciale' 
      ? { animation: 'prismaticShadow 2s infinite' } 
      : { filter: `drop-shadow(0 0 10px ${getRarityColor(item.rarity || 'comune')})` }
    : {}
  }
/>
      <img className="inventory-slot-arrow" src={contextImage} alt="Context" />
      <div className="decoration">
        <img className="inventory-slot-img" src={square} alt="Context" />
        <img className="inventory-slot-img" src={square} alt="Context" />
        <img className="inventory-slot-img" src={square} alt="Context" />
        <img className="inventory-slot-img" src={square} alt="Context" />
      </div>
          </div>
        ))}
      </div>
    </SlideUp>
  );
};

export default InventoryHotbar;
