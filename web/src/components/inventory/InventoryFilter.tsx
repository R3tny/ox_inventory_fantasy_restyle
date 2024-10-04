import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faPlug,
  faPlateWheat,
  faKitMedical,
  faGun,
  faFlask,
  faCubesStacked,
  faScrewdriverWrench,
  faCoins
} from '@fortawesome/free-solid-svg-icons';
import filter from '../../photo/filter.png';
import Divider from '../utils/Divider';

interface FilterOption {
  label: string;
  icon: any;
  type: string;
  rarity?: string;
}

interface InventoryFilterProps {
  activeFilter: string;
  handleFilter: (filterType: string) => void;
}

const filterOptions: FilterOption[] = [
  { label: 'Tutto', icon: faGlobe, type: 'tutto' },
  { label: 'Cibo', icon: faPlateWheat, type: 'cibo' },
  { label: 'Cure', icon: faKitMedical, type: 'cura' },
  { label: 'Armi', icon: faGun, type: 'arma' },
  { label: 'Pozioni', icon: faFlask, type: 'pozione' },
  { label: 'Materiali', icon: faCubesStacked, type: 'materiale' },
  { label: 'Utensili', icon: faScrewdriverWrench, type: 'utensile' },
  { label: 'Valute', icon: faCoins, type: 'valuta' },
];

const InventoryFilter: React.FC<InventoryFilterProps> = ({ activeFilter, handleFilter }) => {
  return (
<div className="filter-buttons">
  {filterOptions.map((option, index) => (
    <React.Fragment key={option.type}>
      <div className="filter-div">
        <button
          className={`filter-button ${activeFilter === option.type ? 'active' : ''}`}
          onClick={() => handleFilter(option.type)}
        >
          <FontAwesomeIcon icon={option.icon} />
        </button>
        <img className="filter-img" src={filter} alt="" />
      </div>
      {index === 0 && <Divider />}
    </React.Fragment>
  ))}
</div>

  );
};

export default InventoryFilter;
