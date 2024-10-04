import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Inventory } from '../../typings';
import WeightBar from '../utils/WeightBar';
import InventorySlot from './InventorySlot';
import { getTotalWeight } from '../../helpers';
import { useAppSelector } from '../../store';
import { useIntersection } from '../../hooks/useIntersection';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import circle from '../../photo/circle.png';
import hotbar from '../../photo/hotbar.png';
import InventoryFilter from './InventoryFilter';
import Divider from '../utils/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCubes,
} from '@fortawesome/free-solid-svg-icons';
const PAGE_SIZE = 30;

const InventoryGrid: React.FC<{ inventory: Inventory }> = ({ inventory }) => {
  const weight = useMemo(() => (inventory.maxWeight ? Math.floor(getTotalWeight(inventory.items) * 1000) / 1000 : 0), [inventory.maxWeight, inventory.items]);
  const [page, setPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({ threshold: 0.5 });
  const isBusy = useAppSelector((state) => state.inventory.isBusy);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('tutto');
  // const hotInv = useMemo(() => inventory.items.slice(0, 5), [inventory.items]);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, [entry]);

  const handleFilter = useCallback((filterType: string) => {
    setActiveFilter(filterType);
  }, []);

  const handleBlur = useCallback(() => {
    setSearchQuery('');
  }, []);

  // Filter items starting from slot 6 onward
  const filteredItems = useMemo(() => {
    return inventory.items
      .slice(5) // Exclude the first 5 items (hotbar)
      .filter((item) => {
        const nameMatch =
          item.label?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          searchQuery === '';
        return activeFilter === 'tutto' || item.tipologia === activeFilter;
      });
  }, [inventory.items, searchQuery, activeFilter]);

  // Paginate the filtered items
  const paginatedItems = useMemo(() => {
    return filteredItems.slice(0, (page + 1) * PAGE_SIZE);
  }, [filteredItems, page]);

  // Handle the hotbar items separately
  const hotInv = useMemo(() => inventory.items.slice(0, 5), [inventory.items]);

  // const paginatedItems = useMemo(() => {
  //   return filteredItems.slice(inventory.type === 'player' ? 5 : 0, (page + 1) * PAGE_SIZE);
  // }, [filteredItems, page]);

  return (
    <>
      {inventory.type === 'player' && <InventoryFilter activeFilter={activeFilter} handleFilter={handleFilter} />}
      <div className="inventory-grid-wrapper" style={{ pointerEvents: isBusy ? 'none' : 'auto' }}>
        <div>
        {inventory.maxWeight && inventory.label && (
          <div className="inventory-grid-header-wrapper">
            <div className='hotbar-wrapper'>
            <div className='circle-class2'>
              <div className='circle-css'>
              <FontAwesomeIcon icon={faCubes} style={{ fontSize: '2.2vh', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            <img className='circle-img' src={circle} alt="Context" />
            </div>
              </div>
              <div className='header-text'>
              <p className='inventory-label'>{inventory.label}</p>
              <WeightBar  percent={inventory.maxWeight ? (weight / inventory.maxWeight) * 100 : 0} durability  />
              </div>
            </div>
              
          </div>
              )}
        </div>
        <div className="inventory-grid-container" ref={containerRef}>
          {paginatedItems.map((filteredItem) => (
            <InventorySlot
              key={`${inventory.type}-${inventory.id}-${filteredItem.slot}`}
              item={filteredItem}
              ref={null}
              inventoryType={inventory.type}
              inventoryGroups={inventory.groups}
              inventoryId={inventory.id}
            />
          ))}
          <div style={{ position: 'absolute', marginTop: '60vh' }}>
            {inventory.type === 'player' && (
              <div style={{ marginBottom: '0.5vw' }}>
                <div style={{ fontSize: '2vw', textShadow: '0 0vh 1vh #231b0cb6'}}>Barra rapida</div>
                <img className='hotbar-img' src={hotbar} alt="Context" />
                <Divider />
              </div>
            )}
            <div className="inventory-grid-container2" ref={containerRef}>
              {inventory.type === 'player' && hotInv.map((item, index) => (
                <InventorySlot
                  key={`${inventory.type}-${inventory.id}-${item.slot}`}
                  item={item}
                  ref={index === (page + 1) * PAGE_SIZE - 1 ? ref : null}
                  inventoryType={inventory.type}
                  inventoryGroups={inventory.groups}
                  inventoryId={inventory.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryGrid;
