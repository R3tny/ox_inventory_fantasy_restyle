import InventoryComponent from './components/inventory';
import useNuiEvent from './hooks/useNuiEvent';
import { Items } from './store/items';
import { Locale } from './store/locale';
import { setImagePath } from './store/imagepath';
import { setupInventory } from './store/inventory';
import { Inventory } from './typings';
import { useAppDispatch } from './store';
import { debugData } from './utils/debugData';
import DragPreview from './components/utils/DragPreview';
import { fetchNui } from './utils/fetchNui';
import { useDragDropManager } from 'react-dnd';
import KeyPress from './components/utils/KeyPress';

debugData([
  {
    action: 'setupInventory',
    data: {
      leftInventory: {
        id: 'test',
        type: 'player',
        slots: 50,
        label: 'Fanculo Tera',
        weight: 3000,
        maxWeight: 5000,
        items: [
           { slot: 1, name: 'weapon_pistol', tipologia: 'cibo',rarity: 'speciale',  weight: 100, count: 12 ,metadata: {label: 'water', description: 'Generic item description', durability: 80 }, },
          // { slot: 2, name: 'water', tipologia: 'cibo',rarity: 'speciale',  weight: 100, count: 12 ,metadata: {label: 'water', description: 'Generic item description', durability: 80 }, },
          // { slot: 3, name: 'water', tipologia: 'cibo',rarity: 'speciale',  weight: 100, count: 12 ,metadata: {label: 'water', description: 'Generic item description', durability: 80 }, },
          // { slot: 4, name: 'water', tipologia: 'cibo',rarity: 'speciale',  weight: 100, count: 12 ,metadata: {label: 'water', description: 'Generic item description', durability: 80 }, },
          // { slot: 5, name: 'water', tipologia: 'cibo',rarity: 'speciale',  weight: 100, count: 12 ,metadata: {label: 'water', description: 'Generic item description', durability: 80 }, },
          { slot: 6, name: 'water', tipologia: 'cibo',rarity: 'comune',  weight: 200, count: 12 ,metadata: {label: 'water', description: 'Generic item description', durability: 10 }, },
          { slot: 7, name: 'water', tipologia: 'cibo',rarity: 'raro',  weight: 100, count: 12 ,metadata: {label: 'water', description: 'Generic item description' }, },
          { slot: 8, name: 'water', tipologia: 'cibo',rarity: 'epico',  weight: 100, count: 12 ,metadata: {label: 'water', description: 'Generic item description' }, },
          { slot: 9, name: 'water', tipologia: 'cibo',rarity: 'leggendario',  weight: 100, count: 12 ,metadata: {label: 'water', description: 'Generic item description' }, },
          { slot: 10, name: 'water', tipologia: 'cibo',rarity: 'speciale',  weight: 100, count: 12 ,metadata: {label: 'water', description: 'Generic item description',durability: 80 }, },
        ],
      },
      rightInventory: {
        id: 'shop',
        type: 'crafting',
        slots: 5000,
        label: 'Fanculo Tera',
        weight: 3000,
        maxWeight: 5000,
        items: [
          {
            slot: 1,
            name: 'lockpick',
            weight: 500,
            price: 300,
            ingredients: {
              water: 1,
            },
            metadata: {
              description: 'Simple lockpick that breaks easily and can pick basic door locks',
            },
          },
        ],
      },
    },
  },
]);

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const manager = useDragDropManager();

  useNuiEvent<{
    locale: { [key: string]: string };
    items: typeof Items;
    leftInventory: Inventory;
    imagepath: string;
  }>('init', ({ locale, items, leftInventory, imagepath }) => {
    for (const name in locale) Locale[name] = locale[name];
    for (const name in items) Items[name] = items[name];

    setImagePath(imagepath);
    dispatch(setupInventory({ leftInventory }));
  });

  fetchNui('uiLoaded', {});

  useNuiEvent('closeInventory', () => {
    manager.dispatch({ type: 'dnd-core/END_DRAG' });
  });

  return (
    <div className="app-wrapper">
      <InventoryComponent />
      <DragPreview />
      <KeyPress />
    </div>
  );
};

addEventListener("dragstart", function(event) {
  event.preventDefault()
})

export default App;
