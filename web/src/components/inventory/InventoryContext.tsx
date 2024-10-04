import { onUse } from '../../dnd/onUse';
import { onGive } from '../../dnd/onGive';
import { onDrop } from '../../dnd/onDrop';
import { Items } from '../../store/items';
import { fetchNui } from '../../utils/fetchNui';
import { Locale } from '../../store/locale';
import { getItemUrl, isSlotWithItem } from '../../helpers';
import { setClipboard } from '../../utils/setClipboard';
import { useAppDispatch, useAppSelector } from '../../store';
import React, { useState } from 'react';
import { Menu, MenuItem } from '../utils/menu/Menu';
import { SlotWithItem } from '../../typings/slot';
import { Inventory } from '../../typings';
import contextImage from '../../photo/context.png';
import Divider from '../utils/Divider';
import { selectItemAmount, setItemAmount } from '../../store/inventory';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface DataProps {
  action: string;
  component?: string;
  slot?: number;
  serial?: string;
  id?: number;
}

interface Button {
  label: string;
  index: number;
  group?: string;
}

interface Group {
  groupName: string | null;
  buttons: ButtonWithIndex[];
}

interface ButtonWithIndex extends Button {
  index: number;
}

interface GroupedButtons extends Array<Group> {}

const InventoryContext: React.FC = () => {
  const contextMenu = useAppSelector((state) => state.contextMenu);
  const item = contextMenu.item;
  const dispatch = useAppDispatch();
  const itemAmount = useAppSelector(selectItemAmount);
  const [quantity, setQuantity] = useState<number>(0);
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let valueAsNumber = event.target.valueAsNumber;

    if (valueAsNumber % 1 !== 0 || isNaN(valueAsNumber) || valueAsNumber < 0) {
      valueAsNumber = 0;
    }

    setQuantity(valueAsNumber);
    dispatch(setItemAmount(valueAsNumber));
  };
  const handleClick = (data: DataProps) => {
    if (!item) return;

    switch (data && data.action) {
      case 'use':
        onUse({ name: item.name, slot: item.slot });
        break;
      case 'give':
        onGive({ name: item.name, slot: item.slot });
        break;
      case 'drop':
        isSlotWithItem(item) && onDrop({ item: item, inventory: 'player' });
        break;
      case 'remove':
        fetchNui('removeComponent', { component: data?.component, slot: data?.slot });
        break;
      case 'removeAmmo':
        fetchNui('removeAmmo', item.slot);
        break;
      case 'copy':
        setClipboard(data.serial || '');
        break;
      case 'custom':
        fetchNui('useButton', { id: (data?.id || 0) + 1, slot: item.slot });
        break;
    }
  };

  const groupButtons = (buttons: any): GroupedButtons => {
    return buttons.reduce((groups: Group[], button: Button, index: number) => {
      if (button.group) {
        const groupIndex = groups.findIndex((group) => group.groupName === button.group);
        if (groupIndex !== -1) {
          groups[groupIndex].buttons.push({ ...button, index });
        } else {
          groups.push({
            groupName: button.group,
            buttons: [{ ...button, index }],
          });
        }
      } else {
        groups.push({
          groupName: null,
          buttons: [{ ...button, index }],
        });
      }
      return groups;
    }, []);
  };

  return (
    <>
      <Menu>
    
      <img className='context-arrow' src={contextImage} alt="Context" />
        <div className='context'>
          <div className='context-infos'>
          <img className='contex-img' src={item?.name ? getItemUrl(item as SlotWithItem) : 'none'} alt=""/>
        <div className="div-span">
          <div className="header">
          <span className='context-span'>
  {item && item.metadata ? item.metadata.label  || Items[item.name]?.label || item?.name : ''
  }
      </span>
          <div className='qtty'>
          {item && item.weight > 0 &&
          <p className='qtty-item'>                  
          {item.weight >= 1000
          ? `${(item.weight / 1000).toLocaleString('en-us', {
          minimumFractionDigits: 2,
          })}kg `
          : `${item.weight.toLocaleString('en-us', {
          minimumFractionDigits: 0,
          })}g `}
                                  
          </p>
          }
          {item && item.count &&
          <p className='qtty-item'>{item.count.toLocaleString('en-us') + `x`}</p>
          }
          </div>
          </div>
        <div className="item-categories">
          <span className="type">{item?.tipologia || 'Non rilevato'}</span>
          <span className="rarity">{item?.rarity || 'Non rilevato'}</span>
        </div>
        </div>
          </div>
          {item && item.metadata && (
            <>
          <span>Descrizione: </span>
          <br />
        <span className='contex-span2'>
        {item && item.metadata ? item.metadata.description  || Items[item.name]?.description : ''}
        </span>
        </>
         )} 
        <Divider/>
        {item && item.durability && item.durability > 0 && (
          <>
        <div className='context-buttons'>
        <div className='context-button'>
        <span>DURABILITA' ITEM</span>
        </div>
        <div style={{width:'50px'}}>
        <CircularProgressbarWithChildren strokeWidth={6} value={item?.durability ?? 0}
                  styles={buildStyles({
                    pathColor: `goldenrod`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
                >
                <span>{item?.durability}%</span>
                </CircularProgressbarWithChildren>
                </div>
        <br />
        </div>
        <Divider/>
        </>
      )}
        </div>
        <div className='buttons-context'>
        <MenuItem onClick={() => handleClick({ action: 'use' })} label={Locale.ui_use || 'Utilizza'} />
        <MenuItem onClick={() => handleClick({ action: 'give' })} label={Locale.ui_give || 'Dona'} />
        <MenuItem onClick={() => handleClick({ action: 'drop' })} label={Locale.ui_drop || 'Getta'} />
     
        {item && item.metadata?.ammo > 0 && (
          <MenuItem onClick={() => handleClick({ action: 'removeAmmo' })} label={Locale.ui_remove_ammo} />
        )}
        {item && item.metadata?.serial && (
          <MenuItem
            onClick={() => handleClick({ action: 'copy', serial: item.metadata?.serial })}
            label={Locale.ui_copy}
          />
        )}
        {item && item.metadata?.components && item.metadata?.components.length > 0 && (
          <Menu label={Locale.ui_removeattachments}>
            {item &&
              item.metadata?.components.map((component: string, index: number) => (
                <MenuItem
                  key={index}
                  onClick={() => handleClick({ action: 'remove', component, slot: item.slot })}
                  label={Items[component]?.label || ''}
                />
              ))}
          </Menu>
        )}
        {((item && item.name && Items[item.name]?.buttons?.length) || 0) > 0 && (
          <>
            {item &&
              item.name &&
              groupButtons(Items[item.name]?.buttons).map((group: Group, index: number) => (
                <React.Fragment key={index}>
                  {group.groupName ? (
                    <Menu label={group.groupName}>
                      {group.buttons.map((button: Button) => (
                        <MenuItem
                          key={button.index}
                          onClick={() => handleClick({ action: 'custom', id: button.index })}
                          label={button.label}
                        />
                      ))}
                    </Menu>
                  ) : (
                    group.buttons.map((button: Button) => (
                      <MenuItem
                        key={button.index}
                        onClick={() => handleClick({ action: 'custom', id: button.index })}
                        label={button.label}
                      />
                    ))
                  )}
                </React.Fragment>
              ))}
          </>
          
        )}
           </div>
        {item && (
          <>
          <Divider></Divider>
          <div className="quantity-div">
          <span>QUANTITA': {quantity}</span>
            <input
              type="range"
              className='quantity-slider'
              id="quantity-slider"
              min={1}
              max={item.count}
              step={1}
              defaultValue={itemAmount}
              onChange={inputHandler}
            />
          </div>      
            </>
        )}
      </Menu>
    </>
  );
};

export default InventoryContext;

